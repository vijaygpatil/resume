$(document).ready(function() {
//	$.vegas('slideshow', {
//		backgrounds : [ {
//			src : 'http://i.imgur.com/UFjWmNZ.jpg',
//			fade : 1000
//		}, {
//			src : 'http://i.imgur.com/9kEAT0R.jpg',
//			fade : 1000
//		}, {
//			src : 'http://i.imgur.com/wwVOutY.jpg',
//			fade : 1000
//		}]
//	})('overlay', {
//		src : 'img/overlays/01.png'
//	});
	
//	$("#vegas-next").click(function(){
//		$.vegas('next');
//	});
//	$("#vegas-prev").click(function(){
//		$.vegas('previous');
//	});
	
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
	
//	$('.education-nav, #msDegreeDetailsCollapseIcon, #beDegreeDetailsCollapseIcon').click(function(event) {
//		event.preventDefault();
//		$('html, body').animate({
//			scrollTop : $(".page-education").offset().top
//		}, 1000);
//	});
//
//	$('.experience-nav, #garminDetailsCollapseIcon, #niprDetailsCollapseIcon, #yodleeDetailsCollapseIcon').click(function(event) {
//		event.preventDefault();
//		$('html, body').animate({
//			scrollTop : $(".page-experience").offset().top
//		}, 1000);
//	});
	
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
	
	$('#msDegreeDetailsCollapseIcon, #beDegreeDetailsCollapseIcon').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-education").offset().top
		}, 1000);
	});
	
	$('#garminDetailsCollapseIcon, #niprDetailsCollapseIcon, #yodleeDetailsCollapseIcon').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-experience").offset().top
		}, 1000);
	});
	
	$('.contact-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-contact").offset().top
		}, 1000);
	});
	
	$('#msDegreeDetails').on('hidden.bs.collapse', function () {
		$('#msDegreeDetailsCollapse i').toggleClass('fa-minus-square fa-plus-square');
	}).on('shown.bs.collapse', function () {
		$('#beDegreeDetails').removeClass('collapse in').addClass('collapse');
		$('#beDegreeDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#msDegreeDetailsCollapse i').removeClass('fa-plus-square').addClass('fa-minus-square');
	});
	
	$('#beDegreeDetails').on('hidden.bs.collapse', function () {
		$('#beDegreeDetailsCollapse i').toggleClass('fa-minus-square fa-plus-square');
	}).on('shown.bs.collapse', function () {
		$('#msDegreeDetails').removeClass('collapse in').addClass('collapse');
		$('#msDegreeDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#beDegreeDetailsCollapse i').removeClass('fa-plus-square').addClass('fa-minus-square');
	});
	
	$('#garminDetails').on('hidden.bs.collapse', function () {
		$('#garminDetailsCollapse i').toggleClass('fa-minus-square fa-plus-square');
	}).on('shown.bs.collapse', function () {
		$('#niprDetails').removeClass('collapse in').addClass('collapse');
		$('#yodleeDetails').removeClass('collapse in').addClass('collapse');
		$('#niprDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#yodleeDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#garminDetailsCollapse i').removeClass('fa-plus-square').addClass('fa-minus-square');
	});
	
	$('#niprDetails').on('hidden.bs.collapse', function () {
		$('#niprDetailsCollapse i').toggleClass('fa-minus-square fa-plus-square');
	}).on('shown.bs.collapse', function () {
		$('#garminDetails').removeClass('collapse in').addClass('collapse');
		$('#yodleeDetails').removeClass('collapse in').addClass('collapse');
		$('#garminDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#yodleeDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#niprDetailsCollapse i').removeClass('fa-plus-square').addClass('fa-minus-square');
	});
	
	$('#yodleeDetails').on('hidden.bs.collapse', function () {
		$('#yodleeDetailsCollapse i').toggleClass('fa-minus-square fa-plus-square');
	}).on('shown.bs.collapse', function () {
		$('#garminDetails').removeClass('collapse in').addClass('collapse');
		$('#niprDetails').removeClass('collapse in').addClass('collapse');
		$('#garminDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#niprDetailsCollapse i').removeClass('fa-minus-square').addClass('fa-plus-square');
		$('#yodleeDetailsCollapse i').removeClass('fa-plus-square').addClass('fa-minus-square');
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
		offset : function() {return $(window).height() - $(this).height() - $('.page-footer').height();}
	});
});

