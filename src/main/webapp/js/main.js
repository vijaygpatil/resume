$(document).ready(function() {
	$.vegas('slideshow', {
		backgrounds : [ {
			src : 'img/slider/01.jpeg',
			fade : 1000
		}, {
			src : 'img/slider/02.jpeg',
			fade : 1000
		}, {
			src : 'img/slider/03.jpeg',
			fade : 1000
		}, {
			src : 'img/slider/04.jpeg',
			fade : 1000
		}, {
			src : 'img/slider/05.jpeg',
			fade : 1000
		}]
	})('overlay', {
		src : 'img/overlays/04.png'
	});
	
	$("#vegas-next").click(function(){
		$.vegas('next');
	});
	$("#vegas-prev").click(function(){
		$.vegas('previous');
	});
	

	$('.welcome-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-welcome").offset().top
		}, 1000);
	});

	$('.profile-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-profile").offset().top
		}, 1000);
	});

	$('.skills-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-skills").offset().top
		}, 1000);
	});
	
	$('.education-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-education").offset().top
		}, 1000);
	});

	$('.experience-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-experience").offset().top
		}, 1000);
	});

	$('.portfolio-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-portfolio").offset().top
		}, 1000);
	});
	
	$('.contact-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-contact").offset().top
		}, 1000);
	});
	
	$('#page-welcome header h1').addClass('animated fadeInDownBig');
	$('#page-welcome header p').addClass('animated fadeInRightBig');
	$('.social-icons').addClass('animated fadeInLeftBig');
	$('.contact-me').addClass('animated fadeInUpBig');
});

