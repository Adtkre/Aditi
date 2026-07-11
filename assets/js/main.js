document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));

  /* ---------- highlight current page in top nav + bottom nav ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav__links a, .bottom-nav__item[data-page]').forEach(link => {
    link.classList.remove('is-active');
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* ---------- about page: stack / gear wheel toggle ---------- */
  window.toggleWheel = function (mode) {
    const ringtext = document.getElementById('ringtext');
    const iconStack = document.getElementById('iconStack');
    const iconGear = document.getElementById('iconGear');
    const pillsStack = document.getElementById('pillsStack');
    const pillsGear = document.getElementById('pillsGear');
    if (!ringtext) return;
    if (mode === 'gear') {
      ringtext.textContent = 'CAMERA BODY \u2022 PRIME LENS \u2022 MANUAL FILM CAM \u2022 TRIPOD \u2022 EDITING SUITE \u2022 SNAPSEED \u2022';
      iconStack.classList.add('hidden');
      iconGear.classList.remove('hidden');
      pillsStack.classList.add('hidden');
      pillsGear.classList.remove('hidden');
    } else {
      ringtext.textContent = 'PYTHON \u2022 JAVASCRIPT \u2022 C / C++ \u2022 HTML & CSS \u2022 FLASK \u2022 VS CODE \u2022 DART \u2022 KOTLIN \u2022';
      iconGear.classList.add('hidden');
      iconStack.classList.remove('hidden');
      pillsGear.classList.add('hidden');
      pillsStack.classList.remove('hidden');
    }
  };

  /* ---------- shots page: horizontal scroll controls ---------- */
  window.scrollShots = function (dir) {
    const track = document.getElementById('shotsTrack');
    if (track) track.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

});
