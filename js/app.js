(function (global, $) {
    'use strict';
    var myApp = (function () {
        var DELAY = 600,
            AUTOPLAY_DELAY = 3000;
        return {
            play: function play() {
                var currentSlide = $('.active-slide'),
                    nextSlide = currentSlide.next(),
                    currentDot = $('.active-dot'),
                    nextDot = currentDot.next();

                var activateFirstSlide = function activateFirstSlide() {
                    if (nextSlide.length === 0) {
                        nextSlide = $('.slide').first();
                        nextDot = $('.dot').first();
                    }
                };
                activateFirstSlide();

                var moveForwardSlide = function moveForwardSlide() {
                    currentSlide
                        .fadeOut(DELAY)
                        .removeClass('active-slide');
                    nextSlide
                        .fadeIn(DELAY)
                        .addClass('active-slide');
                    currentDot
                        .removeClass('active-dot');
                    nextDot
                        .addClass('active-dot');
                };
                moveForwardSlide();
            },

            playBack: function playBack() {
                var currentSlide = $('.active-slide'),
                    prevSlide = currentSlide.prev(),
                    currentDot = $('.active-dot'),
                    prevDot = currentDot.prev();

                var activateLastSlid = function activateLastSlid() {
                    if (prevSlide.length === 0) {
                        prevSlide = $('.slide').last();
                        prevDot = $('.dot').last();
                    }
                };
                activateLastSlid();

                var moveBackSlide = function moveBackSlide() {
                    currentSlide
                        .fadeOut(DELAY)
                        .removeClass('active-slide');
                    prevSlide
                        .fadeIn(DELAY)
                        .addClass('active-slide');
                    currentDot
                        .removeClass('active-dot');
                    prevDot
                        .addClass('active-dot');
                };
                moveBackSlide();
            },
            autoPlay: function autoPlay() {
                var autoplay = setInterval(myApp.play, AUTOPLAY_DELAY);

                $(".slider, .slider-nav").mouseenter(function () {
                    clearInterval(autoplay);
                }).mouseleave(function () {
                    autoplay = setInterval(myApp.play, AUTOPLAY_DELAY);
                });
            },
            playKey: function playKey() {
                $('body').keydown(function (event) {
                    if ((parseInt(event.which, 10)) === 39) {
                        myApp.play();
                    }
                    if ((parseInt(event.which, 10)) === 37) {
                        myApp.playBack();
                    }
                });
            },
            playArrow: function playArrow() {
                $('.arrow-next').click(function () {
                    myApp.play();
                });
                $('.arrow-prev').click(function () {
                    myApp.playBack();
                });
            }
        };
    })();
//Run autoplay & arrow select
    myApp.autoPlay();
    myApp.playArrow();
//Key Select. Left/Right arrow
    myApp.playKey();
})(window, jQuery);