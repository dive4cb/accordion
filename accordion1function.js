    <!--    Script for accordion to W3C Spec-->

    $(document).ready(function () {
        $(".moreinfo").css("display", "none").attr("role", "tabpanel");
        $(".clickme").attr("aria-expanded", "false").attr("role", "tab").attr("tabindex", "-1");
        $("#tablist").attr("role", "tablist").attr("tabindex", "0");
        $("#tablist").attr("aria-multiselectable", "true");
        $(".clickme").focus(function () {
            $(this).attr("aria-selected", "true");
        });
        $(".clickme").blur(function () {
            $(this).removeAttr("aria-selected");
        });
        $(".clickme").click(function () {
            var n = $(this).attr("aria-expanded");
            if (n == "false") {
                $(this).next("p").css("display", "block");
                $(this).attr("aria-expanded", "true");
                $(this).children("span").attr("class", "minus");
            } else {
                $(this).next("p").css("display", "none");
                $(this).attr("aria-expanded", "false");
                $(this).children("span").attr("class", "plus");
            }
        });
        $("#tablist").focus(function () {
            $(this).keydown(function (e) {
                var code = e.which;
                if (code == 13 || code == 40 || code == 39) e.preventDefault();
                if (code == 13 || code == 40 || code == 39) {
                    $(this).children("h2.clickme:first").focus();
                    $(this).off("keydown");
                };
            });
        });
        $(".clickme").keydown(function (e) {
            var code = e.which;
            if (code == 32 || code == 13 || code == 38 || code == 37 || code == 40 || code == 39) e.preventDefault();
            if (code == 32 || code == 13) {
                $(this).click();
            };
            if (code == 38 || code == 37) {
                $(this).prevAll("h2.clickme:first").focus();
            };
            if (code == 40 || code == 39) {
                $(this).nextAll("h2.clickme:first").focus();
            };
        });
    });