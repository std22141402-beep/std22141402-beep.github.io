package iq.salka.app.loc;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;

import java.util.ArrayList;
import java.util.List;

/**
 * نافذة شفافة تطلب صلاحية الموقع لما كروم يسأل.
 * مهم: أندرويد 14+ يمنع فتح نافذة من خدمة بالخلفية — وكروم كان ينتظر جواب للأبد
 * (الموقع ما يتحدد أبداً). هنا إذا النافذة ما انفتحت خلال ثانيتين ونص، نجاوب فوراً،
 * والصفحة تفتح «نافذة التفعيل» من الواجهة (كروم يسمح بها لأنها لنفس التطبيق).
 */
public class PermissionActivity extends Activity {
    interface Result { void done(boolean granted); }

    private static final Handler MAIN = new Handler(Looper.getMainLooper());
    private static final List<Result> PENDING = new ArrayList<>();
    private static boolean sInFlight;
    private static volatile boolean sStarted;
    static volatile boolean sSetupActive;
    private boolean delivered;

    static void request(Context c, Result r) {
        final Context app = c.getApplicationContext();
        boolean recentlyDenied = System.currentTimeMillis() - LocPrefs.deniedAt(app) < 15000;
        synchronized (PENDING) {
            PENDING.add(r);
            if (sSetupActive) return;          // نافذة التفعيل مفتوحة — هي راح تجاوب
            if (sInFlight && !recentlyDenied) return;
            if (!recentlyDenied) { sInFlight = true; sStarted = false; }
        }
        if (recentlyDenied) { flush(app); return; } // رفض قبل ثواني: ما نطلع نافذة ثانية
        Intent i = new Intent(app, PermissionActivity.class)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_NO_ANIMATION);
        try {
            app.startActivity(i);
        } catch (Throwable t) {
            flush(app);
            return;
        }
        MAIN.postDelayed(() -> { if (!sStarted) flush(app); }, 2500);
    }

    /** نجاوب كل اللي ينتظرون بالحالة الحقيقية للصلاحية */
    static void flush(Context c) {
        boolean granted = SalkaLocationHandler.hasAny(c);
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
        sStarted = true;
        if (SalkaLocationHandler.hasAny(this)) {
            done();
            return;
        }
        if (savedInstanceState != null) return;
        LocPrefs.markAsked(this);
        requestPermissions(new String[] {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION }, 1);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (!SalkaLocationHandler.hasAny(this)) LocPrefs.markDenied(this);
        done();
    }

    private void done() {
        if (delivered) return;
        delivered = true;
        flush(getApplicationContext());
        finish();
        overridePendingTransition(0, 0);
    }

    @Override
    protected void onDestroy() {
        if (!delivered && isFinishing()) {
            delivered = true;
            flush(getApplicationContext());
        }
        super.onDestroy();
    }
}
