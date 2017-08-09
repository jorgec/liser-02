// Document ready shorthand statement

$(function() {
    $('#get-to-about').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-2").offset().top + 56
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );


        // Prevent default behavior of link
        return false;
    });
    $('#home').click(function() {
        // Animate Scroll to #bottomx
        $('html,body').animate({
                scrollTop: 0
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;

    });

    $('#about').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-2").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );
            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-2").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );
            // Prevent default behavior of link
            return false;
        }

    });


    $('#services').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-3").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );
            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-3").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );
            // Prevent default behavior of link
            return false;
        }

    });

    $('#whatwedo').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-4").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-4").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });
    $('#robot').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-4").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-4").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });

    $('#software').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-5").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-5").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });
    $('#exhibits').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-6").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-6").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });
    $('#ourteam').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-7").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-7").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });
    $('#news').click(function() {
        // Animate Scroll to #bottom
        if ($(window).scrollTop() == 0) {
            $('html,body').animate({
                    scrollTop: $(".section-9").offset().top + 56
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        } else {
            $('html,body').animate({
                    scrollTop: $(".section-9").offset().top
                }, // Tell it to scroll to the top #bottom
                '2000' // How long scroll will take in milliseconds
            );

            // Prevent default behavior of link
            return false;
        }

    });


    // MOBILE NAVIGATION
    $('#m-home').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".video-container").offset().scrollTop = 0
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });

    $('#m-about').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-2").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });

    $('#m-services').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-3").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });
    $('#m-whatwedo').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-4").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });
    $('#m-robot').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-4").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });

    $('#m-software').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-5").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });
    $('#m-exhibits').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-6").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });
    $('#m-ourteams').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-7").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });
    $('#m-news').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
                scrollTop: $(".section-9").offset().top + 10
            }, // Tell it to scroll to the top #bottom
            '2000' // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
    });







});