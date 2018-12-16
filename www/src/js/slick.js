$(document).ready(function() {
    $('.carousel__list').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.carousel__prev'),
        nextArrow: $('.carousel__next'),
      });
});