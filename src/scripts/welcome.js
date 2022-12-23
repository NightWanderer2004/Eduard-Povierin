const myName = document.querySelector('.name')
const arrowBtn = document.querySelector('.arrowBtn')

window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset
   myName.style.transform = `translateY(-${0.4 * scrolled}%)`
})
arrowBtn.addEventListener('click', el => {
   const aboutOffsetTop = document.querySelector('.about').offsetTop
   scroll({
      top: aboutOffsetTop - 15,
      behavior: 'smooth',
   })
})
