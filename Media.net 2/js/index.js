var $slider;
var displaySlides;

function buildSliderConfiguration() {

    var windowWidth = $(window).width();
    var numberOfVisibleSlides;
    var customcontrols;

    if (windowWidth < 420) {
        numberOfVisibleSlides = 1;
        displaySlides = numberOfVisibleSlides;
        customcontrols = false;
    } else if (windowWidth < 768) {
        numberOfVisibleSlides = 2;
        displaySlides = numberOfVisibleSlides;
        customcontrols = false;
    } else if (windowWidth < 1200) {
        numberOfVisibleSlides = 3;
        displaySlides = numberOfVisibleSlides;
    } else {
        numberOfVisibleSlides = 4;
        displaySlides = numberOfVisibleSlides;

    }

    return {
        pager: true,
        controls: customcontrols,
        auto: false,
        slideWidth: 300,
        startSlide: 0,
        minSlides: numberOfVisibleSlides,
        maxSlides: numberOfVisibleSlides,
        infiniteLoop: true
    };


}


// loads bxSlider and reloads on bxSlider

function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
        $slider.reloadSlider(config);
        //onSliderLoad();

    } else {
        $slider = $('.slider').bxSlider(config);
        //onSliderLoad();

    }
}

$(window).on("orientationchange resize", configureSlider)
configureSlider();





