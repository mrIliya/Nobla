const menuBtn = document.querySelector('.mobile-menu__btn')
const mobileMenu=document.querySelector('.mobile-menu')
menuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
})