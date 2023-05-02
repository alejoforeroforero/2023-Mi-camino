function pintarComic(){
    comicContenedor.innerHTML = "";

    let divG = cE("div", comicContenedor);
    divG.className = 'comic-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-comic-m.jpg?n=145' : './assets/imgs/header-comic.jpg?n=145';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCentro = cE("div", divG);
    divCentro.className = 'comic-centro';

    for(var capitulo in capitulos){

        let divC = cE("div", divCentro);

        adjuntarIrACapitulo(divC, capitulo);        

        let img = cE("img", divC);
        img.src = capitulos[capitulo].img + '?n=145';
    }

    pintarFooter(comicContenedor);
}

function adjuntarIrACapitulo(divC, capitulo){
    divC.addEventListener('click', ()=>{
        window.location.href = capitulos[capitulo].enlace; 
    })
}

function pintarCap1(){
    audioManager.indiceDescarga = 0;
    audioManager.descargarSonidos('cap1'); 
    const div = cE("div", cap1Contenedor);
    capitulo1Componente(div);
}

function pintarCap2(){
    audioManager.indiceDescarga = 0;
    audioManager.descargarSonidos('cap2'); 
    
    const div = cE("div", cap2Contenedor);
    capitulo2Componente(div);  
}

function pintarRisaralda(){
    const div = cE("div", risaraldaContenedor);
    audioManager.descargarSonidos('risaralda'); 
    risaraldaVinetas(div);
}

function pintarCafetal(){
    const div = cE("div", cafetalContenedor);
    audioManager.descargarSonidos('cafetal'); 
    cafetalVinetas(div);
}

function pintarCasa(){
    const div = cE("div", casaContenedor);
    audioManager.descargarSonidos('casa'); 
    casaVinetas(div);
}

function pintarCap3(){
    audioManager.indiceDescarga = 0;
    audioManager.descargarSonidos('cap3'); 
    
    const div = cE("div", cap3Contenedor);
    capitulo3Componente(div);  
}

function pintarDefender(){
    audioManager.indiceDescarga = 0;
    audioManager.descargarSonidos('defender'); 
    
    const div = cE("div", defenderContenedor);
    defenderVinetas(div);  
}

function pintarDialogar(){
    audioManager.indiceDescarga = 0;
    audioManager.descargarSonidos('dialogar'); 
    
    const div = cE("div", dialogarContenedor);
    dialogarVinetas(div);  
}