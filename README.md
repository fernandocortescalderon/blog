# Blog · Fernando Cortés Calderón

Blog en Jekyll publicado con GitHub Pages en
[cortescalderon.com/blog](https://cortescalderon.com/blog/). Layout propio,
sin temas, con la identidad visual de cortescalderon.com.

## Publicar un post

1. Crea `_posts/AAAA-MM-DD-nombre-del-post.md`. El nombre del archivo
   (sin la fecha) define la URL: `cortescalderon.com/blog/nombre-del-post/`.
2. Si el post tiene video, sube la portada (la misma de YouTube, 1280 × 720,
   JPG o PNG) a `assets/img/posts/`.
3. Haz commit y push a `main`. GitHub Pages publica en uno o dos minutos.

### Front matter

```yaml
---
title: "Título del post"                 # obligatorio
description: "Resumen de 1–2 líneas"     # obligatorio: índice, SEO y RSS
date: 2026-10-19 10:00:00 -0600          # obligatorio
pillar: ciberseguridad                   # ciberseguridad | soporte | proyectos
youtube: ID_DEL_VIDEO                    # opcional: solo el ID (lo que va tras ?v=)
repo: https://github.com/usuario/repo    # opcional: muestra "Ver código en GitHub"
image: /assets/img/posts/portada.jpg     # opcional: portada del video y imagen al compartir
---
```

- `pillar` debe coincidir con una clave de `_data/pillars.yml`; si no, el
  post no muestra etiqueta y solo aparece en el filtro "Todos".
- Jekyll **no publica posts con fecha futura**. Si `date` es posterior al
  momento del build (que corre en UTC), el post no aparece hasta el siguiente
  push posterior a esa hora. Usa la hora real de publicación o una anterior.
- `image` se usa como portada del video (antes de reproducirlo) y como
  imagen de vista previa en redes sociales (`og:image`). Sin `image`, el video
  muestra una portada genérica con el monograma.

### Video dentro del cuerpo del post

```liquid
{% include youtube.html id="ID_DEL_VIDEO" title="Título" cover="/assets/img/posts/portada.jpg" %}
```

## Privacidad

- Sin analítica, rastreadores ni cookies.
- Las fuentes (Fraunces e IBM Plex Mono, licencia SIL OFL 1.1) están
  alojadas en `assets/fonts/`; no hay peticiones a Google Fonts.
- Los videos no cargan nada de YouTube hasta que el visitante pulsa
  reproducir, y entonces usan `youtube-nocookie.com`.
- Una política CSP (`_includes/head.html`) bloquea cualquier recurso externo.
  Por eso **las imágenes de los posts deben estar en el repositorio**: una
  imagen enlazada desde otro dominio no se mostrará.

## Desarrollo local

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve      # http://localhost:4000/blog/
```

## Estructura

| Ruta | Contenido |
|---|---|
| `_config.yml` | baseurl, permalinks, plugins (seo-tag, sitemap, feed) |
| `_layouts/` | `default` (esqueleto) y `post` |
| `_includes/` | encabezado, pie, video, enlace a repo, etiqueta de pilar, tarjeta, fecha |
| `_data/pillars.yml` | nombre y color de cada pilar |
| `assets/css/main.css` | estilos y tokens de color |
| `assets/js/` | `filter.js` (filtro del índice) y `video.js` (carga del video) |
