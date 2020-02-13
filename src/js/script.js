$(document).ready(function () {
	//initialize swiper when document ready
	let mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
	});
});