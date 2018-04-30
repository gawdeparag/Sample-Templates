function initMap() {
    var options = {
        zoom: 7,
        center: {
            lat: 15.8700,
            lng: 100.9925
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}