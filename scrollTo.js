$( document ).ready(function() {
    $(".scrollTo1").click(function() {
        $('html,body').animate({
            scrollTop: $("#industry").offset().top},
            600);
    });
    $(".scrollTo2").click(function() {
        $('html,body').animate({
            scrollTop: $("#balance").offset().top},
            600);
    });
    $(".scrollTo3").click(function() {
        $('html,body').animate({
            scrollTop: $("#nature").offset().top},
            600);
    });
});
