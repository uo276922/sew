class ClaseJQuery{

    constructor(){
        this.url = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/";
        this.correcto = "¡Todo correcto! JSON recibido de sedeaplicaciones.minetur.gob.es</a>"
    }

    cargarDatos(idM){
        this.url = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/"+idM;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    //$("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                
                    //Presentación de los datos contenidos en JSON
                for(var i = 0; i < datos.ListaEESSPrecio.length;i++){
                    var cadena ="<tr>"+
                        "<th scope="+"row"+" id="+i+" headers="+"fila/col"+">"+i+"</th>"+
                        "<td headers="+"direccion"+">"+datos.ListaEESSPrecio[i].Dirección+" </td>"+
                        "<td headers="+"rotulo"+">"+datos.ListaEESSPrecio[i].Rótulo+" </td>";
                    if (datos.ListaEESSPrecio[i]["Precio Gasolina 95 E5"].length == 0){   
                        cadena+="<td headers="+"precio"+">"+"Sin definir"+" </td>";
                    }else{
                        cadena+="<td headers="+"precio"+">"+datos.ListaEESSPrecio[i]["Precio Gasolina 95 E5"]+" </td>";
                    }
                    cadena+="</tr>";
                    $("table").append(cadena);
                }
                    
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de sedeaplicaciones.minetur.gob.es"); 
                $("table").remove();
                }
        });
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

var object = new ClaseJQuery();
