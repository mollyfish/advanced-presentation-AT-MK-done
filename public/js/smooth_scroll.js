'use strict';

$('.flex-navbar a').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 1600, 'swing', function () {
      window.location.hash = target;
  });
});
$('.signup a').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 1600, 'swing', function () {
      window.location.hash = target;
  });
});
$('.mock-button').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 1600, 'swing', function () {
      window.location.hash = target;
  });
});


// Source: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
