$('.product3_main_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,    
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.product3_main_slider_nav'
});
$('.product3_main_slider_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product3_main_slider',
    arrows: false
});