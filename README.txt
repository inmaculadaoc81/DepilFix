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
- Testimonios de ejemplo en la sección "Opiniones" (marcado ya en el
  README.md original como pendiente de sustituir por reseñas reales).
- Coordenadas geo del schema.org son aproximadas (barrio de Chamberí);
  ajustar si se dispone de las exactas.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- RESUELTO — Google Business, antes pendiente: el cliente proporcionó
  la ficha real (https://maps.app.goo.gl/uhYTWsGAbexRSebp6). Añadida
  al sameAs del schema.org, al mapa embebido (antes solo mostraba la
  dirección genérica sin nombre de ficha; sustituido por el iframe de
  la ficha real "DepilFix Servicio Técnico de Depiladoras", place_id
  0xa19fbcf50dff4e09:0x8461cdcf1bb22c0d) y como enlace "Ver ficha y
  reseñas en Google →" debajo del mapa, en la sección de contacto.
- Se mantiene sin formulario, sin agenda (Cal.com) y sin ficha
  vinculada a un backend: confirmado por el cliente que es la
  configuración correcta para este repositorio (no usa Vercel ni
  SMTP).
- H1 repetía la plantilla "no funciona" ("Tu depiladora Braun o
  Philips no funciona. Aquí la reparamos."). Reescrito: "Repara tu
  depiladora Braun o Philips con garantía." (8 palabras, sigue
  incluyendo ambas marcas ya que el negocio trabaja específicamente
  con esas dos).
- BUG REAL — el horario (en dos sitios: banner de contacto del hero y
  tarjeta de la sección de contacto) decía "Sábados y Domingos:
  Cerrado", sin mencionar festivos. Corregido a "Sábados, domingos y
  días festivos estamos cerrados" en ambos sitios.
- BUG REAL — no existía franja de aviso de servicio técnico
  independiente debajo del menú. Añadida: aplica aquí porque el
  negocio repara marcas de terceros específicas (Braun y Philips).
  Verificado antes que .site-header no usa display:flex directamente,
  solo su .nav interno.
- Verificado sin bugs: no existe ningún elemento tipo hero-chip/pill
  rotado; no hay ningún texto decorativo gigante tipo watermark; los
  tres botones CTA del hero (WhatsApp, recogida, teléfono) ya tenían
  icono.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 42/48):
- Verificado: enlace de Cal.com ya actualizado con
  attendeePhoneNumber y overlayCalendar.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- Verificado: el mensaje prellenado de WhatsApp ya decía "¡Hola
  DepilFix!".
- Verificado: el menú móvil (#navLinks/#navToggle) ya tenía su propio
  script de cierre al pulsar un enlace, en script.js.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 usaba clamp(2.1rem,4.4vw,3.6rem), con un mínimo de
  2.1rem (33.6px) en pantallas estrechas, sin ninguna regla de móvil
  que lo corrigiera. Corregido el mínimo a 3rem (48px):
  clamp(3rem,4.4vw,3.6rem).
- Verificado: los botones (.btn) ya tenían border-radius:999px y
  estados hover propios en las cuatro variantes (whatsapp/laser/
  dark/white). No requerían cambios.
- Verificado: la franja de aviso de servicio técnico independiente ya
  estaba presente debajo del menú.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.
