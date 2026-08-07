# DepilFix — reparaciondepiladoraslaser.com.es

Landing page one-page, responsive, para el servicio de reparación de depiladoras láser Braun y Philips.

## Archivos

- `index.html` — página única con todo el contenido y los datos Schema.org (LocalBusiness + FAQPage)
- `styles.css` — estilos (fondo blanco, tipografía Space Grotesk + Inter)
- `script.js` — menú móvil, acordeón de FAQ, año dinámico del footer
- `robots.txt` / `sitemap.xml` — SEO técnico básico
- `CNAME` — dominio personalizado para GitHub Pages

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

- **Teléfono fijo**: se usó `+34 918 294 660` para "Atención telefónica" según los datos facilitados. Confírmalo.
- **Testimonios**: la sección "Opiniones" tiene 3 reseñas de ejemplo — sustitúyelas por opiniones reales de clientes antes de publicar.
- **Imagen Open Graph**: las etiquetas `og:image` apuntan a `/assets/og-image.png`, que aún no existe. Añade una imagen 1200×630px en esa ruta o quita las etiquetas.
- **Coordenadas del mapa**: el `geo` del Schema.org usa coordenadas aproximadas del barrio de Chamberí, Madrid; ajústalas si tienes las exactas.
