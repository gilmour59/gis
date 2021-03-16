//initiate map
var map = L.map('map').setView([11.5529, 122.7407], 7);

map.zoomControl.setPosition('topright');

//title layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var stamen_watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});   

var stamen_toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});     

var first_marker = L.marker([11.5529, 122.7407])
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();    

//Geojson load using marker cluster
var marker_cluster = L.markerClusterGroup();
var test_data = L.geoJSON(data, {
    onEachFeature : function(feature, layer){                    
        layer.bindPopup('coordinates: ' + feature.geometry.coordinates[0] + ', ' + feature.geometry.coordinates[1]);
    } 
});

test_data.addTo(marker_cluster);
marker_cluster.addTo(map);

//Leaflet layer control
var base_maps = {
    'OSM' : osm,
    'Water Color Map' : stamen_watercolor,
    'Stamen Toner Map' : stamen_toner
}

//use this to initiate the marker cluster
var overlayer_maps = {
    'Leaflet First Marker' : first_marker,
    'GeoJSON Markers' : marker_cluster,
}

L.control.layers(base_maps, overlayer_maps, { collapsed : false, position : 'topleft' }).addTo(map);