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


$(".cert-large, .video-play").fancybox({
    "padding" : 0
});

$(".btn-popup").fancybox({
    "padding" : 0
});



// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});