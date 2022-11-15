class CalculadoraRPN{

    constructor(){
        this.pantalla="";
        this.pantallaGrande="";
        this.pila = new Array();
        this.num1=new Number(0.0);
        this.num2=new Number(0.0);
        this.tipoOperacion="normal";
    }

    digitos(digito){
            this.pantalla+=new Number(digito);
            document.getElementsByTagName("input")[0].value = this.pantalla;
        
    }

    apilar(valor){
        this.pila.push(valor);
    }

    desapilar(){
        return (this.pila.pop());
    }

    mostrar(){
        var cadena = "";
        var pos = new Number(this.pila.length);
        for(var i = 0; i <this.pila.length;i++){
            
            cadena+=pos+": "+this.pila[i].toString()+"\n";
            pos--;
        }
        this.pantallaGrande=cadena;
        document.getElementsByTagName("textarea")[0].value = this.pantallaGrande;
    }

    shift(){
        if (this.tipoOperacion=="normal"){
            document.getElementsByTagName("input")[2].value = "asin";
            document.getElementsByTagName("input")[3].value = "acos";
            document.getElementsByTagName("input")[4].value = "atan";
            this.tipoOperacion="arco"
        }else if(this.tipoOperacion=="arco"){
            document.getElementsByTagName("input")[2].value = "sin";
            document.getElementsByTagName("input")[3].value = "cos";
            document.getElementsByTagName("input")[4].value = "tan";
            this.tipoOperacion="normal"
        }
    }


    enter(){
        if (this.pantalla != ""){
            var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
            if (isNaN(numeroPantalla)){
                this.borrarCE();
            }
            this.apilar(numeroPantalla);
            this.pantalla="";
            document.getElementsByTagName("input")[0].value = this.pantalla;
            this.mostrar();
        }

    }

    suma(){
        if(this.pila.length >1){
            this.num1=this.desapilar();
            this.num2=this.desapilar();
            var result = this.num1+this.num2;
            this.apilar(result);
            this.mostrar();
        }

    }

    sin(){
        console.log("result");
        if(this.pila.length >0){
            if (this.tipoOperacion=="normal"){
                this.num1=this.desapilar();
                var result = Math.sin(this.num1);
                
                this.apilar(result);
                this.mostrar();
            }else{
                this.num1=this.desapilar();
                var result = Math.asin(this.num1);
                this.apilar(result);
                this.mostrar();
            }
        }

    }

    cos(){
        if(this.pila.length >0){
            if (this.tipoOperacion=="normal"){
                this.num1=this.desapilar();
                var result = Math.cos(this.num1);
                this.apilar(result);
                this.mostrar();
            }else{
                this.num1=this.desapilar();
                var result = Math.acos(this.num1);
                this.apilar(result);
                this.mostrar();
            }
        }

    }

    tan(){
        if(this.pila.length >0){
            if (this.tipoOperacion=="normal"){
                this.num1=this.desapilar();
                var result = Math.tan(this.num1);
                this.apilar(result);
                this.mostrar();
            }else{
                this.num1=this.desapilar();
                var result = Math.atan(this.num1);
                this.apilar(result);
                this.mostrar();
            }
        }

    }
    resta(){
        if(this.pila.length >1){
            this.num1=this.desapilar();
            this.num2=this.desapilar();
            var result = this.num2-this.num1;
            this.apilar(result);
            this.mostrar();
        }

    }

    multiplicacion(){
        if(this.pila.length >1){
            this.num1=this.desapilar();
            this.num2=this.desapilar();
            var result = this.num1*this.num2;
            this.apilar(result);
            this.mostrar();
        }

    }

    division(){
        if(this.pila.length >1){
            this.num1=this.desapilar();
            this.num2=this.desapilar();
            var result = this.num2/this.num1;
            this.apilar(result);
            this.mostrar();
        }

    }
        
    borrarCE(){
        this.pantalla=""
        document.getElementsByTagName("input")[0].value = this.pantalla;
        this.pila = new Array();
        this.mostrar();
    }

    punto(){
        this.pantalla+="."
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    masMenos(){
        var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
        if (numeroPantalla > 0){
            this.pantalla="-"+numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }else if (numeroPantalla<0){
            numeroPantalla=eval(numeroPantalla+"*"+"-1");
            this.pantalla=numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }else{
            this.pantalla=numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    teclado(){
        document.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            if (tecla == '0' || tecla == "1" || tecla=="2" | tecla=="3" || tecla=="4" || tecla=="5" || tecla=="6"
            || tecla=="7" || tecla=="8" || tecla=="9"){
                this.digitos(tecla);
            }
            if(tecla=="."){
                this.punto();
            }
            if(tecla=="+"){
                this.suma();
            }
            if(tecla=="-"){
                this.resta();
            }
            if(tecla=="/"){
                this.division();
            }
            if(tecla=="*"){
                this.multiplicacion();
            }
            if(tecla == "c"){
                this.borrarCE();
            }
            if (tecla=="Enter"){
                this.enter();
            }
            if (tecla=="s"){
                this.sin();
            }
            if (tecla=="o"){
                this.cos();
            }
            if (tecla=="t"){
                this.tan();
            }
            if (tecla=="h"){
                this.shift();
            }
            
        });
    }    
}

class CalculadoraEspecializada extends CalculadoraRPN{


    constructor(){
        super();
        this.num3=new Number(0.0);
        this.num4=new Number(0.0);
    }


    distance(){
        if (this.pila.length >3){
            //Formula Haversine
            this.num4=this.desapilar();
            this.num3=this.desapilar();
            this.num2=this.desapilar();
            this.num1=this.desapilar();

            console.log(this.num1);
            console.log(this.num2);
            console.log(this.num3);
            console.log(this.num4);

            var diferenciaLat = this.num3-this.num1;
            var diferenciaLon = this.num4-this.num2;

            var latitudOrigenRadianes = this.num1 * (Math.PI/180);
            var latitudDestinoRadianes = this.num3 * (Math.PI/180);
            var diferenciaLatRadianes = diferenciaLat * (Math.PI/180);
            var diferenciaLonRadianes = diferenciaLon * (Math.PI/180);

            var a = Math.pow(Math.sin(diferenciaLatRadianes/2),2)+(Math.cos(latitudOrigenRadianes)*Math.cos(latitudDestinoRadianes)*
                Math.pow(Math.sin(diferenciaLonRadianes/2),2));
            var c = a*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
            var result = new Number(6378) * c;

            this.apilar(result);
            this.mostrar();

        }


    }

    conversor(){
        //Coordenadas en formato GG MM SS N - GG MM SS W
        if (this.pila.length >3){
            this.num4=this.desapilar();
            this.num3=this.desapilar();
            this.num2=this.desapilar();
            this.num1=this.desapilar();

            var minSegLista1 = this.num2.toString().split(".");
            var minSegLista2 = this.num4.toString().split(".");

            var decimales1 = minSegLista1[1].length;
            var decimales2 = minSegLista2[1].length;

            this.num2 =(this.num2*Math.pow(10,decimales1))/6;
            this.num4 =(this.num2*Math.pow(10,decimales2))/6;

            var num2Decimales = this.num2.toString().split(".");
            var num4Decimales = this.num4.toString().split(".");
            var result1 = this.num1+"."+num2Decimales[0];
            var result2 = "-"+this.num3+"."+num4Decimales[0];

            this.apilar(new Number(result1));
            this.apilar(new Number(result2));
            this.mostrar();
        }
    }

    teclado(){
        document.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            if (tecla == '0' || tecla == "1" || tecla=="2" | tecla=="3" || tecla=="4" || tecla=="5" || tecla=="6"
            || tecla=="7" || tecla=="8" || tecla=="9"){
                this.digitos(tecla);
            }
            if(tecla=="."){
                this.punto();
            }
            if(tecla=="+"){
                this.suma();
            }
            if(tecla=="-"){
                this.resta();
            }
            if(tecla=="/"){
                this.division();
            }
            if(tecla=="*"){
                this.multiplicacion();
            }
            if(tecla == "c"){
                this.borrarCE();
            }
            if (tecla=="Enter"){
                this.enter();
            }
            if (tecla=="s"){
                this.sin();
            }
            if (tecla=="o"){
                this.cos();
            }
            if (tecla=="t"){
                this.tan();
            }
            if (tecla=="h"){
                this.shift();
            }
            
            if (tecla=="a"){
                this.distance();
            }
            if (tecla=="q"){
                this.conversor();
            }
        });
    }

}

var cal = new CalculadoraEspecializada();
cal.teclado();