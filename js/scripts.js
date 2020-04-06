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



});


(function ($) {
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.nav').toggleClass('nav_state_open');
        });
    });
})(jQuery); 
//# sourceURL=pen.js

