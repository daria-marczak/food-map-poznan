function initMap() {

    var poznan = {
        lat: 52.4064,
        lng: 16.9252
    }

    var markers = [
        {
            name: "Falla",
            coords: {
                lat: 52.41139813187784,
                lng: 16.899384939286847
            },
            location: "Jezyce",
            foodType: "asian"
        },

        {
            name: "Kraszkebab",
            coords: {
                lat: 52.41111017486103,
                lng: 16.902952277276654
            },
            location: "Jezyce",
            foodType: "fastfood"
        },

        {
            name: "Wypas",
            coords: {
                lat: 52.409945238651865,
                lng: 16.89702995977177
            },
            location: "Jezyce",
            foodType: "vegan"
        },

        {
            name: "Phobar",
            coords: {
                lat: 52.41147012083828,
                lng: 16.89908989629521
            },
            location: "Jezyce",
            foodType: "asian"
        },

        {
            name: "Para bar",
            coords: {
                lat: 52.40594299023912,
                lng: 16.9202686186768
            },
            location: "City center",
            foodType: "asian"
        },

        {
            name: "Why Thai",
            coords: {
                lat: 52.409333307587126,
                lng: 16.93401762208714
            },
            location: "Old Market",
            foodType: "asian"
        }
    ];

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: poznan
    });

	 function addMarker(props) {
	  	var marker = new google.maps.Marker({
		  	position: props.coords,
		  	map: map,
		  	icon: "https://i.imgur.com/IjTCrlR.png"
		});
	 }

        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i]);      // Loop through markers array and add the marker on the map
        }

        function clearMarkers() {
            setMapOnAll(null);              //Removes markers from the map
        }

    }



  // listener for marker to add info

 	//get the coordinates from here: https://www.maps.ie/coordinates.html
