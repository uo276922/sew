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

var cal = new Calculadora();
cal.teclado();