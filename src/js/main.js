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
	const menuLinks = document.querySelectorAll('#menu a')
	const sections = document.querySelectorAll('.section-wrapper')

	window.addEventListener('scroll', function () {
		const fromTop = window.scrollY

		if (fromTop < 10) {
			menuLinks.forEach((link) => link.classList.remove('active'))
		}

		sections.forEach(function (section, index) {
			if (
				fromTop >= section.offsetTop &&
				fromTop < section.offsetTop + section.offsetHeight
			) {
				// Проверяем, находится ли прокрутка внутри текущей секции
				activeSectionIndex = index

				if (sections[index].classList.contains('section-wrapper-home')) {
					menuLinks[0].classList.add('active')
				} else {
					menuLinks[0].classList.remove('active')
				}
				if (sections[index].classList.contains('section-wrapper-service')) {
					menuLinks[1].classList.add('active')
				} else {
					menuLinks[1].classList.remove('active')
				}
				if (sections[index].classList.contains('section-wrapper-about')) {
					menuLinks[2].classList.add('active')
				} else {
					menuLinks[2].classList.remove('active')
				}
				if (sections[index].classList.contains('section-wrapper-chat')) {
					menuLinks[2].classList.remove('active')
				}
			}
		})
	})
})
