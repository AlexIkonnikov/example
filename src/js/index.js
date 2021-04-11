import $ from 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.min.js'
import 'magnific-popup/src/css/main.scss';
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
    let target = $(this).attr("href");
    let distance = $(target).offset().top;
    $('html, body').animate({scrollTop: distance}, 400);
});

$('.overview__video').magnificPopup({
    items: {
        src: 'https://vimeo.com/107426942'
    },
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',
        patterns: {
            vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
            }
        },
    }
});
