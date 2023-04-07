function pintarJuegos(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'juegos-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-juegos-m.jpg?n=142' : './assets/imgs/header-juegos.jpg?n=142';


    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCentro = cE("div", divG);
    divCentro.className = 'juegos-centro';

    for(var juego in juegos){

        let divC = cE("div", divCentro);

        adjuntarIrAJuego(divC, juego);        

        let img = cE("img", divC);
        img.src = juegos[juego].img + '?n=142';
    }

    pintarFooter(juegosContenedor, true);
}

function adjuntarIrAJuego(divC, juego){
    divC.addEventListener('click', ()=>{
        window.location.href = juegos[juego].enlace; 
    })
}

function pintarSalto(){
    juegosContenedor.innerHTML = ""; 

    let iframe = cE("iframe", juegosContenedor);
    iframe.className = 'iframe-salto'
    iframe.src = './iframes/salto/index.html?n=142';  
}

function pintarDiferencias(){
    juegosContenedor.innerHTML = "";

    const divDiferencias = cE("div", juegosContenedor);
    divDiferencias.className = 'diferencias';
    
    let iframe = cE("iframe", divDiferencias);
    iframe.src = './iframes//diferencias/index.html?n=142';  
}

function pintarRompecabezas(){
    juegosContenedor.innerHTML = ""; 

    document.body.style.height = '600px';
    document.body.style.overflow = 'hidden';

    const divRompecabeas = cE('div', juegosContenedor);
    divRompecabeas.className = 'rompecabezas';
    
    let iframe = cE("iframe", divRompecabeas);
    iframe.className = "iframe-rompecabezas";
    iframe.src = './iframes//rompecabezas/index.html?n=142';  
}
