package iq.salka.app.loc;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.location.LocationManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.widget.Toast;

import com.google.android.gms.common.api.ResolvableApiException;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.LocationSettingsRequest;
import com.google.android.gms.location.Priority;

/**
 * ضغطة وحدة من زر «موقعي» (salka://location/setup):
 *  1) إذا ماكو صلاحية: نافذة أندرويد للصلاحية — وإذا مرفوضة نهائياً نفتح صفحة إعدادات سالكة مباشرة.
 *  2) إذا «تقريبي»: نطلب «الدقيق».
 *  3) إذا الموقع مطفي بالموبايل: نافذة النظام «تشغيل الموقع؟» (مثل كوكل ماب وويز).
 * وبعدها نرجع للتطبيق فوراً.
 */
public class LocationSetupActivity extends Activity {
    private static final int REQ_PERMISSION = 1;
    private static final int REQ_RESOLVE = 2;
    private static final String FINE = Manifest.permission.ACCESS_FINE_LOCATION;
    private static final String COARSE = Manifest.permission.ACCESS_COARSE_LOCATION;
    private boolean busy;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (savedInstanceState == null) step();
    }

    private void step() {
        if (SalkaLocationHandler.hasFine(this)) {
            checkDeviceLocation();
            return;
        }
        boolean coarseOnly = SalkaLocationHandler.hasAny(this);
        boolean canAsk = !LocPrefs.asked(this)
                || shouldShowRequestPermissionRationale(FINE)
                || shouldShowRequestPermissionRationale(COARSE)
                || (coarseOnly && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S);
        if (canAsk) {
            LocPrefs.markAsked(this);
            busy = true;
            requestPermissions(new String[] { FINE, COARSE }, REQ_PERMISSION);
        } else {
            openAppSettings(coarseOnly);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        busy = false;
        if (SalkaLocationHandler.hasFine(this)) {
            checkDeviceLocation();
        } else if (SalkaLocationHandler.hasAny(this)) {
            // اختار «تقريبي» — الملاحة تحتاج الدقيق
            openAppSettings(true);
        } else if (!shouldShowRequestPermissionRationale(FINE)) {
            // صارت مرفوضة نهائياً: الحل الوحيد من الإعدادات
            openAppSettings(false);
        } else {
            done();
        }
    }

    private void openAppSettings(boolean coarseOnly) {
        toast(coarseOnly
                ? "فعّل «استخدام الموقع الدقيق» من «الأذونات ← الموقع»"
                : "اضغط «الأذونات» ← «الموقع» ← «السماح أثناء استخدام التطبيق» وفعّل «الموقع الدقيق»");
        Intent i = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS,
                Uri.fromParts("package", getPackageName(), null))
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            startActivity(i);
        } catch (Throwable t) {
            try { startActivity(new Intent(Settings.ACTION_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); } catch (Throwable ignored) { }
        }
        done();
    }

    /** الموقع مطفي بالموبايل؟ نطلع نافذة النظام لتشغيله بضغطة وحدة */
    private void checkDeviceLocation() {
        try {
            LocationRequest req = new LocationRequest.Builder(Priority.PRIORITY_HIGH_ACCURACY, 1000).build();
            LocationSettingsRequest settings = new LocationSettingsRequest.Builder()
                    .addLocationRequest(req)
                    .setAlwaysShow(true)
                    .build();
            busy = true;
            LocationServices.getSettingsClient(this).checkLocationSettings(settings)
                    .addOnSuccessListener(this, r -> done())
                    .addOnFailureListener(this, e -> {
                        if (e instanceof ResolvableApiException) {
                            try {
                                ((ResolvableApiException) e).startResolutionForResult(this, REQ_RESOLVE);
                                return;
                            } catch (Throwable ignored) { }
                        }
                        openLocationSettingsIfOff();
                    });
        } catch (Throwable t) {
            openLocationSettingsIfOff();
        }
    }

    private void openLocationSettingsIfOff() {
        if (!locationEnabled()) {
            toast("شغّل «الموقع» حتى يحدد موقعك بدقة");
            try {
                startActivity(new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
            } catch (Throwable ignored) { }
        }
        done();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQ_RESOLVE) done();
    }

    private boolean locationEnabled() {
        LocationManager lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        if (lm == null) return true;
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) return lm.isLocationEnabled();
            return lm.isProviderEnabled(LocationManager.GPS_PROVIDER) || lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
        } catch (Throwable t) {
            return true;
        }
    }

    private void toast(String msg) {
        try { Toast.makeText(getApplicationContext(), msg, Toast.LENGTH_LONG).show(); } catch (Throwable ignored) { }
    }

    private void done() {
        busy = false;
        if (!isFinishing()) {
            finish();
            overridePendingTransition(0, 0);
        }
    }
}
