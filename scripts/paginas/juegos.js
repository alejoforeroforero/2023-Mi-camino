function pintarJuegos(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'juegos-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-juegos-m.jpg?n=145' : './assets/imgs/header-juegos.jpg?n=145';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCentro = cE("div", divG);
    divCentro.className = 'juegos-centro';

    for(var juego in juegos){

        let divC = cE("div", divCentro);

        adjuntarIrAJuego(divC, juego);        

        let img = cE("img", divC);
        img.src = juegos[juego].img + '?n=145';
    }

    pintarFooter(juegosContenedor, true);
}

function adjuntarIrAJuego(divC, juego){
    divC.addEventListener('click', ()=>{
        window.location.href = juegos[juego].enlace; 
    })
}

function pintarRegresar(contenedor){
    const imgRegresar = cE('img', contenedor);
    imgRegresar.className = 'regresar-juegos';
    imgRegresar.src = './assets/imgs/regresar.png';
    imgRegresar.addEventListener('click', ()=>{
        window.location.href = "#juegos"; 
    })
}

function pintarSalto(){
    juegosContenedor.innerHTML = ""; 

    pintarRegresar(juegosContenedor);

    let iframe = cE("iframe", juegosContenedor);
    iframe.className = 'iframe-salto'
    iframe.src = './iframes/salto/index.html?n=145';  
}

function pintarDiferencias(){
    juegosContenedor.innerHTML = "";

    pintarRegresar(juegosContenedor);

    const divDiferencias = cE("div", juegosContenedor);
    divDiferencias.className = 'diferencias';
    
    let iframe = cE("iframe", divDiferencias);
    iframe.src = './iframes//diferencias/index.html?n=145';  
}

function pintarRompecabezas(){
    juegosContenedor.innerHTML = ""; 

    pintarRegresar(juegosContenedor);

    document.body.style.height = '600px';
    document.body.style.overflow = 'hidden';

    const divRompecabeas = cE('div', juegosContenedor);
    divRompecabeas.className = 'rompecabezas';
    
    let iframe = cE("iframe", divRompecabeas);
    iframe.className = "iframe-rompecabezas";
    iframe.src = './iframes//rompecabezas/index.html?n=145';  
}
