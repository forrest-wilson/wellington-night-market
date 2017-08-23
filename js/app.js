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
$( document ).ready( function() {
	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(-41.2926356,174.7760156,19.82);
			var mapOptions = {
				zoom: 20,
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

