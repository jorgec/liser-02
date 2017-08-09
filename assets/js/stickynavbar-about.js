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
    var section_2 = $('#section-2').offset().top;

    var section_7 = $('#section-7').offset().top;
    var section_8 = $('#section-8').offset().top;

    if (window_top > section_2) {
        $('#home').removeClass('active');
        $('#about').addClass('active');
        $('#robot').removeClass('active');

        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').addClass('active');
        $('#m-robot').removeClass('active');
    } else if (window_top < section_2) {
        $('#m-about').addClass('active');
    } else {
        $('#about').removeClass('active');
        $('#m-about').removeClass('active');
    }




}

$(function() {
    $(window).scroll(nav_active);
    nav_active();
});