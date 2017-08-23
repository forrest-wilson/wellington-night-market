$(document).ready(function() {
    // Variable declarations
    var $scrollTime = 600;

    $('#whatsOnNavItem').click(function() {
        $('html body').animate({
            scrollTop: $('#whatsOnHeader').offset().top - 75
        }, $scrollTime);
    });

    $('.prevToggle').click(function() {
        console.log("something");
    });

    $('.nextToggle').click(function() {
        console.log("something else");
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
