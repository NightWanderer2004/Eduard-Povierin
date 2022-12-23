const showMoreBtn = document.querySelector('.showMore')

showMoreBtn.addEventListener('click', el => {
   document.querySelector('.about .info').classList.toggle('full')
   el.target.innerText == 'more' ? (el.target.innerText = 'less') : (el.target.innerText = 'more')
})
