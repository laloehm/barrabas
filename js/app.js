/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"
    }, 1000);
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $("#menu");
    if ($("#menu").offset().top > 700) {
        $('.navbar-brand img').attr('src', 'images/Logo-Azul.png');
        $('.collapse').css({
            'border-bottom': '1px solid #0049ff',
            'background': '#fff'
        });
    } else {
        $('.navbar-brand img').attr('src', 'images/Logo.png');
        $('.collapse').css({
            'border-bottom': '1px solid #fff',
            'background': 'transparent'
        });
    }
});