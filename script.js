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
