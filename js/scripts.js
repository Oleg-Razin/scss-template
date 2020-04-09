$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $('.menu__icon').on('click', function () {
        $(this).closest('.nav').toggleClass('nav_state_open');
    });
    // $('.menu__icon .nav__items').on('click', function () {
    //     $(this).closest('.nav').removeClass('.nav_state_open');
    // });

    // $(".select__plan").on('click', function () {
    //     //$(this).closest('.plan__items.active-plan').removeClass('.active-plan');
    //     $(this).closest('.plan__items').toggleClass('.active-plan');
    // });
});

// (function ($) {
//     $(function () {
//         $('.menu__icon').on('click', function () {
//             $(this).closest('.nav').toggleClass('nav_state_open');
//         });
//         $('.menu__icon .nav__items').on('click', function () {
//             $(this).closest('.nav').removeClass('.nav_state_open');
//         });
//     });
// })(jQuery);

// });
//# sourceURL=pen.js

