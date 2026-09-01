// DepilFix — interacciones del sitio (menú móvil, acordeón FAQ, año footer)
document.addEventListener('DOMContentLoaded', function () {

  // Año dinámico en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Acordeón de preguntas frecuentes
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var isOpen = item.getAttribute('data-open') === 'true';

      faqItems.forEach(function (other) {
        other.setAttribute('data-open', 'false');
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Revelado progresivo al hacer scroll (mejora visual, no bloquea contenido)
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Sin soporte: mostrar todo directamente
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Formulario de contacto
  // El sitio es estático (GitHub Pages) y no tiene backend propio, así que
  // el formulario envía a un proyecto Vercel aparte, creado solo para este
  // endpoint (mismo patrón SMTP + nodemailer que el resto de la familia).
  // Si al desplegar ese proyecto en Vercel te da una URL distinta a
  // "depilfix-api.vercel.app", cambia la constante de abajo por la real.
  var CONTACT_API_URL = 'https://depilfix-api.vercel.app/api/contact';

  var contactForm = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (contactForm.website.value) return; // honeypot: bots rellenan este campo oculto

      if (!contactForm.reportValidity()) return;

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';
      formStatus.textContent = 'Enviando consulta…';
      formStatus.removeAttribute('data-state');

      var payload = Object.fromEntries(new FormData(contactForm).entries());

      fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().catch(function () { return {}; }).then(function (result) {
            if (!response.ok || !result.ok) throw new Error(result.code || 'SEND_FAILED');
          });
        })
        .then(function () {
          formStatus.textContent = 'Consulta enviada correctamente. Te responderemos lo antes posible.';
          formStatus.setAttribute('data-state', 'ok');
          contactForm.reset();
        })
        .catch(function (error) {
          console.error('DepilFix formulario:', error);
          formStatus.textContent = 'No se pudo enviar la consulta. Puedes escribirnos por WhatsApp o llamarnos.';
          formStatus.setAttribute('data-state', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }

  // Resaltar enlace de navegación activo al hacer scroll
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.style.color = a.getAttribute('href') === '#' + id ? 'var(--accent-ink)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }
});
