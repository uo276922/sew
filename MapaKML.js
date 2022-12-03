"use strict";
class ClaseGoogleMapsKML{

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
            dataType:"xml" ,
            url: "../Tarea-1/"+archivos[0].name,
            method: 'GET',
            success: function(datos){

                    var oviedo = {lat: 43.3672702, lng: -5.8502461};
                    var mapaOviedo = new google.maps.Map(document.getElementsByTagName("main")[0],{zoom: 8,center:oviedo});
                
                    var totalNodos            = $('*',datos).length; // cuenta los elementos de XML: son los nodos del árbol DOM de XML
                    var tamPlacemark                = $('Placemark',datos).length;
                    var arrayPlacemarks = $('Placemark',datos);
                    for(var i = 0;i <tamPlacemark;i++){
                        var placemarkItem = arrayPlacemarks[i];
                        var name11 = $("name",placemarkItem).text();
                        var array = name11.split(" ")
                        if (array[9] == "Residencia"){
                            var point = $("Point",placemarkItem).text()
                            var arrayPoint = point.split(" ");
                            var datosMarcas = arrayPoint[18]
                            var datosMarcas = datosMarcas.split(",")
                            var latitud = datosMarcas[1];
                            var longitud = datosMarcas[0];
                            var oviedo = {lat: parseFloat(latitud), lng: parseFloat(longitud)};
                            var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo}); 
                        }
                    }
                },
            error:function(){
                console.log("No se ha podido leer el archivo kml");
                }
        });
    }

}

var mapaDinamicoKML = new ClaseGoogleMapsKML();