#!/usr/bin/env bash
# يبني natta/world3d.js (العالم المفتوح) من natta/src/main3d.js ويه three.js (r187) مدموج ومصغّر.
# الاستعمال: natta/tools/build-3d.sh /path/to/three/build/three.module.js
set -euo pipefail
THREE="${1:?حدد مسار three.module.js (three r187)}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
ESBUILD="${ESBUILD:-$(command -v esbuild || echo /opt/npm-tools/node_modules/.bin/esbuild)}"
"$ESBUILD" "$DIR/src/main3d.js" --bundle --minify --format=iife --global-name=NattaWorld3D \
  --alias:three="$THREE" --target=es2020 --legal-comments=eof \
  --banner:js="/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */" \
  --outfile="$DIR/world3d.js"
ls -l "$DIR/world3d.js"
