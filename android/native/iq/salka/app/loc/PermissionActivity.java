package iq.salka.app.loc;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import java.util.ArrayList;
import java.util.List;

/**
 * نافذة شفافة تطلب صلاحية الموقع لما كروم يسأل (أول مرة أو بعد «اسأل كل مرة»).
 * إذا أكثر من طلب بنفس الوقت، نافذة وحدة بس.
 */
public class PermissionActivity extends Activity {
    interface Result { void done(boolean granted); }

    private static final List<Result> PENDING = new ArrayList<>();
    private static boolean sInFlight;
    private boolean delivered;

    static void request(Context c, Result r) {
        synchronized (PENDING) {
            PENDING.add(r);
            if (sInFlight) return;
            sInFlight = true;
        }
        Intent i = new Intent(c, PermissionActivity.class)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_NO_ANIMATION);
        try {
            c.startActivity(i);
        } catch (Throwable t) {
            finishAll(SalkaLocationHandler.hasAny(c));
        }
    }

    private static void finishAll(boolean granted) {
        List<Result> rs;
        synchronized (PENDING) {
            rs = new ArrayList<>(PENDING);
            PENDING.clear();
            sInFlight = false;
        }
        for (Result r : rs) {
            try { r.done(granted); } catch (Throwable ignored) { }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (SalkaLocationHandler.hasAny(this)) {
            done(true);
            return;
        }
        if (savedInstanceState != null) return; // الطلب شغال من قبل التدوير
        LocPrefs.markAsked(this);
        requestPermissions(new String[] {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION }, 1);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        done(SalkaLocationHandler.hasAny(this));
    }

    private void done(boolean granted) {
        if (delivered) return;
        delivered = true;
        finishAll(granted);
        finish();
        overridePendingTransition(0, 0);
    }

    @Override
    protected void onDestroy() {
        if (!delivered && isFinishing()) {
            delivered = true;
            finishAll(SalkaLocationHandler.hasAny(this));
        }
        super.onDestroy();
    }
}
