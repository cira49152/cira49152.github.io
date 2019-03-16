$(document).ready(function() {
    setTimeout(function() {
        var swiper = new Swiper('.swiper-container', {
            speed: 700,
            direction: 'vertical',
            mousewheel: true,
            spaceBetween: 0,
            freeMode: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        $(".loader").fadeOut(800, function() {
            $(".container").fadeIn(700);
            if ($(window).width() > 768) {
                $('.helper').fadeIn(300);
                setTimeout(function() {
                    $('.helper').fadeOut(300);
                }, 1500);
            }
        });
    }, 700);
});