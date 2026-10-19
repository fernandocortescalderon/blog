// Genera las imágenes del canal de YouTube y las miniaturas/portadas.
// Requiere Node y Playwright:  npm i playwright  (o CHROME=/ruta/a/chrome)
//
//   node _brand/render.js canal  <carpeta-salida>
//   node _brand/render.js miniatura <salida.jpg> "Título" [pilar] [antetítulo] [captura.png]
const { chromium } = require('playwright');
const path = require('path');
const url = f => 'file://' + path.join(__dirname, f);

async function shot(browser, file, out, w, h, opts = {}) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(url(file));
  await page.evaluate(() => document.fonts.ready);
  if (file.startsWith('thumbnail')) await page.waitForSelector('body[data-ready]');
  const jpg = out.endsWith('.jpg');
  await page.screenshot({ path: out, type: jpg ? 'jpeg' : 'png', quality: jpg ? 90 : undefined, omitBackground: !!opts.transparent });
  await page.close();
  console.log('→', out);
}

(async () => {
  const [mode, out, title, pillar = 'ciberseguridad', kicker = '', img = ''] = process.argv.slice(2);
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  if (mode === 'canal') {
    await shot(browser, 'banner.html', path.join(out, 'youtube-banner.jpg'), 2560, 1440);
    await shot(browser, 'banner.html?guides', path.join(out, 'youtube-banner-guias.jpg'), 2560, 1440);
    await shot(browser, 'avatar.html', path.join(out, 'youtube-perfil.png'), 800, 800);
    await shot(browser, 'watermark.html', path.join(out, 'youtube-marca-agua.png'), 150, 150, { transparent: true });
  } else if (mode === 'miniatura') {
    const q = new URLSearchParams({ title, pillar, kicker, img: img && 'file://' + path.resolve(img) }).toString();
    await shot(browser, 'thumbnail.html?' + q, out, 1280, 720);
  } else {
    console.error('Uso: node render.js canal <carpeta> | miniatura <salida.jpg> "Título" [pilar] [antetítulo] [captura.png]');
    process.exitCode = 1;
  }
  await browser.close();
})();
