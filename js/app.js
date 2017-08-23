$(document).ready(function() {
    // Variable declarations
    var $scrollTime = 600;

    // Scroll to sections when clicked
    $('#whatsOnNavItem').click(function() {
        $('html body').animate({
            scrollTop: $('#whatsOnSection').offset().top - 75 // the 75 is the navigation height offset
        }, $scrollTime);
    });

    $('#aboutUsNavItem').click(function() {
        $('html body').animate({
            scrollTop: $('#aboutUsSection').offset().top - 75
        }, $scrollTime);
    });

    $('#reviewsNavItem').click(function() {
        $('html body').animate({
            scrollTop: $('#reviewsSection').offset().top - 75
        }, $scrollTime);
    });

    $('#contactNavItem').click(function() {
        $('html body').animate({
            scrollTop: $('#contactSection').offset().top - 75
        }, $scrollTime);
    });

    // Call methods when scrolling
    $(document).scroll(function() {
        // Variable declaration to help with browser caching (decrease load times)
        var $scroll = $(document).scrollTop();
        var $navContainer = $('#navContainer')

        // Adds and removes the notAtTop class depending on scroll position
        // change the number value in the if() statement to change the point
        // at which the function runs
        if ($scroll >= 575) {
            $navContainer.addClass('notAtTop');
        } else {
            $navContainer.removeClass('notAtTop');
        }
    });
});
