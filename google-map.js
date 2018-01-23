var restaurants = [
  [ 
    "0",
    "Falla",
    52.41139813187784,
    16.899384939286847,
    "Jeżyce",
    "Wawrzyniaka 19",
    "vegan"
  ],
  [
    "1",
    "Kraszkebab",
    52.41111017486103,
    16.902952277276654,
    "Jeżyce",
    "Kraszewskiego 9B",
    "fastfood"
  ],
  [
    "2",
    "Wypas",
    52.409945238651865,
    16.89702995977177,
    "Jeżyce",
    "Jackowskiego 38",
    "vegan"
  ],
  [
    "3",
    "Phobar",
    52.41147012083828,
    16.89908989629521,
    "Jeżyce",
    "Wawrzyniaka 19",
    "asian"
  ],
  [
    "4",
    "Para bar",
    52.40594299023912,
    16.9202686186768,
    "City center",
    "Kościuszki 70",
    "asian"
  ],
  [
    "5",
    "Why Thai",
    52.409333307587126,
    16.93401762208714,
    "Old Market",
    "Kramarska 7",
    "asian"
  ],
  [
    "6",
    "bardzo",
    52.410049,
    16.935513,
    "Old Market",
    "Żydowska 29",
    "breakfast"
  ],
  [
    "7",
    "Forno Italia",
    52.413625,
    16.905497,
    "Jeżyce",
    "Kościelna 12",
    "italian"
  ],
  [
    "8",
    "Meat us",
    52.410469,
    16.935713,
    "Old Marker",
    "Żydowska 26",
    "fastfood"
  ],
  [
    "9",
    "Food patrol",
    52.410469,
    16.935712999999964,
    "Jeżyce",
    "Kościelna 38",
    "fastfood"
  ],
  [
    "10",
    "Bo.Poznań",
    52.40832589999999,
    16.919997400000057,
    "City center",
    "Kościuszki 84",
    "breakfast"
  ],
  [
    "11",
    "Słodka &Ostra",
    52.40935820000001,
    16.90826830000003,
    "Jeżyce",
    "Sienkiewicza 20",
    "italian"
  ],
  [
    "12",
    "Piece of cake",
    52.41221340000001,
    16.93246739999995,
    "City center",
    "Św. Wojciech 27",
    "dessert"
  ],
  [
    "13",
    "La Ruina",
    52.411207,
    16.953377000000046,
    "Śródka",
    "Środka 3",
    "dessert"
  ],
  [
    "14",
    "Raj",
    52.411207,
    16.953377000000046,
    "Śródka",
    "Środka 3",
    "asian"
  ],
  [
    "15",
    "Rico's Kitchen",
    52.411207,
    16.953377000000046,
    "City center",
    "27 Grudnia 9",
    "asian"
  ],
  [
    "16",
    "Święta Krowa",
    52.4026344,
    16.93001090000007,
    "City center",
    "Kwiatowa 1",
    "fastfood"
  ],
  [
    "17",
    "SZOP kawiarnia",
    52.4093519,
    16.932631000000015,
    "City center",
    "23 Lutego 42",
    "dessert"
  ]
];

var grestaurants = [];

function initMap() {
  var poznan = {
    lat: 52.4064,
    lng: 16.9252
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: poznan
  });

  for (i = 0; i < restaurants.length; i++) {
    addMarker(restaurants[i]);
  }

  var infowindow = new google.maps.InfoWindow({
    content: ""
  });

  function addMarker(marker) {
    var category = marker[6];
    var address = marker[5];
    var title = marker[1];
    var position = new google.maps.LatLng(marker[2], marker[3]);
    var location = marker[4];
    var content = "<div> <h3>" + title + "</h3>" + "<p>" + location + "</p>" + "<p>" + address + "</p>" + "</div>";

    marker = new google.maps.Marker({
      title: title,
      position: position,
      category: category,
      map: map,
      icon: "https://i.imgur.com/IjTCrlR.png"
    });

    grestaurants.push(marker);

    marker.addListener("click", function () {
      infowindow.setContent(content);
      infowindow.open(map, marker);
    });
  }
}

function filterMarkers(category) {
  for (i = 0; i < restaurants.length; i++) {
    marker = grestaurants[i];
    if (marker.category == category || category.length == 0) {
      marker.setVisible(true);
    } else {
      marker.setVisible(false);
    }
  }
}