$(document).ready(function () {
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
    });
});
$(document).ready(function () {
    $(".icon").click(function () {
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});
