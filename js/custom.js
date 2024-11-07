$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        speed: 2000,
        // autoplay: true,
        // autoplaySpeed: 2500,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    



});