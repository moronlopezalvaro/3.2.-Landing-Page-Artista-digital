# Landing Page · Nébula, artista digital

Página de presentación de **Nébula**, una artista digital (ficticia) de paisajes de ciencia ficción.

## Estructura de carpetas

```
/
├── index.html
├── README.md
├── css/
│   └── style.css
└── assets/
    ├── img/     → hero.webp, galeria-1/2/3.webp, logo.svg, calltoaction.webp, miniatura.webp
    ├── audio/   → ambiente.mp3
    └── video/   → presentacion.mp4
```

## Tabla de recursos y licencias

| Archivo                    | Uso en la web              | Origen / URL                                                                                                                                                     | Licencia                                                                                                                                        |
| -------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `img/hero.webp`          | Imagen principal           | [Unsplash · BoliviaInteligente](https://unsplash.com/es/fotos/ilustracion-estilizada-de-un-planeta-con-anillos-4T8LEtOT2XM)                                      | [Licencia Unsplash](https://unsplash.com/es/licencia) (uso libre, también comercial; la atribución no es obligatoria pero se incluye)          |
| `img/galeria-1.webp`     | Galería                   | [Unsplash · BoliviaInteligente](https://unsplash.com/es/fotos/un-objeto-purpura-y-negro-en-medio-de-un-fondo-negro-MaQZ6kUxNsU)                                  | [Licencia Unsplash](https://unsplash.com/es/licencia)                                                                                            |
| `img/galeria-2.webp`     | Galería                   | [Unsplash · BoliviaInteligente](https://unsplash.com/es/fotos/un-fondo-negro-con-circulos-rosas-y-morados-6YI0XmpZ_I8)                                           | [Licencia Unsplash](https://unsplash.com/es/licencia)                                                                                            |
| `img/galeria-3.webp`     | Galería                   | [Unsplash · Pawel Czerwinski](https://unsplash.com/es/fotos/azul-y-negro-ilustracion-abstracta-hgThOxNqQq0)                                                      | [Licencia Unsplash](https://unsplash.com/es/licencia)                                                                                            |
| `img/logo.svg`           | Logotipo                   | Diseño propio                                                                                                                                                   | CC BY 4.0                                                                                                                                       |
|  `img/calltoaction.webp` | Botón animado de contacto | Animación propia a partir de [Unsplash+ · Aakash Dhage](https://unsplash.com/es/fotos/radiografia-de-un-telefono-de-disco-con-auricular-descolgado-pmc7yG7DnAc) | [Licencia Unsplash+](https://unsplash.com/es/plus/licencia)                                                                                      |
| `video/presentacion.mp4` | Vídeo de presentación    | [Pixabay · uxcsani](https://pixabay.com/es/videos/nebulosa-cgi-espacial-386753/)                                                                                 | [Licencia de contenido de Pixabay](https://pixabay.com/es/service/license-summary/) (uso libre, también comercial, sin atribución obligatoria) |
| `img/miniatura.webp`     | Miniatura del vídeo       | Fotograma del vídeo de Pixabay                                                                                                                                  | Licencia de contenido de Pixabay                                                                                                                |
| `audio/ambiente.mp3`     | Sonido ambiental           | [Pixabay · leberch](https://pixabay.com/es/music/clásico-moderno-sci-fi-documentary-262608/)                                                                    | [Licencia de contenido de Pixabay](https://pixabay.com/es/service/license-summary/)                                                              |

## Justificación técnica de formatos

| Recurso              | Formato                                                              | Por qué                                                                                                                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imagen principal     | **WebP**, 1920×1200 px, calidad 80                            | Se descargó en JPG desde Unsplash y se convirtió a WebP. Tiene muchos colores y degradados. WebP pesa un 25‑35 % menos que JPEG con la misma calidad. Peso final: ~77 KB (límite 250 KB).                                                |
| Galería             | **WebP**, 400×250 px                                          | Miniaturas lo más ligeras posible. Se recortan y redimensionan desde el JPG original al tamaño exacto que se muestra (entre 5 y 12 KB cada una).                                                                                           |
| Logotipo             | **SVG**                                                        | Es un gráfico vectorial: se ve nítido a cualquier tamaño, pesa muy poco y tiene fondo transparente. Ideal para logos.                                                                                                                     |
| Llamada a la acción | **WebP animado**, 300×210 px, 3 fotogramas, con transparencia | Se creó un GIF con 3 fotogramas y se convirtió a WebP animado: pesa mucho menos que un GIF, admite transparencia real (canal alfa) y no está limitado a 256 colores. Se redujo de 1499 px a 300 px de ancho.                              |
| Vídeo               | **MP4 (H.264)**, 1280×720, 24 fps, 10,4 s, sin pista de audio | Formato compatible con todos los navegadores. Se descargó en 720p (1,2 MB) y se recomprimió con H.264 (CRF 26, ~620 kbps) quitando el audio y con *faststart* para que empiece a reproducirse antes. Peso final: ~0,8 MB (límite 3 MB). |
| Póster del vídeo   | **WebP**                                                       | Fotograma del segundo 2 del vídeo. Imagen fija ligera (~28 KB) que se ve antes de reproducir el vídeo.                                                                                                                                     |
| Audio                | **MP3**, 192 kbps, 44,1 kHz, estéreo, 15 s                    | Compatible al 100 %. La pista original dura 1:42; se recortó el tramo 0:10–0:25 (15 s exactos). Al ser música se usa 192 kbps (para voz bastaría 128 kbps). Lleva *fade‑in* y *fade‑out* de 2 s.                                   |

## Herramientas utilizadas

- **GIMP**: redimensionar el hero a 1920 px, crear las miniaturas de 400×250 y exportar a WebP.
- **Affinity**: dibujar el logotipo y exportarlo como SVG.
- **ezgif.com**: unir los 3 fotogramas del teléfono en un GIF y convertirlo a WebP animado.
- **HandBrake**: recomprimir el vídeo de Pixabay en MP4 (H.264), quitarle el audio y sacar el fotograma para `miniatura.webp`.
- **Audacity**: recortar la pista de Pixabay a 15 s exactos, aplicar fade‑in/fade‑out y exportar a MP3 192 kbps.

## Buenas prácticas WPO y accesibilidad

- Todas las imágenes tienen `alt` descriptivo, `width`, `height` y `loading="lazy"`.
- El vídeo tiene `poster` y `preload="metadata"`; el audio también usa `preload="metadata"`.
- Las atribuciones se hacen con `<figure>` y `<figcaption>`.
- HTML5 semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
