$(document).ready(function() {
    $('.prevToggle').click(function() {
        console.log("something");
    });

    $('.nextToggle').click(function() {
        console.log("something else");
    });

    $(document).scroll(function() {
        var $scroll = $(document).scrollTop();
        var $navContainer = $('#navContainer')

        if ($scroll > 575) {
            $navContainer.addClass('notAtTop');
        } else {
            $navContainer.removeClass('notAtTop');
        }
    });
});
