window.top.scrollTo(0, 20);

$(document).ready(function() {
    setTimeout(function() {
        var swiper = new Swiper('.swiper-container.start', {
            speed: 550,
            direction: 'vertical',
            mousewheel: true,
            spaceBetween: 0,
            freeMode: false,
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

        //Loader, Scroll info & timeout for sim purposes
        // var scrollInfo = $('.scroll-info');
        // $(".loader").fadeOut(800, function() {
        //     $(".container").fadeIn(700);
        //     if ($(window).width() > 768) {
        //         scrollInfo.fadeIn(300);
        //         setTimeout(function() {
        //             scrollInfo.fadeOut(300);
        //         }, 800);
        //         setTimeout(function() {
        //             $('.slide-content__title').slideDown(600);
        //         }, 800);
        //     }
        // });
    }, 700);

});

