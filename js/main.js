//  слайдер

$('.tasting-slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.tasting-prev').click(function(){
    $('.tasting-slider').slick('slickPrev');
});

$('.tasting-next').click(function(){
    $('.tasting-slider').slick('slickNext');
});