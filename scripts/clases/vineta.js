class Vineta{
    imgsSrc = [];
    imgs = [];
    imgsDom = [];
    nImagenes;
    contador = 0;
    parentEl;
    loadingEl;
    despuesFx;

    ponerLoadingIcon(){
        this.loadingEl = cE('div', this.parentEl);
        this.loadingEl.className = 'vineta-loading';

        const loadingImg = cE('img', this.loadingEl);
        loadingImg.src = './assets/imgs/loading-image.gif';
    }

    adjuntaImagen = (path, className)=>{
        const imgObj = {
            path,
            className
        }
        this.imgsSrc.push(imgObj);
    }

    ponerImagenes = ()=>{    
        for(let imgObj of this.imgsSrc){
            const img = cE('img', this.parentEl);
            img.className = imgObj.className;
            img.style.visibility = 'hidden';
            img.id = imgObj.className;
            img.src = imgObj.path + '?n=142';
    
            if(img){
                if(!img.complete){
                    this.imgs.push(img);
                }
            } 
            this.imgsDom.push(img);
        }
        this.revisarEstadoDeDescarga();
    }

    revisarEstadoDeDescarga = ()=>{
        if(this.imgs.length > 0){
            for(const img of this.imgs){
                img.addEventListener('load', ()=>{
                    this.contador++;
                    let porcentageN = 100*this.contador/this.imgs.length;

                    if(this.contador === this.imgs.length || porcentageN > 99){
                        this.alDescargarTodo();
                    } 
                })
            }
        }else{
            this.alDescargarTodo();
        } 
    }

    alDescargarTodo = ()=>{

        for(const img of this.imgsDom){
            img.style.visibility = 'visible';
        }

        this.loadingEl.style.display = 'none';

        this.despuesFx(); 
    }
}