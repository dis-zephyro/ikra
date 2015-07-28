//  слайдер


$(function(){
    if(!flux.browser.supportsTransitions)
        alert("Flux Slider requires a browser that supports CSS3 transitions");

    window.f = new flux.slider('.bg-slider', {
        pagination: true
    });
});

/*
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

*/

var gallery = $("#gallery1").waterwheelCarousel({
    flankingItems: 2,
    sizeMultiplier: .5,
    opacityMultiplier: 1,
    horizonOffset: 0,
    separationMultiplier: .4
});

$('.prev').bind('click', function () {
    gallery.prev();
    return false
});

$('.next').bind('click', function () {
    gallery.next();
    return false;
});


$(".cert-large, .video-play").fancybox({
    "padding" : 0
});

$(".btn-popup").fancybox({
    "padding" : 0
});


$(".btn-more").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});


// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
        center: [50.6408,142.9328],
        zoom: 9,
        controls: ['zoomControl']
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([50.8603,142.1637], {
            balloonContent: 'г. Сахалин, ул. Лиственничная аллея д. 2 Д'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [41, 58],
            iconImageOffset: [-20, -59]
        }))
        .add(new ymaps.Placemark([50.6809,143.4821], {
            balloonContent: 'г. Сахалин, ул. Лиственничная аллея д. 2 Д'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [41, 58],
            iconImageOffset: [-20, -59]
        }));

    myMap.behaviors.disable('scrollZoom');
}


// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});