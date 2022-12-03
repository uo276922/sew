"use strict";
class ClaseCanvas{

    constructor(){
        
    }

    seleccionarArchivos(){
        var nBytes = 0,
            archivos = document.getElementsByTagName("input")[0].files,
            nArchivos = archivos.length;
        var archivo = archivos[0];
        var tipoTexto = /text.*/;
        var areaVisualizacion = document.getElementsByTagName("p")[1];
        var texto="";
        if (archivo.type.match(tipoTexto)) 
        {
            var lector = new FileReader();
            
            lector.onload = function (evento) {
                areaVisualizacion.innerText +=lector.result;
                texto+=lector.result;
                }      
            lector.readAsText(archivo);
            
        }
        else {
            areaVisualizacion.innerText += "Error: no se ha podido leer el archivo"+"\n\n"
        }
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).after(elemento);
    }
    verOpciones(){
        this.crearElemento("fieldset","",document.getElementsByTagName("input")[1]); 
        $("fieldset").append("<legend>"+"Figuras a dibujar"+"</legend>"); 
        var texto = $("p")[1].innerHTML
        var textoArray = texto.split(",")
        for(var i = 0;i< textoArray.length;i++){
            $("fieldset").append("<label"+" for="+"fig"+i+">"+[textoArray[i]]+"</label>"); 
            var value = textoArray[i].split(" ").join("");
            $("fieldset").append("<input"+" id="+"fig"+i+" type="+"radio"+" value="+value+" name="+"cono"+">"+"</input>"); 
        }
    }

}

var cCanvas = new ClaseCanvas();