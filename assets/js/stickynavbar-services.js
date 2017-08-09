function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    var nav_sticky = document.getElementById("sticky");
    if (window_top > div_top) {
        $('.brand-logo').removeClass('hide-on-large-only');
        $('#sticky').addClass('stick');
        $('#sticky-anchor').addClass('sticky-height');
        console.log("nag scroll padalom");
        // nav_sticky.style.backgroundColor = "white";
        $('#sticky').addClass('sticky-bg-white').removeClass('sticky-bg-transparent');

        $('#m-services').addClass('active');

        // NAVBAR TEXT COLOR  BLACK
        $('#home').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#about').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#services').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#whatwedo').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#robot').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#software').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#exhibits').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#ourteam').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#news').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#contact').addClass('nav_txt-orange').removeClass('nav_txt-white');

    } else {
        $('.brand-logo').removeClass('hide-on-large-only');
        $('#sticky').addClass('stick');
        $('#sticky-anchor').addClass('sticky-height');
        console.log("nag scroll padalom");
        // nav_sticky.style.backgroundColor = "white";
        $('#sticky').addClass('sticky-bg-white').removeClass('sticky-bg-transparent');

        $('#m-services').addClass('active');

        // NAVBAR TEXT COLOR  BLACK
        $('#home').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#about').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#services').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#whatwedo').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#robot').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#software').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#exhibits').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#ourteam').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#news').addClass('nav_txt-orange').removeClass('nav_txt-white');
        $('#contact').addClass('nav_txt-orange').removeClass('nav_txt-white');
    }
}


$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


function nav_active() {
    var window_top = $(window).scrollTop() + 50;
    var section_3 = $('#section-3').offset().top;



    $('#m-services').addClass('active');



    if (window_top > section_3) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').addClass('active');
        $('#robot').removeClass('active');

        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').addClass('active');
        $('#m-robot').removeClass('active');
    } else if (window_top < section_3) {
        $('#m-services').addClass('active');

    } else {
        $('#services').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-home').removeClass('active');

    }




}

$(function() {
    $(window).scroll(nav_active);
    nav_active();
});