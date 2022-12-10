// Arrow
const arrow = document.querySelector('.arrow')
const arrowHeight = arrow.getBoundingClientRect().top / 4

// Titles
const elemTitles = document.querySelectorAll('.title')
const elemsTitleHeight = []

const elemInView = (el, offset = 60) => {
   const elemTop = el.getBoundingClientRect().top + offset
   return elemTop <= (window.innerHeight || document.documentElement.clientHeight)
}

const elemOutOfView = (el, offset = 150) => {
   const elemTop = el.getBoundingClientRect().top + offset
   return elemTop > (window.innerHeight || document.documentElement.clientHeight)
}

const animation = () => {
   elemTitles.forEach(el => {
      if (elemInView(el)) el.style.transform = `translateX(0%)`
      else if (elemOutOfView(el)) el.style.transform = `translateX(-100%)`
      // else if (elemOutOfView(el)) el.style.transform = el.closest('.skills') ? `translateX(100%)` : `translateX(-100%)`
   })
}

window.onscroll = () => {
   animation()
   document.documentElement.scrollTop > arrowHeight ? (arrow.style.opacity = 0) : (arrow.style.opacity = 100)
}
