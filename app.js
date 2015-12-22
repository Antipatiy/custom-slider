var main = function() {
  function play() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  };

  function playBack() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  };

  $('.arrow-next').click(function() {
    play();
  });

  $('.arrow-prev').click(function() {
    playBack();
  });

  //Key Select
  $(document).keydown(function(event) {
    if ((parseInt(event.which,10)) == 39) {
      play();
    }

    if ((parseInt(event.which,10)) == 37) {
      playBack();
    }
  });

  //Autoplay
  var autoplay = setInterval(play,  3000);

  //Hover Stop Autoplay
  $(".slider, .slider-nav").mouseenter(function() {
    clearInterval(autoplay);
  }).mouseleave(function() {
    autoplay = setInterval(play,  3000);
  });

};

$(document).ready(main);