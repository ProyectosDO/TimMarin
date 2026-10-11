# Tim Marín – cómo usar esta página

1. **Publicar gratis:** sube esta carpeta a un repositorio de GitHub → Settings → Pages → Branch `main` / carpeta `/ (root)`.
2. **Agregar un video:** abre `content.js`, copia el ejemplo dentro de `VIDEOS` y pega el ID o el enlace completo de YouTube en `youtubeId`. Aparece solo, el más reciente primero.
3. **Agregar un juego:** sube el HTML a `assets/games/` y añade una línea en `JUEGOS`.
4. **Agregar una actividad:** sube el PDF a `assets/downloads/` y añade un registro en `ACTIVIDADES`.
5. **Logo y personajes:** reemplaza `assets/img/logo.jfif` y `assets/img/personajes.jfif` (o cambia el nombre en `index.html`).

## Importante: los videos de YouTube no se reproducen abriendo index.html con doble clic
Si abres el archivo directamente (ruta que empieza con C:/ o file://) YouTube muestra "Error 153".
Funcionan solo cuando la página está en internet (GitHub Pages) o en un servidor local:
- Servidor local: abre una terminal en la carpeta `tim-marin` y ejecuta `python -m http.server 8000`, luego entra a http://localhost:8000
