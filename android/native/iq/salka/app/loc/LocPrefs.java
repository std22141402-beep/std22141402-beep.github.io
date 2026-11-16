package iq.salka.app.loc;

import android.content.Context;

/** نتذكر: هل طلبنا الصلاحية قبل؟ ومتى آخر رفض؟ (حتى ما نطلع نافذة ورا نافذة) */
final class LocPrefs {
    private static final String FILE = "salka_location";
    private static final String ASKED = "asked";
    private static final String DENIED_AT = "deniedAt";

    private LocPrefs() { }

    static boolean asked(Context c) {
        return c.getSharedPreferences(FILE, Context.MODE_PRIVATE).getBoolean(ASKED, false);
    }

    static void markAsked(Context c) {
        c.getSharedPreferences(FILE, Context.MODE_PRIVATE).edit().putBoolean(ASKED, true).apply();
    }

    static long deniedAt(Context c) {
        return c.getSharedPreferences(FILE, Context.MODE_PRIVATE).getLong(DENIED_AT, 0);
    }

    static void markDenied(Context c) {
        c.getSharedPreferences(FILE, Context.MODE_PRIVATE).edit().putLong(DENIED_AT, System.currentTimeMillis()).apply();
    }
}
