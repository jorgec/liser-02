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


        $('#home').addClass('active');
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
        $('.brand-logo').addClass('hide-on-large-only');
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').removeClass('sticky-height');
        $('#sticky').addClass('sticky-bg-transparent').removeClass('sticky-bg-white');

        console.log("top");
        //nav_sticky.style.backgroundColor = "transparent";

        document.body.style.overflowX = "hidden";
        $('#home').removeClass('active');

        // NAVBAR TEXT COLOR  WHITE
        $('#home').addClass('nav_txt-white').removeClass('nav_txt-orange');
        $('#about').addClass('nav_txt-white').removeClass('nav_txt-orange');
        $('#services').addClass('nav_txt-white').removeClass('nav_txt-orange')
        $('#whatwedo').addClass('nav_txt-white').removeClass('nav_txt-orange');
        $('#robot').addClass('nav_txt-orange');
        $('#software').addClass('nav_txt-orange');
        $('#exhibits').addClass('nav_txt-orange');
        $('#ourteam').addClass('nav_txt-white').removeClass('nav_txt-orange');
        $('#news').addClass('nav_txt-white').removeClass('nav_txt-orange');
        $('#contact').addClass('nav_txt-white').removeClass('nav_txt-orange');
    }
}


$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


function nav_active() {
    var window_top = $(window).scrollTop() + 50;
    var section_1 = $('#section-1').offset().top;
    var section_2 = $('#section-2').offset().top;
    var section_3 = $('#section-3').offset().top;
    var section_4 = $('#section-4').offset().top;
    var section_5 = $('#section-5').offset().top;
    var section_6 = $('#section-6').offset().top;
    var section_7 = $('#section-7').offset().top;
    var section_8 = $('#section-8').offset().top;
    var section_9 = $('#section-9').offset().top;





    if (window_top > section_1) {
        $('#m-home').addClass('active');
    } else if (window_top < section_1) {
        $('#m-home').addClass('active');
    } else {
        $('#m-home').removeClass('active');
    }

    if (window_top > section_2) {
        $('#home').removeClass('active');
        $('#about').addClass('active');
        $('#robot').removeClass('active');

        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').addClass('active');
        $('#m-robot').removeClass('active');

    } else {
        $('#about').removeClass('active');
        $('#m-about').removeClass('active');
    }
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

    } else {
        $('#services').removeClass('active');
        $('#m-services').removeClass('active');

    }
    if (window_top > section_4) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').addClass('active');
        $('#robot').addClass('active');
        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-whatwedo1').addClass('active');
        $('#m-robot').addClass('active');
    } else {
        $('#whatwedo').removeClass('active');
        $('#robot').removeClass('active');
        $('#m-whatwedo1').removeClass('active');
        $('#m-robot').removeClass('active');

    }

    if (window_top > section_5) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').removeClass('active');
        $('#robot').removeClass('active');
        $('#whatwedo').removeClass('exhibits-bg');
        $('#software').addClass('active');
        $('#whatwedo').addClass('software-bg');
        // MOBILE

        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('.m-whatwedo').removeClass('active');
        $('#m-robot').removeClass('active');
        $('#m-whatwedo1').removeClass('exhibits-bg');
        $('#m-software').addClass('active');
        $('#m-whatwedo1').addClass('software-bg');
    } else {
        $('#software').removeClass('active');
        $('#whatwedo').removeClass('software-bg');
        $('#m-software').removeClass('active');
        $('#m-whatwedo1').removeClass('software-bg');

    }
    if (window_top > section_6) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').removeClass('active');
        $('#software').removeClass('active');
        $('#robot').removeClass('active');
        $('#whatwedo').removeClass('software-bg');
        $('#exhibits').addClass('active');
        $('#whatwedo').addClass('exhibits-bg');

        // MOBIEL

        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-whatwedo1').removeClass('active');
        $('#m-software').removeClass('active');
        $('#m-robot').removeClass('active');
        $('#m-whatwedo1').removeClass('software-bg');
        $('#m-exhibits').addClass('active');
        $('#m-whatwedo1').addClass('exhibits-bg');


    } else {
        $('#exhibits').removeClass('active');
        $('#whatwedo').removeClass('exhibits-bg');
        $('#m-exhibits').removeClass('active');
        $('#m-whatwedo1').removeClass('exhibits-bg');

    }
    if (window_top > section_7) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').removeClass('active');
        $('#software').removeClass('active');
        $('#exhibits').removeClass('active');
        $('#robot').removeClass('active');
        $('#whatwedo').removeClass('software-bg');
        $('#whatwedo').removeClass('exhibits-bg');
        $('#ourteam').addClass('active');
        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-whatwedo1').removeClass('active');
        $('#m-software').removeClass('active');
        $('#m-exhibits').removeClass('active');
        $('#m-robot').removeClass('active');
        $('#m-whatwedo1').removeClass('software-bg');
        $('#m-whatwedo1').removeClass('exhibits-bg');
        $('#m-ourteams').addClass('active');


    } else {
        $('#ourteam').removeClass('active');
        $('#m-ourteams').removeClass('active');

    }
    if (window_top > section_8) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').removeClass('active');
        $('#software').removeClass('active');
        $('#exhibits').removeClass('active');
        $('#robot').removeClass('active');
        $('#ourteam').removeClass('active');
        $('#whatwedo').removeClass('software-bg');
        $('#whatwedo').removeClass('exhibits-bg');
        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-whatwedo1').removeClass('active');
        $('#m-software').removeClass('active');
        $('#m-exhibits').removeClass('active');
        $('#m-robot').removeClass('active');
        $('#m-ourteams').removeClass('active');
        $('#m-whatwedo1').removeClass('software-bg');
        $('#m-whatwedo1').removeClass('exhibits-bg');

    }
    if (window_top > section_9) {
        $('#home').removeClass('active');
        $('#about').removeClass('active');
        $('#services').removeClass('active');
        $('#whatwedo').removeClass('active');
        $('#software').removeClass('active');
        $('#exhibits').removeClass('active');
        $('#robot').removeClass('active');
        $('#whatwedo').removeClass('software-bg');
        $('#whatwedo').removeClass('exhibits-bg');
        $('#ourteam').removeClass('active');
        $('#news').addClass('active');
        //MOBILE
        $('#m-home').removeClass('active');
        $('#m-about').removeClass('active');
        $('#m-services').removeClass('active');
        $('#m-whatwedo1').removeClass('active');
        $('#m-software').removeClass('active');
        $('#m-exhibits').removeClass('active');
        $('#m-robot').removeClass('active');
        $('#m-whatwedo1').removeClass('software-bg');
        $('#m-whatwedo1').removeClass('exhibits-bg');
        $('#m-ourteams').removeClass('active');
        $('#m-news').addClass('active');


    } else {
        $('#news').removeClass('active');
        $('#m-news').removeClass('active');

    }



}

$(function() {
    $(window).scroll(nav_active);
    nav_active();
});