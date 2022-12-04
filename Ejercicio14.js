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
        document.getElementsByTagName("input")[0].disabled = true;
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).after(elemento);
    }
    verOpciones(){
        document.getElementsByTagName("input")[2].disabled = false;
        document.getElementsByTagName("input")[3].disabled = false;
        this.crearElemento("p","Para dibujar las figuras se selecciona una en el formulario y se pulsa el botón Dibujar Figura",
        document.getElementsByTagName("input")[1])
        this.crearElemento("fieldset","",document.getElementsByTagName("input")[1]); 
        $("fieldset").append("<legend>"+"Figuras a dibujar"+"</legend>"); 
        var texto = $("p")[1].innerHTML
        var textoArray = texto.split(",")
        for(var i = 0;i< textoArray.length;i++){
            $("fieldset").append("<label"+" for="+"fig"+i+">"+[textoArray[i]]+"</label>"); 
            var value = textoArray[i].split(" ").join("");
            $("fieldset").append("<input"+" id="+"fig"+i+" type="+"radio"+" value="+value+" name="+"cono"+">"+"</input>"); 
        }
        document.getElementsByTagName("input")[1].disabled = true;
       
    }

    dibujar(){
        var canvas = document.getElementsByTagName('canvas')[0];
		var canvas1 = canvas.getContext('2d');
        if (document.getElementsByTagName("input")[3].checked){
            canvas1.clearRect(0,0,200,200)
            canvas1.fillStyle = "rgba(0, 0, 255, 1)";
		    canvas1.fillRect(30, 30, 60, 60);
        }
        if (document.getElementsByTagName("input")[2].checked){
            canvas1.clearRect(0,0,200,200)
            canvas1.beginPath();
            canvas1.fillStyle = "rgba(255, 0, 0, 1)";
            canvas1.moveTo(25, 25);
            canvas1.lineTo(105, 25);
            canvas1.lineTo(25, 105);
            canvas1.fill();
        }
        if (document.getElementsByTagName("input")[4].checked){
            canvas1.clearRect(0,0,200,200)
		    canvas1.beginPath();
            canvas1.fillStyle = "rgba(253, 233, 0, 1)"
		    canvas1.arc(60, 60, 50, 0, Math.PI * 2, true);
            canvas1.closePath();
		    canvas1.stroke();
            canvas1.fill();
        }
        if (document.getElementsByTagName("input")[5].checked){
            canvas1.clearRect(0,0,500,500)
            canvas1.font = 'italic 2em sans-serif';
            canvas1.strokeStyle = "rgba(255, 0, 0, 1)";
            canvas1.strokeText("¡Ejercicio 14!", 13, 50);
        }

    }

    pantallaCompleta(){
        var canvas = document.getElementsByTagName("canvas")[0];
        if (canvas.requestFullscreen){
            canvas.requestFullscreen();
        }
    }

}

var cCanvas = new ClaseCanvas();