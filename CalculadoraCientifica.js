class Calculadora{

    constructor(){
        this.pantalla="";
        this.totalAcu=new Number(0.0);
        this.isOperacion=true;
        this.simboloOPeracion="";
        this.isOperacionValidad=false;
    }

    digitos(digito){
        if (this.isOperacion){
            this.isOperacionValidad=true;
            this.pantalla+=new Number(digito);
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }else{
            this.borrar();
            this.isOperacionValidad=true;
            this.isOperacion=true;
            this.pantalla+=new Number(digito);
            document.getElementsByTagName("input")[0].value= this.pantalla;
        }
    }
    suma(){
        if (this.isOperacionValidad== true){
            this.isOperacionValidad=false;
            this.pantalla+="+";
            this.simboloOPeracion="+";
            this.isOperacion=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }
    resta(){
        if (this.isOperacionValidad== true){
            this.isOperacionValidad=false;
            this.isOperacion=true;
            this.simboloOPeracion="-";
            this.pantalla+="-";
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    multiplicación(){
        if (this.isOperacionValidad== true){
            this.isOperacionValidad=false;
            this.isOperacion=true;
            this.simboloOPeracion="*";
            this.pantalla+="*";
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    division(){
        if (this.isOperacionValidad== true){
            this.isOperacionValidad=false;
            this.isOperacion=true;
            this.simboloOPeracion="/";
            this.pantalla+="/";
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }
    igual(){
        if (this.isOperacionValidad){
        var result = eval(this.pantalla);
        if(result == "Infinity"){
            this.isOperacion=false;
            this.simboloOPeracion="";
            this.borrarCE();
        }else if(isNaN(result)){
            this.isOperacion=false;
            this.simboloOPeracion="";
            this.borrarCE();
        }
        else{
            this.pantalla=result;
            this.simboloOPeracion="";
            this.isOperacion=false;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }
    }

    borrar(){
        this.isOperacionValidad=false;
        this.pantalla=""
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    borrarCE(){
        this.isOperacionValidad=false;
        this.pantalla=""
        this.totalAcu=new Number(0);
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    punto(){
        if (this.isOperacionValidad){
            this.isOperacionValidad=false;
            this.pantalla+="."
            this.isOperacion=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    mrc(){
        if(this.isOperacion){
            this.pantalla+=this.totalAcu;
            this.isOperacion=false;
            this.isOperacionValidad=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
            console.log(this.totalAcu);
        }else{
            this.pantalla=this.totalAcu;
            this.isOperacion=false;
            this.isOperacionValidad=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
            console.log(this.totalAcu);
        }
    }

    mMenos(){
        var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
        this.isOperacion=false;
        this.totalAcu= eval(this.totalAcu+"-"+numeroPantalla);
    }

    mMas(){
        var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
        this.isOperacion=false;
        this.totalAcu=eval(numeroPantalla+"+"+this.totalAcu);
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

    porcentaje(){
        if (this.isOperacionValidad== true){
            this.isOperacionValidad=false;
            this.isOperacion=true;
            this.simboloOPeracion="%";
            this.pantalla+="%";
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    raiz(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
                console.log("entra")
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"**(1/2)");
                if(isNaN(numeroPantalla)){
                    this.isOperacion=false;
                    this.simboloOPeracion="";
                    this.borrarCE();
                }else{
                    this.isOperacion=false;
                    this.simboloOPeracion="";
                    this.pantalla=numeroPantalla;
                    document.getElementsByTagName("input")[0].value = this.pantalla;
                }
            
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
                this.multiplicación();
            }
            if(tecla == "C"){
                this.borrar();
            }
            if(tecla == "c"){
                this.borrarCE();
            }
            if (tecla=="Enter"){
                this.igual();
            }
            if (tecla=="r"){
                this.raiz();
            }
            if(tecla=="p"){
                this.porcentaje();
            }
            if(tecla=="a"){
                this.masMenos();
            }
            if(tecla == "m"){
                this.mrc();
            }
            if(tecla== "n"){
                this.mMas();
            }
            if(tecla=="b"){
                this.mMenos();
            }
            
        });
    }


    
}

class CalculadoraCientifica extends Calculadora{

    constructor(){
        super();
        this.parenIzq=new Number(0);
        this.parenDer=new Number(0);
        this.tipoGrado="DEG";
        this.modoTrigoNormal=true;
        this.modoTrigoArco=false;
        this.modoTrigoH=false;
    }

    elevarCuadrado(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            var numeroPantalla = eval(this.pantalla);
            //var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
            this.isOperacion=false;
            numeroPantalla = Math.pow(numeroPantalla,2);
            this.pantalla=numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    igual(){
        if(this.isOperacionValidad){
            var pantalla_aux=this.pantalla.split("^");
            var pantalla_aux2 = this.pantalla.split("e");
            if (pantalla_aux.length == 2){
                var operando1 = eval(pantalla_aux[0]);
                var operando2 = eval(pantalla_aux[1]);
                var result = Math.pow(operando1,operando2);
                
            }else if(pantalla_aux2.length == 2){
                var result = Math.pow(10,pantalla_aux2[1]);
                result = eval(pantalla_aux2[0]+"*"+result)
            }else{
                var result = eval(this.pantalla);
            }
            if(result == "Infinity"){
                this.isOperacion=false;
                this.borrarCE();
            }else if(isNaN(result)){
                this.isOperacion=false;
                this.borrarCE();
            }else{
                console.log(result);
                this.pantalla=result;
                this.isOperacion=false;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }
    }

    elevarAy(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            this.isOperacion=true;
            this.pantalla+="^";
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    diezElevado(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            var numeroPantalla = eval(this.pantalla);
            console.log(numeroPantalla);
            this.isOperacion=false;
            numeroPantalla = Math.pow(10,numeroPantalla);
            this.pantalla=numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    log(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            var numeroPantalla = eval(this.pantalla);
            this.isOperacion=false;
            numeroPantalla = Math.log10(numeroPantalla);
            this.pantalla=numeroPantalla;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    sin(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
        if(this.modoTrigoNormal){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.sin(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.sin(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.sin(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoH){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                //numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.sinh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.sinh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
               // numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.sinh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoArco){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.asin(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+180+"/"+Math.PI+")");
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.asin(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.asin(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+200+"/"+Math.PI+")");
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }
    }
    }

    cos(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
        if (this.modoTrigoNormal){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.cos(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.cos(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.cos(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoH){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                //numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.cosh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.cosh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                //numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.cosh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoArco){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.acos(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+180+"/"+Math.PI+")");
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.acos(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.acos(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+200+"/"+Math.PI+")");
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }
    }
    }

    tan(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
        if (this.modoTrigoNormal){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.tan(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.tan(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.tan(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoH){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                //numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+180+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.tanh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.tanh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                //numeroPantalla = eval(numeroPantalla+"*("+Math.PI+"/"+200+")")
                this.isOperacion=false;
                
                numeroPantalla = Math.tanh(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }else if(this.modoTrigoArco){
            if(this.tipoGrado=="DEG"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.atan(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+180+"/"+Math.PI+")");
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else if(this.tipoGrado=="RAD"){
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.atan(numeroPantalla);
            
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }else{
                var numeroPantalla = eval(this.pantalla);
                this.isOperacion=false;
                
                numeroPantalla = Math.atan(numeroPantalla);
                numeroPantalla = eval(numeroPantalla+"*("+200+"/"+Math.PI+")");
                this.pantalla=numeroPantalla;
                document.getElementsByTagName("input")[0].value = this.pantalla;
            }
        }
    }
    }

    pi(){
        if(this.isOperacion){
            this.pantalla+=Math.PI;
            this.isOperacionValidad=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
            console.log(this.totalAcu);
        }else{
            this.pantalla=Math.PI;
            this.isOperacion=false;
            this.isOperacionValidad=true;
            document.getElementsByTagName("input")[0].value = this.pantalla;
            console.log(this.totalAcu);
        }
    }

    factorial(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            var numeroPantalla = eval(this.pantalla);
            this.isOperacion=false;
            var suma=new Number(1);
            for(var i = numeroPantalla-1;i>0;i--){
                suma+= suma*i;
            }
            this.pantalla=new Number(suma);
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    parentesisIzq(){
        if(this.parenIzq<= this.parenDer){
            this.isOperacion=true;
            this.pantalla+="(";
            this.parenIzq++;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    parentesisDer(){
        if(this.parenIzq> this.parenDer || this.parentesisIzq>0){
            this.isOperacion=true;
            this.pantalla+=")";
            this.parenDer++;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    suprimir(){
        if(this.isOperacion==true){
            this.pantalla=this.pantalla.substring(0,this.pantalla.length-1);
            document.getElementsByTagName("input")[0].value = this.pantalla;
            console.log(this.pantalla.length)
            if (this.pantalla.length>1){
                this.isOperacionValidad=true;
            }
        }
    }

    mc(){
        this.totalAcu=new Number(0.0);
        
    }

    ms(){
        var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
        this.totalAcu=numeroPantalla;
    }

    deg(){
        if (this.tipoGrado=="DEG"){
            this.tipoGrado="RAD";
        }else if(this.tipoGrado=="RAD"){
            this.tipoGrado="GRAD";
        }else{
            this.tipoGrado="DEG";
        }
        document.getElementsByTagName("input")[1].value = this.tipoGrado;
    }

    exp(){
        this.isOperacion=true;
        this.pantalla+="e";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    fe(){
        if(this.pantalla.toString().length && this.isOperacionValidad==true){
            var numeroPantalla = new Number(document.getElementsByTagName("input")[0].value);
            numeroPantalla = numeroPantalla.toExponential();
            this.pantalla=numeroPantalla;
            this.isOperacion=false;
            document.getElementsByTagName("input")[0].value = this.pantalla;
        }
    }

    flechaArriba(){
        if (this.modoTrigoNormal || this.modoTrigoH){
            this.modoTrigoNormal=false;
            this.modoTrigoH=false;this.modoTrigoArco=true;
            document.getElementsByTagName("input")[11].value = "asin";
            document.getElementsByTagName("input")[12].value = "acos";
            document.getElementsByTagName("input")[13].value = "atan";
        }else if(this.modoTrigoArco=true){
            this.modoTrigoNormal=true;
            this.modoTrigoH=false;this.modoTrigoArco=false;
            document.getElementsByTagName("input")[11].value = "sin";
            document.getElementsByTagName("input")[12].value = "cos";
            document.getElementsByTagName("input")[13].value = "tan";
        }
    }

    hyp(){
        if (this.modoTrigoNormal || this.modoTrigoArco){
            this.modoTrigoNormal=false;
            this.modoTrigoH=true;this.modoTrigoArco=false;
            document.getElementsByTagName("input")[11].value = "sinh";
            document.getElementsByTagName("input")[12].value = "cosh";
            document.getElementsByTagName("input")[13].value = "tanh";
        }else if(this.modoTrigoH=true){
            this.modoTrigoNormal=true;
            this.modoTrigoH=false;this.modoTrigoArco=false;
            document.getElementsByTagName("input")[11].value = "sin";
            document.getElementsByTagName("input")[12].value = "cos";
            document.getElementsByTagName("input")[13].value = "tan";
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
                this.multiplicación();
            }
            if(tecla == "C"){
                this.borrar();
            }
            if(tecla == "c"){
                this.borrarCE();
            }
            if (tecla=="Enter"){
                this.igual();
            }
            if (tecla=="r"){
                this.raiz();
            }
            if(tecla=="p"){
                this.porcentaje();
            }
            if(tecla=="a"){
                this.masMenos();
            }
            if(tecla == "m"){
                this.mrc();
            }
            if(tecla== "n"){
                this.mMas();
            }
            if(tecla=="b"){
                this.mMenos();
            }
            if(tecla=="q"){
                this.deg();
            }
            if(tecla=="w"){
                this.hyp();
            }
            if(tecla=="e"){
                this.fe();
            }
            if(tecla=="t"){
                this.mc();
            }
            if(tecla=="y"){
                this.ms();
            }
            if(tecla=="u"){
                this.elevarCuadrado();
            }
            if(tecla=="i"){
                this.elevarAy();
            }
            if(tecla=="o"){
                this.sin();
            }
            if(tecla=="a"){
                this.cos();
            }
            if(tecla=="s"){
                this.tan();
            }
            if(tecla=="d"){
                this.flechaArriba();
            }
            if(tecla=="f"){
                this.diezElevado();
            }
            if(tecla=="g"){
                this.log();
            }
            if(tecla=="h"){
                this.exp();
            }
            if(tecla=="o"){
                this.sin();
            }
            if(tecla=="x"){
                this.suprimir();
            }
            if(tecla=="z"){
                this.pi();
            }
            if(tecla=="v"){
                this.factorial();
            }
            
            
        });
    }


    

}

var cal = new CalculadoraCientifica();
cal.teclado();