// ============================================================
// APP.JS - Funcionalidad principal FT Trade & Solutions
// ============================================================

// ---------------------------
// NAVEGACIÓN SUAVE
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ---------------------------
// SWIPER BODY3
// ---------------------------
const swiperBody3 = new Swiper('.Body3-swiper', {
  // Opciones
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,

  // Paginación
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navegación
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Responsive breakpoints
  breakpoin
