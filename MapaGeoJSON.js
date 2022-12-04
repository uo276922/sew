"use strict";
class ClaseGoogleMapsGeoJSON{

    constructor(){
        
    }

    initMapDinamico(){
        var oviedo = {lat: 43.3672702, lng: -5.8502461};
        var mapaOviedo = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:oviedo});
    }
    

    seleccionarArchivos(){
        var nBytes = 0,
            archivos = document.getElementsByTagName("input")[0].files,
            nArchivos = archivos.length;

        $.ajax({
            dataType:"json" ,
            url: archivos[0].name,
            method: 'GET',
            success: function(datos){

                var oviedo = {lat: 43.3672702, lng: -5.8502461};
                var mapaOviedo = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:oviedo});
                for (var i = 0;i< datos.features.length;i++){
                    var latitud = datos.features[i].geometry.coordinates[1];
                    var longitud =datos.features[i].geometry.coordinates[0];
                    var oviedo = {lat: parseFloat(latitud), lng: parseFloat(longitud)};
                    var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo,title:datos.features[i].properties.name}); 
                }
                    
                },
            error:function(){
                console.log("No se ha podido leer el archivo GeoJSON");
            }
        });
    }

}

var mapaDinamicoGeoJSON = new ClaseGoogleMapsGeoJSON();