$(document).ready(function() {
    // Variable declarations
    var $scrollTime = 600;
    var $navContainer = $('#navContainer');
    var $htmlBody = $('html body');
    var $navLogo = $('.navLogo');
    var $navListItemAnchor = $('.navListItem a');
    var $navListItem = $('.navListItem');
    var $isActiveNav = $('.is-activeNav');
    var $toTopIcon = $('#toTopIcon');
    var $whiteHover = $('.whiteHover');
    var $blackHover = $('.blackHover');
    var $eventOverlay = $('.eventOverlay');

    // Scroll to sections when clicked (generic function)
    $navListItem.click(function() {
        var $href = $(this).children('a').attr('href');

        $(this).each(function() {
            $htmlBody.animate({
                scrollTop: $($href).offset().top - 75
            }, $scrollTime);
        });
    });

    // Click functionality for the toTopIcon
    $toTopIcon.click(function() {
        $htmlBody.animate({
            scrollTop: $htmlBody.offset().top
        }, $scrollTime);
    });

    // Event hover function
    $eventOverlay.hover(function() {
        $(this).addClass('eventOverlayShowing');
    }, function() {
        $(this).removeClass('eventOverlayShowing');
    });

    // When clicking on a nav item, the background sticks with it
    $whiteHover.click(function() {
        $navListItemAnchor.each(function() {
            $(this).removeClass('is-activeNav');
            $(this).removeClass('is-activeNavDark');
        });

        $(this).addClass('is-activeNav');
    });

    $blackHover.click(function() {
        $navListItemAnchor.each(function() {
            $(this).removeClass('is-activeNav');
            $(this).removeClass('is-activeNavDark');
        });

        $(this).addClass('is-activeNavDark');
    });

    // Call methods when scrolling
    $(document).scroll(function() {
        var $scrollPos = $(document).scrollTop();

        // var $target = $('.item');
        // var $targetHeight = $target.outerHeight();
        // var $scrollPercent = ($targetHeight - window.scrollY) / $targetHeight;
        //
        // if ($scrollPercent >= 0) {
        //     $target.css('opacity', $scrollPercent);
        // }

        // Adds and removes the notAtTop class depending on scroll position
        // Change the number value in the if() statement to change the point
        // at which the function runs
        if ($scrollPos < 575) {
            $navContainer.removeClass('notAtTop');
            $navLogo.removeClass('navImageChange');
            $navListItemAnchor.removeClass('blackHover');
            $navListItemAnchor.addClass('whiteHover');
            $navListItemAnchor.removeClass('is-activeNavDark');
        } else {
            $navContainer.addClass('notAtTop');
            $navLogo.addClass('navImageChange');
            $navListItemAnchor.removeClass('whiteHover');
            $navListItemAnchor.addClass('blackHover');
            // DON'T replace this line
            // Unexpected behavior happens when trying to
            // replace the class call with a stored variable
            $('.is-activeNav').addClass('is-activeNavDark');
        }

        // Show/Hide the #toTop Icon
        if ($scrollPos < 250) {
            $toTopIcon.removeClass('toTopShowing');
        } else {
            $toTopIcon.addClass('toTopShowing');
        }
    }).scroll(); // Self executing scroll on page load to initialize elements that rely on the scroll function being triggered

	// Google Maps JS
	function initialize() {
        var myLatlng = new google.maps.LatLng(-41.2926356,174.7760156,19.82);
		var mapOptions = {
			zoom: 17,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{color: '#242f3e'}]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#242f3e'}]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]
        }

        // Set Map
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = 'Wellington Night Market';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 500,

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
