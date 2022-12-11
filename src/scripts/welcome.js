const elem = document.querySelector('.name')
window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset
   elem.style.transform = `translateY(-${0.4 * scrolled}%)`
   // elem.style.opacity = 1 - document.documentElement.scrollTop / 700
})
