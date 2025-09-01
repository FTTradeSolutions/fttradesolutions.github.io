// Inicializar Swiper en todas las secciones .Body-swiper
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Body-swiper .swiper').forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev')
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 1.2
        }
      }
    })
  })
})
