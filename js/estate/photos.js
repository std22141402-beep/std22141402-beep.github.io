// ضغط الصور قبل الرفع (تصغير + WebP/JPEG) حتى يكون الرفع سريع على النت العراقي
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('صورة غير صالحة')); };
    img.src = url;
  });
}

function encode(canvas, quality) {
  let d = canvas.toDataURL('image/webp', quality);
  if (!d.startsWith('data:image/webp')) d = canvas.toDataURL('image/jpeg', quality);
  return d;
}

/** يرجع { full, thumb } كـ dataURL */
export async function compressPhoto(file, maxDim = 1280, thumbDim = 360) {
  if (!file || !/^image\//.test(file.type || 'image/')) throw new Error('الملف مو صورة');
  const img = await loadImage(file);
  const draw = (max, q) => {
    const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * k)), h = Math.max(1, Math.round(img.naturalHeight * k));
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, w, h);
    return encode(c, q);
  };
  // سقف ثابت حتى ما ترفضها قاعدة البيانات (الحد 800 ألف حرف)
  let full = draw(maxDim, 0.74);
  if (full.length > 450000) full = draw(Math.round(maxDim * 0.8), 0.66);
  if (full.length > 600000) full = draw(Math.round(maxDim * 0.6), 0.6);
  let thumb = draw(thumbDim, 0.7);
  if (thumb.length > 100000) thumb = draw(Math.round(thumbDim * 0.7), 0.6);
  return { full, thumb };
}
