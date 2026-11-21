"""يرسم أيقونات نطّة (الشخصية الخضراء فوك منصة) بكل المقاسات.
التشغيل: python3 natta/tools/make-icons.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parent.parent
SS = 4  # رسم بدقة أعلى بعدين تصغير حتى تطلع الحواف ناعمة


def lerp(a, b, t):
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def draw_icon(size, safe=1.0):
    n = size * SS
    img = Image.new('RGB', (n, n))
    d = ImageDraw.Draw(img)
    top, bot = (110, 198, 255), (212, 241, 255)
    for y in range(n):
        d.line([(0, y), (n, y)], fill=lerp(top, bot, y / n))

    u = n / 100 * safe          # وحدة رسم (100 = عرض الأيقونة)
    ox = n / 2                  # المنتصف
    oy = n / 2 + (1 - safe) * 0  # بدون إزاحة

    def P(x, y):  # من إحداثيات 0..100 (المنتصف 50) لبكسلات
        return (ox + (x - 50) * u, oy + (y - 50) * u)

    def ell(cx, cy, rx, ry, fill, outline=None, width=0):
        x0, y0 = P(cx - rx, cy - ry)
        x1, y1 = P(cx + rx, cy + ry)
        d.ellipse([x0, y0, x1, y1], fill=fill, outline=outline, width=int(width * u))

    # غيوم
    cloud = Image.new('RGBA', (n, n), (0, 0, 0, 0))
    cd = ImageDraw.Draw(cloud)
    for cx, cy, s in ((20, 22, 1.0), (82, 34, 0.8)):
        for dx, dy, r in ((0, 0, 7), (7, 1.5, 5.5), (-7, 2, 5), (2.5, -3.5, 5.5)):
            x0, y0 = P(cx + (dx - r) * s, cy + (dy - r) * s)
            x1, y1 = P(cx + (dx + r) * s, cy + (dy + r) * s)
            cd.ellipse([x0, y0, x1, y1], fill=(255, 255, 255, 215))
    img.paste(cloud, (0, 0), cloud)

    # المنصة
    x0, y0 = P(24, 80)
    x1, y1 = P(76, 90)
    d.rounded_rectangle([x0, y0, x1, y1], radius=int(5 * u), fill=(47, 154, 72))
    x1b, y1b = P(76, 87)
    d.rounded_rectangle([x0, y0, x1b, y1b], radius=int(5 * u), fill=(98, 210, 111))
    hx0, hy0 = P(30, 81.8)
    hx1, hy1 = P(70, 83.6)
    d.rounded_rectangle([hx0, hy0, hx1, hy1], radius=int(1 * u), fill=(180, 245, 177))

    # ظل خفيف
    sh = Image.new('RGBA', (n, n), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    a0, b0 = P(34, 77)
    a1, b1 = P(66, 81)
    sd.ellipse([a0, b0, a1, b1], fill=(20, 60, 30, 90))
    sh = sh.filter(ImageFilter.GaussianBlur(u * 1.2))
    img.paste(sh, (0, 0), sh)

    dark, body, belly = (44, 143, 67), (91, 209, 107), (196, 247, 188)
    # رجلين
    ell(41, 76.5, 6, 3.4, dark)
    ell(59, 76.5, 6, 3.4, dark)
    # الجسم (منضغط شوية كأنه نازل على المنصة)
    ell(50, 56, 23, 21, body, outline=dark, width=2.4)
    ell(52, 64, 13, 8.5, belly)
    # عيون
    for ex in (45, 60):
        ell(ex, 49, 6.2, 7.2, (255, 255, 255), outline=dark, width=1.4)
        ell(ex + 1.6, 47.6, 3.4, 3.4, (27, 31, 59))
        ell(ex + 2.8, 46.2, 1.15, 1.15, (255, 255, 255))
    # ابتسامة
    a0, b0 = P(46.5, 53)
    a1, b1 = P(59.5, 64)
    d.arc([a0, b0, a1, b1], start=20, end=160, fill=(27, 31, 59), width=int(2.2 * u))
    # خدود
    blush = Image.new('RGBA', (n, n), (0, 0, 0, 0))
    bd = ImageDraw.Draw(blush)
    for cx in (36.5, 67.5):
        a0, b0 = P(cx - 4, 57)
        a1, b1 = P(cx + 4, 61.5)
        bd.ellipse([a0, b0, a1, b1], fill=(255, 120, 150, 110))
    img.paste(blush, (0, 0), blush)

    # خطوط حركة لفوك
    for x, h in ((26, 10), (74, 12), (50, 7)):
        a0, b0 = P(x, 18 if x == 50 else 40)
        a1, b1 = P(x, (18 if x == 50 else 40) + h)
        d.line([a0, a1], fill=(255, 255, 255), width=int(2.6 * u))

    return img.resize((size, size), Image.LANCZOS)


if __name__ == '__main__':
    draw_icon(512).save(OUT / 'icon-512.png', optimize=True)
    draw_icon(192).save(OUT / 'icon-192.png', optimize=True)
    draw_icon(180).save(OUT / 'apple-touch-icon.png', optimize=True)
    draw_icon(512, safe=0.78).save(OUT / 'icon-maskable-512.png', optimize=True)
    print('icons ->', OUT)
