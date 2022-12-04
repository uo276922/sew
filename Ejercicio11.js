"use strict";
class GeoGogleMaps {
    constructor (){
        
    }

    initMapDinamico(){
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var mapaOviedo = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:oviedo});
        var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
    }

    modifcarMap(){
        var latitud = parseFloat(document.getElementsByTagName("input")[0].value);
        var longitud = parseFloat(document.getElementsByTagName("input")[1].value);
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var oviedo = {lat: latitud, lng: longitud};
        var mapaOviedo = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:oviedo});
        var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});

        
    }
}
var mapaDinamicoGoogle = new GeoGogleMaps();