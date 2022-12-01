class ClaseApiFile{

    constructor(){
    }

    seleccionarArchivos(){
        console.log(document.getElementsByTagName("input")[0])
        var nBytes = 0,
            archivos = document.getElementsByTagName("input")[0].files,
            nArchivos = archivos.length;
        console.log(nArchivos);
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        var nombresTiposTamaños="";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<li>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type+"</li>" ;
        }
        
        document.getElementsByTagName("ul")[0].innerHTML = "<li>"+nArchivos+"</li>";
        document.getElementsByTagName("ul")[1].innerHTML = "<li>"+nBytes + " bytes</li>";
        document.getElementsByTagName("ul")[2].innerHTML = nombresTiposTamaños;
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).after(elemento);
    }
    verDatos(idM){
        $("table").remove();
        this.crearElemento("table","","h3");
        var cadena = "<caption> Precios Gasolina </caption>"+
        "<tr>"+
            "<th scope="+"col"+" id="+"fila/col"+">fila/columna </th>"+
            "<th scope="+"col"+ " id="+"direccion"+">Direccion </th>"+
            "<th scope="+"col"+ " id="+"rotulo"+">Rotulo </th>"+
            "<th scope="+"col"+ " id="+"precio"+">Precio </th>"+
        "</tr>";
        $("table").append(cadena);
        this.cargarDatos(idM);

    }
}

var clase = new ClaseApiFile();