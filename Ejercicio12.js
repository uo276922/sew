class ClaseApiFile{

    constructor(){
    }

    seleccionarArchivos(){
        document.getElementsByTagName("p")[4].innerHTML = "";
        var nBytes = 0,
            archivos = document.getElementsByTagName("input")[0].files,
            nArchivos = archivos.length;
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        var nombresTiposTamaños="";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<li>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type+"</li>" ;
            this.añadirContenido(archivos[i],i);
        }
        
        document.getElementsByTagName("ul")[0].innerHTML = "<li>"+nArchivos+"</li>";
        document.getElementsByTagName("ul")[1].innerHTML = "<li>"+nBytes + " bytes</li>";
        document.getElementsByTagName("ul")[2].innerHTML = nombresTiposTamaños;

        
    }

    añadirContenido(archivo,pos){
        var tipoTexto = /text.xml/;
        var tipoTexto3 = /text.plain/;
        var tipoTexto2 = /application.json/
        var areaVisualizacion = document.getElementsByTagName("p")[4];
        if (archivo.type.match(tipoTexto)|| archivo.type.match(tipoTexto3) || archivo.type.match(tipoTexto2)) 
        {
            var lector = new FileReader();
            
            lector.onload = function (evento) {
                var contenido = lector.result;
                contenido = contenido.replace(/(\r\n|\n|\r)/g,"");
                areaVisualizacion.innerText += "ARCHIVO["+ pos+"] "+contenido+"  ";
                }      
            lector.readAsText(archivo);
            
        }
        else {
            areaVisualizacion.innerText += "Archivo["+pos+ "] Error: no se ha podido leer el archivo"+"  ";
        }
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).after(elemento);
    }
    
}

var clase = new ClaseApiFile();