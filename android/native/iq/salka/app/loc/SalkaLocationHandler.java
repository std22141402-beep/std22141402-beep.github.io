package iq.salka.app.loc;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.RemoteException;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.browser.trusted.TrustedWebActivityCallbackRemote;
import androidx.core.content.ContextCompat;

import com.google.androidbrowserhelper.trusted.ExtraCommandHandler;

/**
 * يستلم أوامر الموقع من كروم (نفس بروتوكول مكتبة گوگل locationdelegation)
 * لكن بمزوّد موقع ما يوكف أبداً لما تنقطع الإشارة.
 */
public class SalkaLocationHandler implements ExtraCommandHandler {
    static final String CHECK = "checkAndroidLocationPermission";
    static final String START = "startLocation";
    static final String STOP = "stopLocation";
    static final String RESULT_KEY = "locationPermissionResult";

    private static SalkaLocationProvider sProvider;

    @NonNull
    @Override
    public Bundle handleExtraCommand(Context context, String commandName, Bundle args,
            @Nullable TrustedWebActivityCallbackRemote callback) {
        Bundle result = new Bundle();
        result.putBoolean(EXTRA_COMMAND_SUCCESS, false);
        if (commandName == null || context == null) return result;
        final Context app = context.getApplicationContext();
        switch (commandName) {
            case CHECK:
                if (callback == null) break;
                if (hasAny(app)) {
                    sendPermission(callback, true);
                } else {
                    PermissionActivity.request(app, granted -> sendPermission(callback, granted));
                }
                result.putBoolean(EXTRA_COMMAND_SUCCESS, true);
                break;
            case START:
                if (callback == null) break;
                boolean high = args == null || args.getBoolean("enableHighAccuracy", true);
                provider(app).start((name, bundle) -> {
                    try {
                        callback.runExtraCallback(name, bundle);
                    } catch (RemoteException | RuntimeException e) {
                        provider(app).stop();
                    }
                }, high);
                result.putBoolean(EXTRA_COMMAND_SUCCESS, true);
                break;
            case STOP:
                provider(app).stop();
                result.putBoolean(EXTRA_COMMAND_SUCCESS, true);
                break;
            default:
                break;
        }
        return result;
    }

    static boolean hasFine(Context c) {
        return ContextCompat.checkSelfPermission(c, Manifest.permission.ACCESS_FINE_LOCATION)
                == PackageManager.PERMISSION_GRANTED;
    }

    static boolean hasAny(Context c) {
        return hasFine(c) || ContextCompat.checkSelfPermission(c,
                Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED;
    }

    private static void sendPermission(TrustedWebActivityCallbackRemote cb, boolean granted) {
        Bundle b = new Bundle();
        b.putBoolean(RESULT_KEY, granted);
        try {
            cb.runExtraCallback(CHECK, b);
        } catch (RemoteException | RuntimeException ignored) {
            // كروم انسد — ماكو أحد ينتظر
        }
    }

    static synchronized SalkaLocationProvider provider(Context c) {
        if (sProvider == null) sProvider = new SalkaLocationProvider(c);
        return sProvider;
    }
}
