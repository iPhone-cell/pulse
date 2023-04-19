window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__official'),
		menu2 = document.querySelector('.header__contacts'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
		menu2.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
			menu2.classList.toggle('menu_active');
		})
	})
})

$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-prev.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-next.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
});