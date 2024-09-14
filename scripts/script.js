$(function() {
    $('.abilities-ul > div').on('mouseenter', function() {
        $(this).children().css('left', '-180px');
    });

    $('.abilities-ul > div').on('mouseleave', function() {
        $(this).children().css('left', '0px');
    });
});