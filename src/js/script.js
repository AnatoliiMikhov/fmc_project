
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

	// plugin for accordion
	$(function () {
		$('#menu').metisMenu();
	});

	// up page link script and smooth scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1200) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	// smooth scroll
	$("a[href='#promo']").click(function () {
		let _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

});