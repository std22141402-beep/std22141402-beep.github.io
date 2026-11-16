package iq.salka.app.loc;

import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;

import androidx.annotation.NonNull;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationAvailability;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.Priority;

/**
 * مزوّد الموقع: Fused من خدمات گوگل (GPS + واي فاي + أبراج + حساسات) بأعلى دقة كل ثانية.
 * الفرق عن مكتبة گوگل: لما تنقطع الإشارة (جسر، بنايات، نفق) ما نوقف التحديثات —
 * نكمل ننتظر والقراءات ترجع وحدها أول ما ترجع الإشارة.
 */
class SalkaLocationProvider {
    interface Sink { void run(String name, Bundle args); }

    private static final String NEW_LOCATION = "onNewLocationAvailable";
    private static final String NEW_ERROR = "onNewErrorAvailable";

    private final Context ctx;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final LocationManager lm;
    private FusedLocationProviderClient fused;
    private volatile Sink sink;
    private volatile long lastFixAt;
    private boolean fusedOn;
    private boolean lmOn;

    private final LocationCallback fusedCb = new LocationCallback() {
        @Override
        public void onLocationResult(@NonNull LocationResult result) {
            for (Location l : result.getLocations()) deliver(l);
        }

        @Override
        public void onLocationAvailability(@NonNull LocationAvailability availability) {
            // مكتبة گوگل توقف التحديثات هنا نهائياً. احنا نكمل، ونبلغ بس إذا الموقع مطفي بالموبايل.
            if (!availability.isLocationAvailable() && !locationEnabled()) {
                error("Location services disabled");
            }
        }
    };

    private final LocationListener lmListener = new LocationListener() {
        @Override public void onLocationChanged(@NonNull Location location) { deliver(location); }
        @Override public void onStatusChanged(String provider, int status, Bundle extras) { }
        @Override public void onProviderEnabled(@NonNull String provider) { }
        @Override public void onProviderDisabled(@NonNull String provider) {
            if (!locationEnabled()) error("Location services disabled");
        }
    };

    SalkaLocationProvider(Context c) {
        ctx = c.getApplicationContext();
        lm = (LocationManager) ctx.getSystemService(Context.LOCATION_SERVICE);
        try {
            if (GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(ctx)
                    == ConnectionResult.SUCCESS) {
                fused = LocationServices.getFusedLocationProviderClient(ctx);
            }
        } catch (Throwable ignored) {
            fused = null;
        }
    }

    void start(Sink s, boolean highAccuracy) {
        sink = s;
        main.post(() -> startOnMain(highAccuracy));
    }

    void stop() {
        sink = null;
        main.post(this::stopUpdates);
    }

    private void startOnMain(boolean highAccuracy) {
        stopUpdates();
        if (sink == null) return;
        if (!SalkaLocationHandler.hasAny(ctx)) {
            error("Location permission not granted");
            return;
        }
        if (!locationEnabled()) error("Location services disabled");
        final boolean fine = SalkaLocationHandler.hasFine(ctx);
        lastFixAt = 0;
        if (fused != null) {
            try {
                int priority = fine && highAccuracy
                        ? Priority.PRIORITY_HIGH_ACCURACY : Priority.PRIORITY_BALANCED_POWER_ACCURACY;
                LocationRequest req = new LocationRequest.Builder(priority, 1000)
                        .setMinUpdateIntervalMillis(500)
                        .setMinUpdateDistanceMeters(0f)
                        .setMaxUpdateDelayMillis(0)
                        .setWaitForAccurateLocation(false)
                        .build();
                fused.getLastLocation().addOnSuccessListener(l -> {
                    // آخر موقع معروف بس إذا حديث (أقل من دقيقتين) وما وصلت قراءة حية بعد
                    if (l != null && lastFixAt == 0
                            && System.currentTimeMillis() - l.getTime() < 120000) deliver(l);
                });
                fused.requestLocationUpdates(req, fusedCb, Looper.getMainLooper())
                        .addOnFailureListener(e -> main.post(() -> startLocationManager(fine)));
                fusedOn = true;
                return;
            } catch (SecurityException e) {
                error("Location permission not granted");
                return;
            } catch (Throwable t) {
                fusedOn = false;
            }
        }
        startLocationManager(fine);
    }

    /** احتياطي بدون خدمات گوگل: GPS مباشرة + الشبكة */
    private void startLocationManager(boolean fine) {
        if (lm == null || sink == null) return;
        try {
            boolean any = false;
            if (fine && lm.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
                lm.requestLocationUpdates(LocationManager.GPS_PROVIDER, 500, 0f, lmListener, Looper.getMainLooper());
                any = true;
            }
            if (lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER)) {
                lm.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 1000, 0f, lmListener, Looper.getMainLooper());
                any = true;
            }
            lmOn = any;
            if (!any) error("Location services disabled");
        } catch (SecurityException e) {
            error("Location permission not granted");
        } catch (Throwable t) {
            error("Unable to request location updates.");
        }
    }

    private void stopUpdates() {
        if (fusedOn && fused != null) {
            try { fused.removeLocationUpdates(fusedCb); } catch (Throwable ignored) { }
        }
        if (lmOn && lm != null) {
            try { lm.removeUpdates(lmListener); } catch (Throwable ignored) { }
        }
        fusedOn = false;
        lmOn = false;
    }

    private void deliver(Location l) {
        Sink s = sink;
        if (s == null || l == null) return;
        lastFixAt = System.currentTimeMillis();
        Bundle b = new Bundle();
        b.putDouble("latitude", l.getLatitude());
        b.putDouble("longitude", l.getLongitude());
        b.putLong("timeStamp", l.getTime());
        if (l.hasAltitude()) b.putDouble("altitude", l.getAltitude());
        if (l.hasAccuracy()) b.putDouble("accuracy", l.getAccuracy());
        if (l.hasBearing()) b.putDouble("bearing", l.getBearing());
        if (l.hasSpeed()) b.putDouble("speed", l.getSpeed());
        s.run(NEW_LOCATION, b);
    }

    private void error(String message) {
        Sink s = sink;
        if (s == null) return;
        Bundle b = new Bundle();
        b.putString("message", message);
        s.run(NEW_ERROR, b);
    }

    boolean locationEnabled() {
        if (lm == null) return true;
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) return lm.isLocationEnabled();
            return lm.isProviderEnabled(LocationManager.GPS_PROVIDER)
                    || lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
        } catch (Throwable t) {
            return true;
        }
    }
}
