var myApp = (function () {
    var DELAY = 600;
    var AUTOPLAY_DELAY = 3000;
    return {
        play: function () {
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();
            var currentDot = $('.active-dot');
            var nextDot = currentDot.next();

            var activateFirstSlide = function () {
                if (nextSlide.length === 0) {
                    nextSlide = $('.slide').first();
                    nextDot = $('.dot').first();
                }
            };
            activateFirstSlide();

            var moveForwardSlide = function () {
                currentSlide.fadeOut(DELAY).removeClass('active-slide');
                nextSlide.fadeIn(DELAY).addClass('active-slide');
                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
            };
            moveForwardSlide();
        },

        playBack: function () {
            var currentSlide = $('.active-slide');
            var prevSlide = currentSlide.prev();
            var currentDot = $('.active-dot');
            var prevDot = currentDot.prev();

            var activateLastSlid = function () {
                if (prevSlide.length === 0) {
                    prevSlide = $('.slide').last();
                    prevDot = $('.dot').last();
                }
            };
            activateLastSlid();

            var moveBackSlide = function () {
                currentSlide.fadeOut(DELAY).removeClass('active-slide');
                prevSlide.fadeIn(DELAY).addClass('active-slide');
                currentDot.removeClass('active-dot');
                prevDot.addClass('active-dot');
            };
            moveBackSlide();
        },
        autoPlay: function () {
            var autoplay = setInterval(myApp.play, AUTOPLAY_DELAY);

            $(".slider, .slider-nav").mouseenter(function () {
                clearInterval(autoplay);
            }).mouseleave(function () {
                autoplay = setInterval(myApp.play, AUTOPLAY_DELAY);
            });
        },
        playKey: function (event) {
            if ((parseInt(event.which, 10)) === 39) {
                myApp.play();
            }
            if ((parseInt(event.which, 10)) === 37) {
                myApp.playBack();
            }
        },
        playArrow: function () {
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
$(document).ready(myApp.autoPlay);
$(document).ready(myApp.playArrow);
//Key Select. Left/Right arrow
$(document).keydown(myApp.playKey);