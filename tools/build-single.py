#!/usr/bin/env python3
"""
يجمع التطبيق كله بملف HTML واحد (dist/index.html) — مفيد للرفع من الموبايل.
التشغيل:  python3 tools/build-single.py
"""
import base64
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
ORDER = ['config', 'storage', 'geo', 'instructions', 'routing', 'navengine', 'search',
         'voice', 'theme', 'reports', 'location', 'mapview', 'app']

IMPORT_RE = re.compile(r"^import \{([^}]*)\} from '\./(\w+)\.js';\s*$", re.M)
EXPORT_RE = re.compile(r"^export (?:async )?(?:function\*? |const |let |class )([A-Za-z_$][\w$]*)", re.M)


def bundle_js():
    parts = []
    for name in ORDER:
        src = (ROOT / 'js' / f'{name}.js').read_text(encoding='utf-8')

        def imp(m):
            names = [n.strip() for n in m.group(1).split(',') if n.strip()]
            mapped = [f"{a.split(' as ')[0].strip()}: {a.split(' as ')[1].strip()}" if ' as ' in a else a for a in names]
            dep = m.group(2)
            if dep not in ORDER[:ORDER.index(name)]:
                raise SystemExit(f'ترتيب الملفات غلط: {name} يحتاج {dep}')
            return f"const {{ {', '.join(mapped)} }} = __m_{dep};"

        src = IMPORT_RE.sub(imp, src)
        if re.search(r'^\s*import\s', src, re.M):
            raise SystemExit(f'import غير مدعوم في {name}.js')
        exports = EXPORT_RE.findall(src)
        src = re.sub(r'^export ', '', src, flags=re.M)
        parts.append(f"const __m_{name} = (() => {{\n{src}\nreturn {{ {', '.join(exports)} }};\n}})();")
    js = '\n'.join(parts)
    if '</script' in js:
        raise SystemExit('النص </script موجود داخل الكود')
    return js


def main():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    css = (ROOT / 'css' / 'app.css').read_text(encoding='utf-8')
    svg = (ROOT / 'icons' / 'icon.svg').read_bytes()
    png = (ROOT / 'icons' / 'icon-192.png').read_bytes()
    svg_uri = 'data:image/svg+xml;base64,' + base64.b64encode(svg).decode()
    png_uri = 'data:image/png;base64,' + base64.b64encode(png).decode()

    html = html.replace('<link rel="stylesheet" href="css/app.css">', f'<style>\n{css}\n</style>')
    html = html.replace('<link rel="manifest" href="manifest.webmanifest">\n', '')
    html = html.replace('href="icons/icon.svg"', f'href="{svg_uri}"')
    html = html.replace('href="icons/icon-192.png"', f'href="{png_uri}"')
    tag = '<script type="module" src="js/app.js"></script>'
    assert tag in html
    html = html.replace(tag, '<script>window.SALKA_SINGLE = true;</script>\n  <script type="module">\n' + bundle_js() + '\n</script>')
    out = ROOT / 'dist' / 'index.html'
    out.parent.mkdir(exist_ok=True)
    out.write_text(html, encoding='utf-8')
    print(f'✓ {out.relative_to(ROOT)}  ({out.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main()
