let map, service;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -2.5489, lng: 118.0149 },
    zoom: 5
  });
  service = new google.maps.places.PlacesService(map);
}

function findNearbyClinics(location) {
  const request = {
    location: location,
    radius: '5000',
    keyword: 'klinik kesehatan mental'
  };
  
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      displayClinics(results);
    }
  });
}