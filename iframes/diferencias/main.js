let divG;
let diferencias;

function correr(){

    document.body.innerHTML = "";

    divG = cE("div", document.body);

    diferencias = new Diferencias(divG);
    diferencias.img1Src = 'imgs/img1.jpg';
    diferencias.img2Src = 'imgs/img2.jpg';
    diferencias.pintar();
}

function cE(el, parentEl){
    let elemento = document.createElement(el);
    parentEl.appendChild(elemento);

    return elemento;
}

class Diferencias{

    parentEl;
    img1Src;
    img2Src;
    img1;
    img2;
    divI1;
    divI2;
    cuadros1 = {};
    cuadros2 = {};
    contador = 0;
    contadorDiv;
    tiempoDiv;
    tiempo = 0;
    tiempoFormato;
    segundosPopup;
    puntosSeleccionados = [];
    intervalo;
    finalPopup;

    constructor(parentEl){

        this.intervalo = window.setInterval(()=>this.sumar(), 1000);

        let titulo = cE("h1", parentEl);
        titulo.innerHTML = "Encuentra las diferencias";

        this.segundosPopup = cE("div", parentEl);
        this.segundosPopup.className = 'segundos-popup';
        this.segundosPopup.innerHTML = '+10';

        this.finalPopup = cE("div", parentEl);
        this.finalPopup.className = 'final-popup';

        this.parentEl = cE("div", parentEl);
        this.parentEl.className = "parentEl";        
    }

    sumar(){

        this.tiempo++;

        let tiempoObj = new Date(this.tiempo*1000);

        let segundos = (tiempoObj.getSeconds()<10)?"0"+tiempoObj.getSeconds():tiempoObj.getSeconds();
        let minutos = (tiempoObj.getMinutes()<10)?"0"+tiempoObj.getMinutes():tiempoObj.getMinutes();

        this.tiempoFormato = `${minutos}:${segundos}`;

        this.tiempoDiv.innerHTML = this.tiempoFormato;
    }

    pintar(){

        let div1 = cE("div", this.parentEl);

        this.img1 = cE("img", div1);
        this.img1.src = this.img1Src;

        this.divI1 = cE("div", div1);
        this.divI1.className = "div-over";

        let divC = cE("div", this.parentEl);

        this.tiempoDiv = cE("h2", divC);
        this.tiempoDiv.innerHTML = this.tiempo;

        this.contadorDiv = cE("p", divC);
        this.contadorDiv.innerHTML = `${this.contador} de 8`; 

        let div2 = cE("div", this.parentEl);       

        this.img2 = cE("img", div2);
        this.img2.src = this.img2Src; 

        this.divI2 = cE("div", div2);
        this.divI2.className = "div-over";

        this.dibujarFondo(this.divI1, 1);
        this.dibujarFondo(this.divI2, 2);
        //this.dibujarCuadricula(this.divI2, 2);

        this.dibujarPuntos(this.divI1, 1);
        this.dibujarPuntos(this.divI2, 2);
    }

    dibujarPuntos(divC, cN){

        for(let i=0; i<8; i++){

            var div = cE("div", divC);
            div.id = `${cN}-${i}`;
            div.className = 'puntos ' + `punto${i}`; 
            
            this.adjuntarDiferencia(div, i, cN);
        }    
    }

    dibujarFondo(divC, cN){

        let thisObj = this;

        var div = cE("div", divC);
        div.className = 'cuadro';  

        div.addEventListener('click', (e)=>{

            this.tiempo += 10;
            this.segundosPopup.style.left = e.clientX - 20 + 'px';
            this.segundosPopup.style.top = e.clientY - 60 + 'px';
            this.segundosPopup.classList.add('animar');

            setTimeout(()=>{
                this.segundosPopup.classList.remove('animar');
            }, 1000);
        });
    }

    adjuntarDiferencia(div, i, cN){
  
        div.addEventListener("click", ()=>{

            if(div.style.backgroundColor != 'red'){
                div.style.backgroundColor = 'red';

                if(cN > 1){
                    let otroDiv = document.getElementById(`1-${i}`);
                    otroDiv.style.backgroundColor = 'red';
                }else{
                    let otroDiv = document.getElementById(`2-${i}`);
                    otroDiv.style.backgroundColor = 'red';
                }

                this.contador++;

                if(this.contador >7){
                    window.clearInterval(this.intervalo);
                    this.pintarFinal();                    
                }

                this.contadorDiv.innerHTML = `${this.contador} de 8`; 
            } 
            
        })
    }

    pintarFinal(){

        this.finalPopup.style.opacity = 1;
        this.finalPopup.style.zIndex = 20;


        let p = cE("p", this.finalPopup);
        p.innerHTML = `Tardaste ${this.tiempoFormato}`

        let div = cE("div", this.finalPopup);

        let span = cE("span", div);
        span.innerHTML = "Cerrar";
        span.addEventListener('click', ()=>{
            correr();
        })
    }
  
}