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
    var scrollInfo = $('.scroll-info');
    $(".loader").fadeOut(900, function() {
        $(".container").fadeIn(700);
        if ($(window).width() > 768) {
            scrollInfo.fadeIn(300);
            setTimeout(function() {
                scrollInfo.fadeOut(300);
            }, 1000);
            setTimeout(function() {
                $('.slide-content__title').slideDown(600);
            }, 800);
        }
    });
    }, 300);

    //Menu trigger
    $('.nav-bar__menu-icon').on('click', function() {
        $('nav').toggle();
    });
    //Menu toggle
    $('.level-1 li').on('click', function(ev){
        $evTarget = $(ev.target);
        $evTarget.next('.level-2').slideToggle(200);
        $evTarget.find($('.ti-angle-down')).toggleClass('rotate');
        $('.level-2').not($evTarget.next('.level-2')).slideUp(200);
        $('.ti-angle-down').not($evTarget.find($('.ti-angle-down'))).removeClass('rotate');
    });

    //Logo effect
    $('.nav-bar__logo-img').mouseenter(function(){
        $(this).attr('src',function(index, attr){
            return attr.replace(".svg", "-hover.svg");});
    });
    $('.nav-bar__logo-img').mouseleave(function(){
        $(this).attr('src',function(index, attr){
            return attr.replace("-hover.svg",".svg");});      
        });    
    
}); 