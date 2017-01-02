$(function(){

	"use strict";

	var topOffset = 50;
	var slideqty = $('#featured .item').length;
	var wheight = $(window).height(); //get the height of the window
	var randSlide = Math.floor(Math.random()*slideqty);

  	$('#featured .item').eq(randSlide).addClass('active');
  
  	$('.fullheight').css('height', wheight); //set to window tallness  

  	//replace IMG inside carousels with a background image
	  $('#featured .item img').each(function() {
	    var imgSrc = $(this).attr('src');
	    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
	    $(this).remove();
	  });

	  //adjust height of .fullheight elements on window resize
	  $(window).resize(function() {
	    wheight = $(window).height(); //get the height of the window
	    $('.fullheight').css('height', wheight); //set to window tallness  
	  });

	// Activate scrollspy
	$('body').scrollspy({
	    target: 'header .navbar',
	    offset: topOffset
	  });

	 var hash = $(this).find('li.active a').attr('href');
	  if(hash !== '#featured') {
	    $('header nav').addClass('inbody');
	  } else {
	    $('header nav').removeClass('inbody');
	  }


	  // Add an inbody class to nav when scrollspy event fires
	  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
	    var hash = $(this).find('li.active a').attr('href');
	    if(hash !== '#featured') {
	      $('header nav').addClass('inbody');
	    } else {
	      $('header nav').removeClass('inbody');
	    }
	  });

	  //Added smooth scroll
	  $('.navbar a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === 
	      this.pathname.replace(/^\//,'') && 
	      location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-topOffset+2
	        }, 500);
	        return false;
	      } //target.length
	    } //click function
	  }); //smooth scrolling


	  //Automatically generate carousel indicators
	    for (var i=0; i < slideqty; i++) {
	    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
	    if (i === randSlide) {
	      insertText += ' class="active" ';
	    }
	    insertText += '></li>';
	    $('#featured ol').append(insertText);
	  }


	  $('.carousel').carousel({
  		pause: false
	});

});