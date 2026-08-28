DEPILFIX — REPARACIÓN DE DEPILADORAS LÁSER BRAUN Y PHILIPS (MADRID)

Repositorio distinto al resto de la familia: NO usa Vercel ni backend
propio (sin /api/, sin package.json, sin SMTP). Es un sitio estático
para GitHub Pages, con dominio propio vía CNAME
(www.reparaciondepiladoraslaser.com.es). Ver README.md para las
instrucciones de publicación en GitHub Pages.

No existe formulario de contacto: el sitio solo usa WhatsApp y
llamada telefónica como vías de contacto (por diseño, sin backend que
lo requiera).

Teléfono y WhatsApp:
Usa los números compartidos de la familia Kelatos (+34 649 97 01 28
WhatsApp / +34 914 46 85 03 llamadas). No existe un número propio
distinto para la caja de información; no se ha inventado ninguno.

Dirección:
C/ Joaquín María López, 26 · 28015 Madrid (misma dirección física
compartida por el resto de la familia).

Google Analytics:
G-CMD39SZTFV (proporcionado por el cliente).

REVISIÓN (primera pasada en esta sesión):
- Menú móvil: ya funcionaba correctamente (nav-toggle + .is-open con
  position:absolute), sin el bug de layout visto en otros repos de la
  familia hoy (DonCargador). No se ha tocado.
- Icono de WhatsApp flotante: ya usaba el SVG correcto, no el bug de
  texto "WA" visto en AsusTech/LabsMkt. No se ha tocado.
- Schema.org: ya muy completo (ElectronicsStore + FAQPage, con
  makesOffer para Braun y Philips por separado). "sameAs" estaba
  vacío; añadido el canal de YouTube compartido de la familia. No se
  ha añadido un enlace de Google Business propio por no disponer de
  la ficha específica de DepilFix — pendiente si el cliente la tiene.
- Google Analytics: no existía. Añadido G-CMD39SZTFV.
- Banner de cookies: no existía (coherente, ya que no había ningún
  tracking). Añadido junto con GA (Aceptar / Rechazar / Política de
  privacidad → https://kelatos.com/privacy-policy/).
- Chat n8n: no existía. Añadido con el webhook compartido de la
  familia, posicionado en bottom:96px (escritorio) / 84px (móvil),
  justo encima del botón flotante de WhatsApp (bottom:22px/14px).
- H1 de portada: era un título descriptivo ("Reparación de
  depiladoras láser Braun y Philips en Madrid"), no una frase
  afirmativa sobre el problema del cliente como en el resto de la
  familia. Reescrito: "Tu depiladora Braun o Philips no funciona.
  Aquí la reparamos." (10 palabras, afirmativo, incluye ambas marcas
  ya que el negocio trabaja específicamente con esas dos, sin ser un
  taller multimarca genérico).

PENDIENTE (no resuelto, no inventado):
- Enlace de Google Business propio para el schema.org "sameAs" (si el
  cliente tiene la ficha).
- Testimonios de ejemplo en la sección "Opiniones" (marcado ya en el
  README.md original como pendiente de sustituir por reseñas reales).
- Coordenadas geo del schema.org son aproximadas (barrio de Chamberí);
  ajustar si se dispone de las exactas.
