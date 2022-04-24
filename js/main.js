$(document).ready(function () {
  $('.slider').slick({
    prevArrow: '<button class="slider-btn  slider-btnprev"><img src="./images/arrow-prev.svg" alt="" width="40" height="14"></button>',
    nextArrow: '<button class="slider-btn  slider-btnnext"><img src="./images/arrow-next.svg" alt=""></button>',
    dots: true,
    infinite: true,
    loop: false,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
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
    }

    ]
  });


  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('.header-nav').toggleClass('header-nav--open');
  });
  $('.header-nav__link').click(function () {
    $('.hamburger').removeClass('open');
    $('.header-nav').removeClass('header-nav--open');

  });


});

const anchors = document.querySelectorAll('.header-nav__item a')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();


    const blockID = anchor.getAttribute('href');


    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}