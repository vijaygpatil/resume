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
	$('#page-welcome header h2').addClass('animated fadeInRightBig');
	$('#page-welcome .social-icons').addClass('animated fadeInLeftBig');
	$('.contact-me').addClass('animated fadeInUpBig');
	
	var myBirthDay = new Date(1982, 6, 29);
	var today = new Date();
	var oneYearInMillSecs = 1000*60*60*24*365;
	var myAge = Math.floor((today.getTime()-myBirthDay.getTime())/(oneYearInMillSecs));
	$('#myAge').text(myAge);
	
	$('#marathiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Marathi_language');
	});
	
	$('#gujaratiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Gujarati_language');
	});
	
	$('#hindiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Hindi_language');
	});
	

	$('#page-contact').waypoint(function(direction) {
		if (direction == 'down') {
			$('#page-contact .social-icons').css( "display", "block" ).addClass('animated fadeInLeftBig');
		}
		},{	offset : function() {return $(window).height() - $(this).height();},
			triggerOnce: true,
	});
	
	$('#page-profile').waypoint(function(direction) {
		if (direction == 'down') {
			$('#page-profile-facebook').css( "display", "block" ).addClass('animated fadeInLeftBig');
			$('#page-profile-linkedin').css( "display", "block" ).addClass('animated fadeInLeftBig');
		}
		},{	offset : '25%',
			triggerOnce: true
	});
	
	$('#myProgressbar6').waypoint(function() {
		$('#myProgressbar1').progressbar(40);
		$('#myProgressbar2').progressbar(20);
		$('#myProgressbar3').progressbar(80);
		$('#myProgressbar4').progressbar(60);
		$('#myProgressbar5').progressbar(50);
		$('#myProgressbar6').progressbar(90);
	},{
		offset : 'bottom-in-view'
	});
	
	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'down') {
			$('.welcome-nav').css('color','white');
			$('.profile-nav, .skills-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : 51
	});
	
	$('#page-welcome').waypoint(function(direction) {
		if(direction == 'up') {
			$('.welcome-nav').css('color','white');
			$('.profile-nav, .skills-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : -51
	});
	
	$('#page-profile .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.profile-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});
	
	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.skills-nav').css('color','white');
			$('.profile-nav, .welcome-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});
	
	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});
	
	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'down') {	
			$('.experience-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});
	
	$('#page-portfolio .container').waypoint(function(direction) {
		if(direction == 'down') {
			$('.portfolio-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	},{
		offset : 71
	});
	
	$('#page-profile .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.profile-nav').css('color','white');
			$('.welcome-nav, .skills-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	});
	
	$('#page-skills .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.skills-nav').css('color','white');
			$('.profile-nav, .welcome-nav, .education-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	});
	
	$('#page-education .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.education-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .experience-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	});
	
	$('#page-experience .container').waypoint(function(direction) {
		if(direction == 'up') {	
			$('.experience-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .portfolio-nav, .contact-nav').css('color','');
		}
	});
	
	$('#page-portfolio .container').waypoint(function(direction) {
		if(direction == 'up') {
			$('.portfolio-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .contact-nav').css('color','');
		}
	});
	
	$('#page-contact').waypoint(function() {
			$('.contact-nav').css('color','white');
			$('.skills-nav, .profile-nav, .welcome-nav, .education-nav, .experience-nav, .portfolio-nav').css('color','');
	},{
		offset : function() {return $(window).height() - $(this).height();}
	});
});

