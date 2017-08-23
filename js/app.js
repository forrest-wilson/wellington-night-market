$(document).ready(function() {
    // Variable declarations
    var $scrollTime = 600;
    var $navContainer = $('#navContainer');
    var $htmlBody = $('html body');
    var $navLogo = $('.navLogo');
    var $navListItemAnchor = $('.navListItem a');

    // Scroll to sections when clicked
    $('#whatsOnNavItem').click(function() {
        $htmlBody.animate({
            scrollTop: $('#whatsOnSection').offset().top - 75 // the 75 is the navigation height offset
        }, $scrollTime);
    });

    $('#aboutUsNavItem').click(function() {
        $htmlBody.animate({
            scrollTop: $('#aboutUsSection').offset().top - 75
        }, $scrollTime);
    });

    $('#reviewsNavItem').click(function() {
        $htmlBody.animate({
            scrollTop: $('#reviewsSection').offset().top - 75
        }, $scrollTime);
    });

    $('#contactNavItem').click(function() {
        $htmlBody.animate({
            scrollTop: $('#contactSection').offset().top - 75
        }, $scrollTime);
    });

    // When clicking on a nav item, the background sticks with it
    $('.navListItem a').click(function() {
        $('.navListItem a').each(function() {
            $(this).removeClass('is-activeNav');
        });

        $(this).addClass('is-activeNav');
    });

    // Click functionality for the toTopIcon
    $('#toTopIcon').click(function() {
        $htmlBody.animate({
            scrollTop: $htmlBody.offset().top
        }, $scrollTime);
    });

    // Event hover function
    $('.eventOverlay').hover(function() {
        $(this).addClass('eventOverlayShowing');
    }, function() {
        $(this).removeClass('eventOverlayShowing');
    });

    // Call methods when scrolling
    $(document).scroll(function() {
        // Variable declaration to help with browser caching (decrease load times)
        var $scrollPos = $(document).scrollTop();

        // Adds and removes the notAtTop class depending on scroll position
        // Change the number value in the if() statement to change the point
        // at which the function runs
        if ($scrollPos < 575) {
            $navContainer.removeClass('notAtTop');
            $navLogo.removeClass('navImageChange');
            $navListItemAnchor.removeClass('blackHover');
            $navListItemAnchor.addClass('whiteHover');
            $('#toTopIcon').removeClass('toTopShowing');
        } else {
            $navContainer.addClass('notAtTop');
            $navLogo.addClass('navImageChange');
            $navListItemAnchor.removeClass('whiteHover');
            $navListItemAnchor.addClass('blackHover');
            $('#toTopIcon').addClass('toTopShowing');
        }

        // $('section').each(function(i) {
        //     if ($(this).position().top <= $scrollPos - 75) {
        //         $('.navListItem a.is-activeNav').removeClass('is-activeNav');
        //         $('.navListItem a').addClass('is-activeNav');
        //     } else {
        //         $('.navListItem a.is-activeNav').removeClass('is-activeNav');
        //         $('.navListItem:first a').eq(i).addClass('is-activeNav');
        //     }
        // });
    }).scroll(); // Self executing scroll on page load to initialize elements that rely on the scroll function being triggered

	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(-41.2926356,174.7760156,19.82);
			var mapOptions = {
				zoom: 19,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = 'Some address here..';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 500
		});

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});
