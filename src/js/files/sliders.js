/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

function customizePaginationBullets(swiper) {
	var bullets = swiper.el.querySelectorAll('.swiper-pagination-bullet');
	bullets.forEach(function (bullet, index) {
			bullet.classList.remove('swiper-pagination-bullet-before', 'swiper-pagination-bullet-after');
	});

	var activeIndex = swiper.activeIndex;
	if (bullets[activeIndex - 1]) {
			bullets[activeIndex - 1].classList.add('swiper-pagination-bullet-before');
	}
	if (bullets[activeIndex + 1]) {
			bullets[activeIndex + 1].classList.add('swiper-pagination-bullet-after');
	}
}


function initSliders() {

	if (document.querySelector('.hero__slider')) { 
		new Swiper('.hero__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.hero__slider-btn.swiper-button-prev',
				nextEl: '.hero__slider-btn.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {
				init: function () {
						customizePaginationBullets(this);
				},
				slideChange: function () {
						customizePaginationBullets(this);
				}
		}
		});
	}
	if (document.querySelector('.home-msg__slider')) { 
		new Swiper('.home-msg__slider', {
			modules: [Navigation, Pagination ],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.home-msg__slider-btn.swiper-button-prev',
				nextEl: '.home-msg__slider-btn.swiper-button-next',
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 3,
				},
			},
			// Події
			on: {
				init: function () {
						customizePaginationBullets(this);
				},
				slideChange: function () {
						customizePaginationBullets(this);
				}
		}
		});
	}
	if (document.querySelector('.home-ad__slider')) { 
		new Swiper('.home-ad__slider', {
			modules: [Navigation, Pagination ],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 500,

			navigation: {
				prevEl: '.home-ad__slider-btn.swiper-button-prev',
				nextEl: '.home-ad__slider-btn.swiper-button-next',
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 3,
				},
			},
			// Події
			on: {
				
			}
		});
	}
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}


window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});