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


$('.nav_header_mob_burger').click(function(){
    $('.nav_header_mob_menu').addClass('nav_header_mob_menu_active');    
});
$('.nav_header_mob_menu_close').click(function(){
    $('.nav_header_mob_menu').removeClass('nav_header_mob_menu_active');    
});