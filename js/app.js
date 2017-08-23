$(document).ready(function() {
    $('.prevToggle').click(function() {
        console.log("something");
    });

    $('.nextToggle').click(function() {
        console.log("something else");
    });

    $(document).scroll(function() {
        // Variable declaration to help with browser caching (decrease load times)
        var $scroll = $(document).scrollTop();
        var $navContainer = $('#navContainer')

        // Adds and removes the notAtTop class depending on scroll position
        // change the number value in the if() statement to change the point
        // at which the function runs
        if ($scroll > 575) {
            $navContainer.addClass('notAtTop');
        } else {
            $navContainer.removeClass('notAtTop');
        }
    });
});
