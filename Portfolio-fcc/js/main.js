function initMap() {
    var options = {
        zoom: 7,
        center: {
            lat: 56.2639,
            lng: 9.5018
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}
