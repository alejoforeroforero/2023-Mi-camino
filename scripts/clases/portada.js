class Portada{

    imgs = [];
    id;
    nImagenes;
    indiceDescarga = 0;
    contador = 0;
    parentEl;
    path;
    loadingEl;
    despuesFx;

    ponerLoadingIcon(){
        let height = (window.innerWidth*144)/100;

        if(window.innerWidth > 600){
            height = 600*144/100;
        }

        this.divPC = cE("div", this.parentEl);
        this.divPC.className = 'portada-contenedor-general';
        //this.divPC.style.height = height + 'px';

        this.divIP = cE("div", this.divPC);
        this.divIP.className = 'portada-contenedor';

        this.loadingEl = cE('div', this.divIP);
        this.loadingEl.className = 'vineta-loading';

        this.porcentaje = cE('div', this.loadingEl);
        this.porcentaje.innerHTML = 'Descargando imágenes <br>0%';

        const loadingImg = cE('img', this.loadingEl);
        loadingImg.src = './assets/imgs/loading-image.gif';
    }

    ponerImagenes = async()=>{ 
         
        for(let i=0; i<this.nImagenes; i++){            
            let response = await fetch(`${this.path}a${i}.png?n=142`);            
            this.indiceDescarga++;
            let porcentaje = Math.floor((this.indiceDescarga*100)/this.nImagenes);
            this.porcentaje.innerHTML = 'Descargando imágenes <br>' + porcentaje + '%';            
        }

        for(let i=0; i<this.nImagenes; i++){
            const img = cE('img', this.divIP);
            img.className = "portada-imgs";
            img.id = `${this.id}-${i}`;
            img.src = `${this.path}a${i}.png?n=142`;
        }

        setTimeout(()=>{
            this.alDescargarTodo();
        }, 2000);        
    }

    alDescargarTodo = ()=>{
        this.loadingEl.style.opacity = 0;

        this.despuesFx();
    }
}