class Calculadora{

    constructor(){
        this.pantalla="";
        this.totalAcu=new Number(0.0);
    }

    digitos(digito){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        if (numeroPantalla == this.totalAcu){
            this.pantalla=new Number(digito);
            document.getElementById("pantalla").value = this.pantalla;
        }else{
            this.pantalla+=new Number(digito);
            document.getElementById("pantalla").value = this.pantalla;
        }
        
    }
    suma(){
        this.pantalla+="+";
        document.getElementById("pantalla").value = this.pantalla;
    }
    resta(){
        this.pantalla+="-";
        document.getElementById("pantalla").value = this.pantalla;
    }

    multiplicación(){
        this.pantalla+="*";
        document.getElementById("pantalla").value = this.pantalla;
    }

    division(){
        this.pantalla+="/";
        document.getElementById("pantalla").value = this.pantalla;
    }
    igual(){
        this.totalAcu= eval(this.pantalla);
        document.getElementById("pantalla").value = this.totalAcu;
        this.pantalla=this.totalAcu;
    }

    borrar(){
        this.pantalla=""
        this.totalAcu=new Number(0);
        document.getElementById("pantalla").value = this.pantalla;
    }

    punto(){
        this.pantalla+="."
        document.getElementById("pantalla").value = this.pantalla;
    }

    mrc(){
        this.pantalla=this.totalAcu;
        document.getElementById("pantalla").value = this.pantalla;
        console.log(this.totalAcu);
    }

    mMenos(){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        this.totalAcu= eval(this.totalAcu+"-"+numeroPantalla);
    }

    mMas(){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        this.totalAc0=eval(numeroPantalla+"+"+this.totalAcu);
    }

    masMenos(){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        if (numeroPantalla > 0){
            this.pantalla="-"+numeroPantalla;
            document.getElementById("pantalla").value = this.pantalla;
        }else if (numeroPantalla<0){
            numeroPantalla=eval(numeroPantalla+"*"+"-1");
            this.pantalla=numeroPantalla;
            document.getElementById("pantalla").value = this.pantalla;
        }else{
            this.pantalla=numeroPantalla;
            document.getElementById("pantalla").value = this.pantalla;
        }
    }

    porcentaje(){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        numeroPantalla = eval(numeroPantalla+"**(1/2)");
        
        this.pantalla=numeroPantalla;
        this.totalAcu=numeroPantalla;
        document.getElementById("pantalla").value = this.pantalla;
    }

    raiz(){
        var numeroPantalla = new Number(document.getElementById("pantalla").value);
        numeroPantalla = eval(numeroPantalla+"**(1/2)");
        
        this.pantalla=numeroPantalla;
        this.totalAcu=numeroPantalla;
        document.getElementById("pantalla").value = this.pantalla;
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
            if (tecla=="Enter"){
                this.igual();
            }
            
        });
    }


    
}

var cal = new Calculadora();
cal.teclado();