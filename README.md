# DepilFix — reparaciondepiladoraslaser.com.es

Landing page one-page, responsive, para el servicio de reparación de depiladoras láser Braun y Philips.

## Archivos

- `index.html` — página única con todo el contenido y los datos Schema.org (LocalBusiness + FAQPage)
- `styles.css` — estilos (fondo blanco, acentos en azul/violeta de marca, tipografía Space Grotesk + Inter)
- `script.js` — menú móvil, acordeón de FAQ, año dinámico del footer, animaciones de aparición al hacer scroll
- `assets/` — logo, isotipo, favicons y fotografías reales del taller, optimizados en JPG/WebP
- `robots.txt` / `sitemap.xml` — SEO técnico básico
- `CNAME` — dominio personalizado para GitHub Pages

## Diseño e imágenes

- El logo y el isotipo son los que proporcionaste, recortados y exportados en varios tamaños (`logo-depilfix.png`, `isotype-*.png`, favicons y `apple-touch-icon.png`).
- La foto del hero y la imagen de la sección "Nuestro taller" están recortadas de tu fotografía original (sin el logo incrustado, para no duplicarlo junto al logo del header). Cada una se sirve en WebP con fallback a JPG y en versión móvil/escritorio para no penalizar el rendimiento.
- La paleta de acento (`--accent` / `--accent-2`) se tomó directamente de los colores del gradiente de tu isotipo.
- Las animaciones de aparición al hacer scroll son progresivas: si el usuario tiene JavaScript desactivado o "reducir movimiento" activado, todo el contenido se muestra igualmente sin animación.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `depilfix-web`).
2. Sube todos estos archivos a la raíz del repositorio (rama `main`).
3. En **Settings → Pages**, selecciona la rama `main` y la carpeta `/root`.
4. En **Settings → Pages → Custom domain**, escribe `www.reparaciondepiladoraslaser.com.es` (ya viene definido en el archivo `CNAME`).
5. En tu proveedor de DNS del dominio `.com.es`, crea:
   - Un registro **CNAME** para `www` apuntando a `tuusuario.github.io`
   - Registros **A** para el dominio raíz (`@`) apuntando a las IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
6. Activa "Enforce HTTPS" en GitHub Pages una vez el DNS haya propagado (puede tardar unas horas).

## Antes de publicar, revisa

- **Testimonios**: la sección "Opiniones" tiene 3 reseñas de ejemplo — sustitúyelas por opiniones reales de clientes antes de publicar.
- **Coordenadas del mapa**: el `geo` del Schema.org usa coordenadas aproximadas del barrio de Chamberí, Madrid; ajústalas si tienes las exactas.
- **Mapa embebido**: en este entorno de pruebas no carga por no tener acceso a internet real; en tu navegador y una vez publicado en GitHub Pages funcionará con normalidad.
