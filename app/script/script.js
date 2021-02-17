const menuBtn = document.querySelector('.mobile-menu__btn')
const mobileMenu = document.querySelector('.mobile-menu')
const modalOpen = document.querySelectorAll('.modal-open')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')

menuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
})

modalOpen.forEach(element => {
	element.addEventListener('click', (e) => {
		e.preventDefault()
		modal.classList.add('active')
	})
})

modalClose.addEventListener('click', () => {
	modal.classList.remove('active')
})
