$(document).ready(function() {
	$.vegas('slideshow', {
		backgrounds : [ {
			src : 'http://i.imgur.com/5BgnGht.jpg',
			fade : 3000
		}, {
			src : 'http://i.imgur.com/GkFGBcb.jpg',
			fade : 3000
		}, {
			src : 'http://i.imgur.com/OcyOdkY.jpg',
			fade : 3000
		}, {
			src : 'http://i.imgur.com/oubI4OH.jpg',
			fade : 3000
		}]
	});
	
	$("#vegas-next").click(function(){
		$.vegas('next');
	});
	$("#vegas-prev").click(function(){
		$.vegas('previous');
	});
	
	$('.page-profile table tr td:first-child').css('padding-top', '0');
	
	$('.welcome-nav').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $(".page-welcome").offset().top
		}, 1000);
	});

	$('.profile-nav, .contact-me').click(function(event) {
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
	
	$('#msDegreeDetailsCollapse i,#beDegreeDetailsCollapse i').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $('#page-education').offset().top
		}, 1000);
	});
	
	$('#garminDetailsCollapse i,#niprDetailsCollapse i,#yodleeDetailsCollapse i').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $('#page-experience').offset().top
		}, 1000);
	});
	
	$('#msDegreeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#msDegreeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});
	
	$('#beDegreeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#beDegreeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});
	
	$('#garminDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#garminDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});
	
	$('#niprDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#niprDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});
	
	$('#yodleeDetails').on('hidden.bs.collapse shown.bs.collapse', function () {
		$('#yodleeDetailsCollapse i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
	});
	
	$('#page-welcome header h1').addClass('animated fadeInDownBig');
	$('#page-welcome header h2').addClass('animated fadeInRightBig');
	$('#page-welcome .social-icons').addClass('animated fadeInLeftBig');
	$('.contact-me').addClass('animated fadeInUpBig');
	
	var myBirthDay = new Date(1982, 6, 29);
	var today = new Date();
	var oneYearInMillSecs = 1000*60*60*24*365;
	var myAge = Math.floor((today.getTime()-myBirthDay.getTime())/(oneYearInMillSecs));
	$('#myAge').text(myAge+"yo");
	
	$('#marathiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Marathi_language');
	});
	
	$('#gujaratiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Gujarati_language');
	});
	
	$('#hindiLanguage').on('click', function(){
		window.open('http://en.wikipedia.org/wiki/Hindi_language');
	});
	
	$('#page-profile').waypoint(function(direction) {
		if (direction == 'down') {
			$('#page-profile-facebook').css( "display", "block" ).addClass('animated fadeInLeftBig');
			$('#page-profile-linkedin').css( "display", "block" ).addClass('animated fadeInLeftBig');
		}
		},{	offset : '25%',
			triggerOnce: true
	});
	
	$('#myProgressbar5').waypoint(function() {
		$('#myProgressbar1').progressbar(75);
		$('#myProgressbar2').progressbar(80);
		$('#myProgressbar3').progressbar(85);
		$('#myProgressbar4').progressbar(90);
		$('#myProgressbar5').progressbar(70);
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
	
	
	$('ul.nav-pills li a').click(function (e) {
        $('ul.nav-pills li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
	
	$(window).load(function(){
	    var $container = $('.grid-wrapper');
	    $container.isotope({
	        filter: '*',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });
	 
	    $('.grid-controls li a').click(function(){
	        $('.grid-controls .current').removeClass('current');
	        $(this).addClass('current');
	 
	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});
	
	$('.grid-wrapper').magnificPopup({
		  delegate: 'a', 
		  type: 'image',
		  gallery:{
			enabled:true
		  }
		});
	
	$('#resumeLink').click(function() {
		window.open('http://patilvijayg.com/resume');
	});
	
	$('#photography1Link').click(function() {
		window.open('https://www.flickr.com/photos/29386396@N07/sets/72157646708982028/');
	});
	
	$('#wordpressLink').click(function() {
		window.open('http://patilvijayg.com/wordpress');
	});
	
	$('#labLink').click(function() {
		window.open('http://patilvijayg.com/lab');
	});
	
	$('#dashboardLink').click(function() {
		window.open('http://patilvijayg.com/dashboard');
	});
	
	$('#photography2Link').click(function() {
		window.open('https://www.flickr.com/photos/29386396@N07/sets/72157646717570368/');
	});
	
	$('#printResume').click(function() {
		$('#garminDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #msDegreeDetails, #beDegreeDetails').removeClass('in');
		window.print();
		$('#garminDetails, #msDegreeDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #beDegreeDetails').removeClass('in');
	});
	
	var beforePrint = function() {
		$('#garminDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #msDegreeDetails, #beDegreeDetails').removeClass('in');
    };
    var afterPrint = function() {
    	$('#garminDetails, #msDegreeDetails').addClass('in');
		$('#niprDetails, #yodleeDetails, #beDegreeDetails').removeClass('in');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }
});

