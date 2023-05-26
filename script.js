$(window).on('load', function() {
    var maxHeight = 0;
    $(".r-height .icon-text-wrap").each(function(){
       if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    $(".r-height .icon-text-wrap").height(maxHeight);
    });
$(document).ready(function(){
    $(".faq-c strong").click(function(){
      $(this).siblings("p").slideToggle();
      $(this).toggleClass("active")
    });

// reviews-slider
    var $status = $('.pagingInfo');
    var $slickElement = $('.slick-slider');
   $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        slide: '.slick-s',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        mobileFirst: true,
        
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: false
            }
        }]
        
    });
});

    