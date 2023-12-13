// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')
	const links = document.querySelectorAll('#mobile-menu li a')

	window.addEventListener('click', (e) => {
		if (e.target.classList.contains('mobile-menu')) {
			burger.classList.toggle('active')
			menu.classList.toggle('right-0')
			menu.classList.toggle('-right-full')
			body.classList.toggle('overflow-hidden')
		}
	})

	links.forEach((link) =>
		link.addEventListener('click', () => {
			burger.classList.toggle('active')
			menu.classList.toggle('right-0')
			menu.classList.toggle('-right-full')
			body.classList.toggle('overflow-hidden')
		})
	)

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('right-0')
		menu.classList.toggle('-right-full')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.99) {
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()

// Fixed Header.
function fixedHeader() {
	const nav = document.querySelector('#header')
	const heroSection = document.querySelector('#hero')

	const breakpoint = 10
	if (window.scrollY >= 1) {
		nav.classList.add('-top-20')
		nav.classList.add('duration-300')
	} else {
		nav.classList.remove('-top-20')
		nav.classList.remove('duration-300')
	}
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed-header')
		heroSection.classList.add('pt-20')
	} else {
		nav.classList.remove('fixed-header')

		heroSection.classList.remove('pt-20')
	}
}
window.addEventListener('scroll', fixedHeader)

document.addEventListener('DOMContentLoaded', function () {
	var menuLinks = document.querySelectorAll('#menu a')

	window.addEventListener('scroll', function () {
		var fromTop = window.scrollY

		menuLinks.forEach(function (link) {
			var section = document.querySelector(link.getAttribute('href'))
			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				link.classList.add('active')
			} else {
				link.classList.remove('active')
			}
		})
	})
})
