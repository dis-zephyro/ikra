//  слайдер


$('.bg-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});


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