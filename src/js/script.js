
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
		grabCursor: true,
	});

	// script for accordion footer list
	$(".accordion > .accordion__item.is-active").children(".accordion-panel").slideDown();

	$(".accordion > .accordion__item").click(function () {
		// Cancel the siblings
		$(this).siblings(".accordion__item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});