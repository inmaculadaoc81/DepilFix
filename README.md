# DepilFix — reparaciondepiladoraslaser.com.es

Landing page one-page, responsive, para el servicio de reparación de depiladoras láser Braun y Philips.

## Archivos

- `index.html` — página única con todo el contenido y los datos Schema.org (LocalBusiness + FAQPage)
- `styles.css` — estilos (fondo blanco, banner principal en gradiente azul/violeta de marca, tipografía Space Grotesk + Inter)
- `script.js` — menú móvil, acordeón de FAQ, año dinámico del footer, animaciones de aparición al hacer scroll
- Imágenes (logo, isotipo, favicons, foto del taller) en la **raíz del repositorio**, junto a `index.html`
- `robots.txt` / `sitemap.xml` — SEO técnico básico
- `CNAME` — dominio personalizado para GitHub Pages

## Diseño e imágenes

- Todas las rutas de imagen son relativas a la raíz (`logo-depilfix.png`, `og-image.jpg`, etc.), igual que están subidas en tu repositorio de GitHub — así se cargan sin necesidad de subcarpetas.
- El banner principal (hero) ya no lleva foto: es un bloque de color con el gradiente de marca (azul → violeta) y, a la derecha, una tarjeta oscura con la información de contacto (dirección, horario, teléfono, metro cercano y un aviso de WhatsApp), igual que en la referencia que enviaste.
- La foto real de tu taller se usa más abajo, en la sección "Nuestro taller".
- La paleta de acento (`--accent` / `--accent-2`) se tomó directamente de los colores del gradiente de tu isotipo.

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

## Subir a GitHub

Sube **todos** los archivos de esta carpeta directamente a la raíz de tu repositorio (no dentro de una subcarpeta `assets/` ni ninguna otra) — así coincide con las rutas que usa `index.html`.

## Antes de publicar, revisa

- **Testimonios**: la sección "Opiniones" tiene 3 reseñas de ejemplo — sustitúyelas por opiniones reales de clientes antes de publicar.
- **Coordenadas del mapa**: el `geo` del Schema.org usa coordenadas aproximadas del barrio de Chamberí, Madrid; ajústalas si tienes las exactas.
- **Mapa embebido**: en este entorno de pruebas no carga por no tener acceso a internet real; en tu navegador y una vez publicado en GitHub Pages funcionará con normalidad.
