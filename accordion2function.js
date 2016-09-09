$(document).ready(function () {
    $(".simpmoreinfo").css("display", "none");
    $(".simpclickme button").attr("aria-expanded", "false");
});

$(".simpclickme button").click(function () {
    //    alert("test");
    var n = $(this).attr("aria-expanded");
    if (n == "false") {
        $(this).parent().next("p").css("display", "block");
        $(this).attr("aria-expanded", "true");
        $(this).children("span").attr("class", "minus");
    } else {
        $(this).parent().next("p").css("display", "none");
        $(this).attr("aria-expanded", "false");
        $(this).children("span").attr("class", "plus");
    }
});