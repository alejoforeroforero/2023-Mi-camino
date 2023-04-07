let ponerTrailer = true;
let entrando = true;
let nombrePagina;
let pBottom = 45;
let timeLines = [];
let audioManager = null;
let homeContenedor;
let yaPintoHome = false;
let comicContenedor;
let juegosContenedor;
let cap1Contenedor;
let yaPintoCap1 = false;
let cap2Contenedor;
let yaPintoCap2 = false;
let risaraldaContenedor;
let yaPintoRisaralda = false;
let cafetalContenedor;
let yaPintoCafetal = false;
let casaContenedor;
let yaPintoCasa = false;
let cap3Contenedor;
let yaPintoCap3 = false;
let defenderContenedor;
let yaPintoDefender = false;
let dialogarContenedor;
let yaPintoDialogar = false;

function correr(){

    window.scrollTo(0, 0); 

    const contenedorM = cE("div", document.body);
    contenedorM.className = "contenedorM"; 

    pintarHeader(contenedorM);

    const contenedor = cE("div", document.body);
    contenedor.className = "contenedor"; 

    homeContenedor = cE("div", contenedor);
    homeContenedor.className = 'seccionContenedor';

    comicContenedor = cE("div", contenedor);
    comicContenedor.className = 'seccionContenedor';

    juegosContenedor = cE("div", contenedor);
    juegosContenedor.className = 'seccionContenedor';

    cap1Contenedor = cE("div", contenedor);
    cap1Contenedor.className = 'seccionContenedor';

    risaraldaContenedor = cE('div', contenedor);
    risaraldaContenedor.className = 'seccionContenedor';

    cafetalContenedor = cE('div', contenedor);
    cafetalContenedor.className = 'seccionContenedor';

    casaContenedor = cE('div', contenedor);
    casaContenedor.className = 'seccionContenedor';

    cap2Contenedor = cE("div", contenedor);
    cap2Contenedor.className = 'seccionContenedor';

    cap3Contenedor = cE("div", contenedor);
    cap3Contenedor.className = 'seccionContenedor';

    defenderContenedor = cE("div", contenedor);
    defenderContenedor.className = 'seccionContenedor';

    dialogarContenedor = cE("div", contenedor);
    dialogarContenedor.className = 'seccionContenedor';

    if(!audioManager){
        audioManager = new AudioManager();
        audioManager.context = new AudioContext();
        audioManager.indiceDescarga = 0;
        audioManager.descargarSonidos('base');  
    }

    audioManager.pintarIcono();

    if(entrando && ponerTrailer){
        pintarTrailer();
        entrando = false;
    }

    escogerSeccion();
}

function escogerSeccion(){
    
    window.setTimeout(()=>{
        irArriba();
    }, 10); 

    document.body.style.height = 'auto'
    document.body.style.overflow = 'visible';
    
    nombrePagina = location.hash;

    homeContenedor.style.zIndex = 1;
    homeContenedor.style.opacity = 0;

    comicContenedor.style.zIndex = 1;
    comicContenedor.style.opacity = 0;

    juegosContenedor.style.zIndex = 1;
    juegosContenedor.style.opacity = 0;

    cap1Contenedor.style.zIndex = 1;
    cap1Contenedor.style.opacity = 0;

    cap2Contenedor.style.zIndex = 1;
    cap2Contenedor.style.opacity = 0;

    risaraldaContenedor.style.zIndex = 1;
    risaraldaContenedor.style.opacity = 0;

    cafetalContenedor.style.zIndex = 1;
    cafetalContenedor.style.opacity = 0;

    casaContenedor.style.zIndex = 1;
    casaContenedor.style.opacity = 0;

    homeContenedor.style.opacity = 0;    
    homeContenedor.style.opacity = 0;

    cap3Contenedor.style.zIndex = 1;
    cap3Contenedor.style.opacity = 0;

    defenderContenedor.style.zIndex = 1;
    defenderContenedor.style.opacity = 0;

    dialogarContenedor.style.zIndex = 1;
    dialogarContenedor.style.opacity = 0;

    if(nombrePagina === '#capitulo1'){
        cap1Contenedor.style.zIndex = 2;
        cap1Contenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';
        if(!entrando){
            if(!audioManager.apagoElAudio){
                audioManager.sonidoActivo = true;
                audioManager.playSonido(audioManager.audiosBase.c1V0Portada.buffer);
            }            
        }        
       
        if(!yaPintoCap1){      
            pintarCap1();
            yaPintoCap1 = true;
        }
         
    }else if(nombrePagina === '#capitulo2'){
        cap2Contenedor.style.zIndex = 2;
        cap2Contenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoCap2){      
            pintarCap2();
            yaPintoCap2 = true;
        }  
    }else if(nombrePagina === '#risaralda'){
        risaraldaContenedor.style.zIndex = 2;
        risaraldaContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';
        audioManager.pararAudios();

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoRisaralda){      
            pintarRisaralda();
            yaPintoRisaralda = true;
        }  
    }else if(nombrePagina === '#cafetal'){
        cafetalContenedor.style.zIndex = 2;
        cafetalContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';
        audioManager.pararAudios();

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoCafetal){      
            pintarCafetal();
            yaPintoCafetal = true;
        }  
    }else if(nombrePagina === '#casa'){
        casaContenedor.style.zIndex = 2;
        casaContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';
        audioManager.pararAudios();

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoCasa){      
            pintarCasa();
            yaPintoCasa = true;
        }  
    }else if(nombrePagina === '#capitulo3'){
        cap3Contenedor.style.zIndex = 2;
        cap3Contenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoCap3){      
            pintarCap3();
            yaPintoCap3 = true;
        }  
    }else if(nombrePagina === '#defender'){
        defenderContenedor.style.zIndex = 2;
        defenderContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoDefender){      
            pintarDefender();
            yaPintoDefender = true;
        }  
    }else if(nombrePagina === '#dialogar'){
        dialogarContenedor.style.zIndex = 2;
        dialogarContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'visible';

        if(!entrando){
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c2V1ArbolMistico.buffer);
        } 

        if(!yaPintoDialogar){      
            pintarDialogar();
            yaPintoDialogar = true;
        }  
    }else if(nombrePagina === '#comic'){
        audioManager.indiceDescarga = 0;
        audioManager.descargarSonidos('cap1'); 
        audioManager.pararAudios();
        comicContenedor.style.zIndex = 2;
        comicContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarComic();
    }else if(nombrePagina === '#juegos'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarJuegos();
    }else if(nombrePagina === '#salto'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden'; 
        pintarSalto();
    }else if(nombrePagina === '#diferencias'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarDiferencias();
    }else if(nombrePagina === '#rompecabezas'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarRompecabezas();
    }else if(nombrePagina === '#actividades'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarActividades();
    }else if(nombrePagina === '#about'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarAbout();
    }else if(nombrePagina === '#creditos'){
        audioManager.pararAudios();
        juegosContenedor.style.zIndex = 2;
        juegosContenedor.style.opacity = 1; 
        audioManager.icono.style.visibility = 'hidden';  
        pintarCreditos();
    }else{
        audioManager.pararAudios();
        homeContenedor.style.zIndex = 2;
        homeContenedor.style.opacity = 1;
        audioManager.icono.style.visibility = 'hidden';
        if(!yaPintoHome){
            pintarHome();
            yaPintoHome = true;
        }     
    } 
}

function irArriba(){

    //window.scroll(0, 0);
    if(window.scrollY > 0){
        let valor = window.scrollY - 55;
        window.scroll(0, valor);

        window.setTimeout(()=>{
            irArriba()
        }, 1);
    }
}





