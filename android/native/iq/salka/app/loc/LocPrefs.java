package iq.salka.app.loc;

import android.content.Context;

/** نتذكر إذا طلبنا الصلاحية قبل — حتى نفرّق «أول مرة» عن «مرفوضة نهائياً» */
final class LocPrefs {
    private static final String FILE = "salka_location";
    private static final String ASKED = "asked";

    private LocPrefs() { }

    static boolean asked(Context c) {
        return c.getSharedPreferences(FILE, Context.MODE_PRIVATE).getBoolean(ASKED, false);
    }

    static void markAsked(Context c) {
        c.getSharedPreferences(FILE, Context.MODE_PRIVATE).edit().putBoolean(ASKED, true).apply();
    }
}
