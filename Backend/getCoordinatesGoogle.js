var x = document.getElementById("current-coordinates");
    var y = document.getElementById("current-address");
    var lat, lng;
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.value = "Geolocation is not supported by this browser.";
        }
    }
    
    function showPosition(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        x.innerHTML = "Latitude: " + lat + 
        "<br>Longitude: " + lng;
        
        var coordinates = {lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)};
        var geocoder = new google.maps.Geocoder;
    	//console.log("coordinates get");
 	   geocoder.geocode({'location': coordinates}, function(results, status) {
 	          if (status === 'OK') {
 	        	// y.value = results[1].formatted_address;
 	         y.innerHTML  = results[3].address_components[1].short_name + " " + results[3].address_components[0].short_name ;
 	            } 
 	        });
        console.log("geo information loaded");
    }
