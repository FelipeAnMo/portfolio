$(document).ready(() => {
    $('.habilidades-item-header').on('click', function() {
        let habilidadesBody = $(this).siblings();

        if(habilidadesBody.css('height') === '0px') {
            habilidadesBody.css({
                'height': 'auto',
                'margin': '10px 0px 26px 0px'
            });

            $(this).find('i').css('transform', 'rotate(-90deg)')
        } else {
            habilidadesBody.css({
                'height': '0px',
                'margin': '0px'
            });

            $(this).find('i').css('transform', 'rotate(0deg)')
        }
    });

    $(".btn-inicio").on('click', () => {
        scrollAnimation(600, 0);
    });

    $(".btn-habilidades").on('click', () => {
        scrollAnimation(600, 850);
    });

    $(".btn-sobre").on('click', () => {
        scrollAnimation(600, 850);
    });

    $(".btn-projetos").on('click', () => {
        scrollAnimation(600, 1650);
    });

    $('#btn-show-mobile-header').on('click', () => {
        $('header').toggleClass('expanded');
    });

    $('#btn-mostrar-mais').on('click', () => {
        $('.sobre-content-mobile').html($('.sobre-content').html());
    });
});

function scrollAnimation(time, val) {
    $("html, body").animate({
        scrollTop: val
    }, time);

    if($(window).width() <= "580") {
        $('header').toggleClass('expanded');
    }
}
