class ClaseJQuery{

    constructor(){
        this.sumaFilas=0;
        this.sumaColumnas=0;
    }

    mostrarTitulos(){
        $('h2').show();
        $('h3').show();
    }
    ocultarTitulos(){
        $('h2').hide();
        $('h3').hide();
    } 

    modificarH2(){
        $("h2:first").text("Titulo cambiado");
    }
    h2Original(){
        $("h2:first").text("Laravel: Una herramienta útil");
    } 
    addH4(){
        $('input:button[value=AñadirH4]').before("<h4> Titulo añadido con JQuery</h4>")
    }
    addP(){
        $('input:button[value=AñadirP]').after("<p>Parrafo añadido con JQuery</p>")
    }

    removeH4(){
        $('h4').remove();
    }

    recorrer(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    contarRC(){
        var nFilas = -1;
        $("table tr").each(function() {
            var celda = $.trim($(this).text());
            nFilas += 1
        });
        var nColumnas = 0;
        var aux = 0;
        $("table tr:last td").each(function() {

            nColumnas += 1
        });
        var total = parseInt(nFilas)+parseInt(nColumnas);
        
        $('input:button[value=ContarRC]').after("<p>  Filas: "+nFilas +" Columnas: "+nColumnas + " Total: "+total+"</p>");
    }
}

var object = new ClaseJQuery();