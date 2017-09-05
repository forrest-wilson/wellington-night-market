$(document).ready(function() {

    ///////////////////////////////
    //// Variable Declarations ////
    ///////////////////////////////

    var $scrollTime = 600;
    var $htmlBody = $('html, body');
    var $toTopIcon = $('#toTopIcon');
    var $eventOverlay = $('.eventOverlay');
    
    //////////////////////
    //// Click Events ////
    //////////////////////

    // // Click event for the Navigation items (mobile and desktop)
    $('.navListItem, .mobileNavListItem').click(function(e) {
        var $href = $(this).children('a').attr('href');

        $(this).each(function() {
            $htmlBody.animate({
                scrollTop: $($href).offset().top - 75
            }, $scrollTime);
        });

        e.preventDefault();
    });

    // Click event that hides the mobile nav menu
    $('.mobileNavListItem, #hamburger').click(function() {
        $('.mobileNavListItems').toggle();
        $('#hamburgerLine1').toggleClass('hamClosed1');
        $('#hamburgerLine2').toggleClass('hamClosed2');
        $('#hamburgerLine3').toggleClass('hamClosed3');
    });

    // Click event that shows all events and hides the button
    $('.showMoreEventsButton').click(function() {
        $('.event2, .event3').show();
        $(this).hide();
    });

    // Click event that shows all reviews and hides the button
    $('.showMoreReviewsButton').click(function(){
        $('.review2, .review3').show();
        $('.reviewStatement').hide();
        $(this).hide();
        $('.reviewName').css('margin-top', '0px');
    });

    // Click event that scrolls the document to the top of the page
    $('.mobileNavLogo img, #toTopIcon, .navLogo').click(function() {
        $htmlBody.animate({
            scrollTop: $htmlBody.offset().top
        }, $scrollTime);
    });

    // Shows the overlays on each form
    $('.submit1').click(function() {
        $('.formOverlay1').show();
    });

    $('.submit2').click(function() {
        $('.formOverlay2').show();
    });

    $('.submit3').click(function() {
        $('.formOverlay3').show();
    });

    $('.submit4').click(function() {
        $('.formOverlay4').show();
    });

    $('.formSubmitButton').click(function() {
        $('.formOverlay').hide();
    });

    //////////////////////
    //// Hover Events ////
    //////////////////////

    // Hover event that shows overlay when hovering over events
    $eventOverlay.hover(function() {
        $(this).toggleClass('eventOverlayShowing');
    });

    ///////////////////////
    //// Scroll Events ////
    ///////////////////////

    // Calls this function when the document is scrolling. Mainly used for the showing/hiding of the #toTopButton
    $(document).scroll(function() {
        var $scrollPos = $(document).scrollTop();

        // Show/Hide the #toTop Icon
        if ($scrollPos < 250) {
            $toTopIcon.removeClass('toTopShowing');
        } else {
            $toTopIcon.addClass('toTopShowing');
        }
    }).scroll(); // Self executing scroll on page load to initialize elements that rely on the scroll function being triggered

	/////////////////////////
    //// Google Maps API ////
    /////////////////////////

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
