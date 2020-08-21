$(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass('lock');
  });

  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});
