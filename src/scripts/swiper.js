const swiper = new Swiper('.swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 1.2,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   autoplay: {
      delay: 10000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.arrows.next',
      prevEl: '.arrows.prev',
   },
   breakpoints: {
      768: { slidesPerView: 2 },
   },
})
