//fullscreen map view
var map_id = document.getElementById('map');

function fullScreenView(){
    map_id.requestFullscreen();
}

//add map scale
L.control.scale({position : 'bottomleft'}).addTo(map);

//Map coordinate
map.on('mousemove', function(event){
    $('.coordinate').html("Lat: " + event.latlng.lat + ", Lng: " + event.latlng.lng);
});    

//Leaflet measure
L.control.measure({ 
    primaryLengthUnit: 'meters', 
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);

//Geocoder (search)
L.Control.geocoder().addTo(map);

//Map print
L.control.browserPrint({position : 'topright'}).addTo(map);

//Zoom to layer
$('.zoom-to-layer').click(function(){

    map.setView([11.5529, 122.7407], 7);
});

