$(document).ready(function () {
    $(window).on('scroll', function() {
        if ($(window).width() > 1024) {
            if ($(window).scrollTop() > 20) {
                $("#top-bar-container").css('border-bottom', '3px solid #222');
            } else {
                $("#top-bar-container").css('border-bottom', 'none');
            }
        }
    });
});
