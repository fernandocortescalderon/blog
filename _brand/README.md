# Identidad visual para YouTube

Plantillas HTML con la misma paleta, tipografías y monograma del blog.
Jekyll ignora esta carpeta (empieza con `_`), así que no se publica.

| Plantilla | Salida | Uso en YouTube |
|---|---|---|
| `banner.html` | 2560 × 1440 JPG | Personalización del canal → Imagen del banner |
| `avatar.html` | 800 × 800 PNG | Personalización del canal → Foto |
| `watermark.html` | 150 × 150 PNG transparente | Personalización del canal → Marca de agua del video |
| `thumbnail.html` | 1280 × 720 JPG | Miniatura del video **y** portada del post (`image:`) |

## Generar

```bash
npm i playwright
node _brand/render.js canal salida/
node _brand/render.js miniatura assets/img/posts/nombre-del-post.jpg "Título del video" ciberseguridad "Antetítulo opcional"
```

La miniatura se guarda directamente en `assets/img/posts/`, de modo que el
mismo archivo se sube a YouTube y se usa como portada del post.

Pilares: `ciberseguridad` (esmeralda), `soporte` (dorado), `proyectos` (crema).
El título se reduce solo para caber en tres líneas; si queda muy pequeño,
acórtalo: en miniaturas, menos palabras se leen mejor.
