function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
}

function loadScript(){
    var script = document.createElement('script');
    script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzoY1F0mI8QJltAEIo23Iyj6o6U7ndWlU&callback=initMap";
    document.body.appendChild(script);
}

window.onload = loadScript;