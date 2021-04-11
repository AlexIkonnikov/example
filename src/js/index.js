import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import '../scss/main.scss';
import '../scss/media.scss';


$('.single-item').slick({
    dots: true,
    arrows: false
});

$('.navigation__toggle').on('click', function() {
    $('.navigation__list').toggleClass('navigation__list--open');
});

$('.find-out-more__link').on('click', function(evt) {
    evt.preventDefault();
    let sc = $(this).attr("href");
    let dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 400);
});
