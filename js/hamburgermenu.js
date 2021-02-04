$(function () {
    $('.toggle-button').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
    });
});