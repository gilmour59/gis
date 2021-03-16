//fullscreen map view
var map_id = document.getElementById('map');

function fullScreenView(){
    
    if(document.fullscreenElement){
        $('#btn-fullscreen').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">' +
            '<path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>' +
        '</svg>'
        );
        document.exitFullscreen();
    }else{
        $('#btn-fullscreen').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16">' +
            '<path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>' +
        '</svg>'
        );
    }
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
$('#zoom-to-layer').click(function(){

    map.setView([11.5529, 122.7407], 7);
});

