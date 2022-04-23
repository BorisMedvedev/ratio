$(document).ready(function () {
  $('.slider').slick({
    prevArrow: '<button class="slider-btn  slider-btnprev"><img src="./images/arrow-prev.svg" alt="" width="40" height="14"></button>',
    nextArrow: '<button class="slider-btn  slider-btnnext"><img src="./images/arrow-next.svg" alt=""></button>',
    dots: true,
    infinite: true,
    loop: false,
    speed: 300,
    slidesToShow: 2,
    // centerMode: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false

      }
    },

    ]
  });


  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });


});