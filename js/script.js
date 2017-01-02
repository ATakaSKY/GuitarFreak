$(function(){

	"use strict";

	var topOffset = 50;

	$('.carousel').carousel({
  	interval: false
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


});