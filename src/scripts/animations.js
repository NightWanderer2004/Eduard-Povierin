// Arrow
const arrow = document.querySelector('.arrowBtn')
const arrowHeight = arrow.getBoundingClientRect().top / 4
// Name
const myName = document.querySelector('.name')
let myNameHeight
if (window.matchMedia('(max-width: 500px)').matches) {
   myNameHeight = myName.getBoundingClientRect().top * 2
} else if (window.matchMedia('(max-width: 768px)').matches) {
   myNameHeight = myName.getBoundingClientRect().top * 1.5
} else {
   myNameHeight = myName.getBoundingClientRect().top * 1.2
}

window.onscroll = () => {
   document.documentElement.scrollTop > arrowHeight ? arrow.classList.add('hide') : arrow.classList.remove('hide')
   document.documentElement.scrollTop > myNameHeight ? (myName.style.opacity = 0) : (myName.style.opacity = 100)
}
