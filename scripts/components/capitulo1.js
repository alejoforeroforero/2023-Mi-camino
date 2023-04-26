
let portada1Contador = 0;
let capitulo1VinetasContenedor;

function capitulo1Componente(contenedor){

    const div1 = cE("div", contenedor);

    const div2 = cE("div", contenedor);

    capitulo1VinetasContenedor = cE("div", div2);
    capitulo1VinetasContenedor.id = 'capitulo1VinetasContenedor';
    capitulo1VinetasContenedor.className = 'vineta-contenedor';
    capitulo1VinetasContenedor.innerHTML = "";

    capitulo1Portada(div1);  
}

function capitulo1Portada(contenedor){

    const portadaP1 = new Portada();
    portadaP1.id = 'p1';
    portadaP1.nImagenes = 48;
    portadaP1.path = './assets/cap1/imgs/';
    portadaP1.parentEl = contenedor;
    portadaP1.despuesFx = portada1Tl;
    portadaP1.ponerLoadingIcon();
    portadaP1.ponerImagenes();
}

function portada1Tl(){

    let portadaTl = gsap.timeline({
        repeat:-1,
        duration:0.2
    })
    .call(()=>{ portada1CambiarImg() })
    portadaTl.play();

    timeLines.push(portadaTl);

    capitulo1Vinetas();
}  
  
function portada1CambiarImg(){
    let idA = portada1Contador === 0 ? 'p1-47':`p1-${portada1Contador-1}`
    let pImageA = document.getElementById(idA);
    pImageA.style.visibility = 'hidden';

    let id = `p1-${portada1Contador}`
    let pImage = document.getElementById(id);
    pImage.style.visibility = 'visible';

    portada1Contador++

    if(portada1Contador > 47){
        portada1Contador = 0;
    }
} 

function capitulo1Vinetas(parentEl){
    capitulo1V1(parentEl);
}

function capitulo1V1(){

    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v1-fondo.png', 'cap1V1-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v1-mapa.png', 'cap1V1-mapa');
    vineta.adjuntaImagen('./assets/cap1/imgs/v1-info.png', 'cap1V1-info');
    vineta.despuesFx = capitulo1V1Tl; 
    vineta.ponerImagenes(); 
}

function capitulo1V1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V1",
        id: "cap1V1Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V1-fondo', {opacity:0, ease:"sine.inOut", duration:0.5})
    .from('.cap1V1-mapa', {opacity:0, ease:"sine.inOut", duration:0.5})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosBase.c1V1PCuadrito.buffer);
            audioManager.loopSonido(audioManager.audiosCap1.c1V1v6v8v14Desierto.buffer);
        }
    })
    .from(".cap1V1-info", {y:100, opacity:0, ease:"back", duration:1})
    

    timeLines.push(tl);

    capitulo1V2();
}

// V2

function capitulo1V2(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v2-fondo.png', 'cap1V2-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v2-texto.png', 'cap1V2-texto');
    vineta.despuesFx = capitulo1V2Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V2",
        id: "cap1V2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".cap1V2-fondo", {y:0, opacity:0, ease:"sine.inOut", duration:1})
    .from('.cap1V2-texto', {opacity:0, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo1V3();
}

// V3

function capitulo1V3(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v3-fondo.png', 'cap1V3-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v3-textos.png', 'cap1V3-texto');
    vineta.despuesFx = capitulo1V3Tl;
    vineta.ponerImagenes();
   
}

function capitulo1V3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V3",
        id: "cap1V3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{ 
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V3Baile.buffer);
        }        
    })
    .from('.cap1V3-fondo', {opacity:0, y:-10, duration:0.8}) 
    .from('.cap1V3-texto', {opacity:0, y:10, duration:0.8}, '<0.4')    

    timeLines.push(tl);

    capitulo1V4();
}

// V4

function capitulo1V4(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v4-fondo.png', 'cap1V4-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v4-textos.png', 'cap1V4-texto');
    vineta.despuesFx = capitulo1V4Tl;
    vineta.ponerImagenes();    
}

function capitulo1V4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V4",
        id: "cap1V4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{ 
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V4v5Motobomba.buffer);
        }        
    })
    .from('.cap1V4-texto', {opacity:0, yPercent:-10, duration:0.8})    

    timeLines.push(tl);

    capitulo1V5();
}

// V5

function capitulo1V5(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v5-fondo.png', 'cap1V5-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v5-textos.png', 'cap1V5-texto');
    vineta.adjuntaImagen('./assets/cap1/imgs/v5-img.png', 'cap1V5-img');
    vineta.despuesFx = capitulo1V5Tl;
    vineta.ponerImagenes();    
}

function capitulo1V5Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V5",
        id: "cap1V5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{ 
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito1.buffer);
            audioManager.playSonido(audioManager.audiosCap1.c1V4v5Motobomba.buffer);
            audioManager.playSonido(audioManager.audiosCap1.c1V6PasosArena.buffer);            
        }        
    })
    .from('.cap1V5-texto', {x:-100, opacity:0, duration:0.5, ease:"sine.inOut"})  
    .from('.cap1V5-img', {opacity:0, duration:1, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo1V6();
}

// V6

function capitulo1V6(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v6-fondo.png', 'cap1V6-fondo');
    vineta.despuesFx = capitulo1V6Tl;
    vineta.ponerImagenes();    
}

function capitulo1V6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V6",
        id: "cap1V6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V6-fondo', {y:20, opacity:0, duration:0.5, ease:"sine.inOut"}) 
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V6PasosArena.buffer);
        }  
    }) 

    timeLines.push(tl);

    capitulo1V7();
}

// V7

function capitulo1V7(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v7-textos.png', 'cap1V7-texto');
    vineta.despuesFx = capitulo1V7Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V7",
        id: "cap1V7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V7-texto', {opacity:0, duration:0.5, ease:"sine.inOut"})  

    timeLines.push(tl);

    capitulo1V8();
}

function capitulo1V8(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v8-img1.png', 'cap1V8-img1');
    vineta.adjuntaImagen('./assets/cap1/imgs/v8-img2.png', 'cap1V8-img2');
    vineta.adjuntaImagen('./assets/cap1/imgs/v8-img3.png', 'cap1V8-img3');
    vineta.despuesFx = capitulo1V8Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V8",
        id: "cap1V8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V8Sequia.buffer);
        }  
    })
    .from('.cap1V8-img1', {opacity:0, duration:2, ease:"sine.inOut"})
    .from('.cap1V8-img2', {opacity:0, duration:1.5, ease:"sine.inOut"}, "<1")
    .from('.cap1V8-img3', {opacity:0, duration:1.5, ease:"sine.inOut"}, "<0.5")  

    timeLines.push(tl);

    capitulo1V9();
}

function capitulo1V9(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v9-fondo.png', 'cap1V9-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v9-textos.png', 'cap1V9-textos');
    vineta.despuesFx = capitulo1V9Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V9",
        id: "cap1V9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V9Camiones.buffer);
            audioManager.playSonido(audioManager.audiosCap1.c1V9Flauta.buffer);
        }  
    })
    .from('.cap1V9-fondo', {opacity:0, y:-10, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V9-textos', {opacity:0, y:10, duration:0.5, ease:"sine.inOut"}, '<0.2')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito2.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V10();
}

// V10

function capitulo1V10(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v10-fondo.png', 'cap1V10-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v10-textos.png', 'cap1V10-textos');
    vineta.despuesFx = capitulo1V10Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V10Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V10",
        id: "cap1V10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V10-fondo', {y:20, opacity:0, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V10-textos', {opacity:0, y:-20, x:-7, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo1V11();
}

// V11

function capitulo1V11(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V11';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v11-textos.png', 'cap1V11-textos');
    vineta.adjuntaImagen('./assets/cap1/imgs/v11-fondo.png', 'cap1V11-fondo');    
    vineta.despuesFx = capitulo1V11Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V11Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V11",
        id: "cap1V11Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V11-textos', {x:-47, opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.cap1V11-fondo', {opacity:0, y:40, duration:1, ease:"sine.inOut"}, '<0.6')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V11v14ArbolMistico.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V12();
}

// V12

function capitulo1V12(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V12';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v12-textos.png', 'cap1V12-textos');
    vineta.adjuntaImagen('./assets/cap1/imgs/v12-fondo.png', 'cap1V12-fondo');    
    vineta.despuesFx = capitulo1V12Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V12Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V12",
        id: "cap1V12Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V12-textos', {x:-47, opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.cap1V12-fondo', {opacity:0, y:30, duration:1, ease:"sine.inOut"}, '<0.2')
    timeLines.push(tl);

    capitulo1V13();
}

// V13

function capitulo1V13(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V13';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v13-fondo.png', 'cap1V13-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v13-textos.png', 'cap1V13-textos');      
    vineta.despuesFx = capitulo1V13Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V13Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V13",
        id: "cap1V13Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V13-fondo', {opacity:0, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V13-textos', {y:-20, duration:0.5, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito3.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V14();
}

// V14

function capitulo1V14(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V14';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v14-fondo.png', 'cap1V14-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v14-textos.png', 'cap1V14-textos');      
    vineta.despuesFx = capitulo1V14Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V14Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V14",
        id: "cap1V14Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V14-fondo', {x:-40, opacity:0, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V14-textos', {opacity:0, duration:0.5, ease:"sine.inOut"}, '<0.3')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito1.buffer);
            audioManager.playSonido(audioManager.audiosCap1.c1V11v14ArbolMistico.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V15();
}

// V15

function capitulo1V15(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V15';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v15-fondo.png', 'cap1V15-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v15-textos.png', 'cap1V15-textos');      
    vineta.despuesFx = capitulo1V15Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V15Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V15",
        id: "cap1V15Trigger",
        start:"top 60%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosBase.c1V15ConversionArbol.buffer);
        }  
    })
    .from('.cap1V15-fondo', {filter:'blur(30px)', duration:1.5, ease:"sine.inOut"})
    .from('.cap1V15-textos', {y:80, duration:0.5, ease:"sine.inOut"}, '<0.8')
    
    timeLines.push(tl);

    capitulo1V16();
}

// V16

function capitulo1V16(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V16';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v16-textos.png', 'cap1V16-textos'); 
    vineta.adjuntaImagen('./assets/cap1/imgs/v16-fondo.png', 'cap1V16-fondo');       
    vineta.despuesFx = capitulo1V16Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V16Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V16",
        id: "cap1V16Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V16-textos', {opacity:0, duration:1.5, ease:"sine.inOut"})
    .from('.cap1V16-fondo', {opacity:0, duration:1.5, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V16v28Selva.buffer);
        }  
    })    

    timeLines.push(tl);

    capitulo1V17();
}

// V17

function capitulo1V17(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V17';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v17-fondo.png', 'cap1V17-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v17-textos.png', 'cap1V17-textos');      
    vineta.despuesFx = capitulo1V17Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V17Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V17",
        id: "cap1V17Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V17-textos', {opacity:0, top:-10, x:10, duration:1, ease:"sine.inOut"})
    .from('.cap1V17-fondo', {opacity:0, duration:1, ease:"sine.inOut"}, '<0.4')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V17Risas.buffer);
        }  
    }) 

    timeLines.push(tl);

    capitulo1V18();
}

// V18

function capitulo1V18(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V18';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v18-fondo.png', 'cap1V18-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v18-textos.png', 'cap1V18-textos');      
    vineta.despuesFx = capitulo1V18Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V18Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V18",
        id: "cap1V18Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V18-fondo', {opacity:0, duration:1, ease:"sine.inOut"})
    .from('.cap1V18-textos', {opacity:0, duration:1, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo1V19();
}

// V19

function capitulo1V19(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V19';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v19-fondo.png', 'cap1V19-fondo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v19-rostro.png', 'cap1V19-rostro');   
    vineta.adjuntaImagen('./assets/cap1/imgs/v19-textos.png', 'cap1V19-textos');      
    vineta.despuesFx = capitulo1V19Tl;
    vineta.ponerImagenes(); 
}

function capitulo1V19Tl(){

    let flotarV19 = gsap.timeline({   
        repeat:-1,
        yoyo:true
    })
    .fromTo('.cap1V19-rostro', {y:0, x:0}, {y:10, x:-50, duration: 14, ease:'sine.inOut'})
    .to('.cap1V19-rostro', {y:-10, x:-20, duration: 12, ease:'sine.inOut'})
    .to('.cap1V19-rostro', {y:0, x:0, duration: 6, ease:'sine.inOut'})

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V19",
        id: "cap1V19Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V19-textos', {opacity:0, duration:1})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V19v28Mistico.buffer);
        }  
    }) 

    timeLines.push(tl);

    capitulo1V20();
}

// V20

function capitulo1V20(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V20';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-img1.png', 'cap1V20-img1');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-img2.png', 'cap1V20-img2'); 
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-img3.png', 'cap1V20-img3'); 
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-textos1.png', 'cap1V20-textos1');
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-textos2.png', 'cap1V20-textos2');
    vineta.adjuntaImagen('./assets/cap1/imgs/v20-textos3.png', 'cap1V20-textos3');     
    vineta.despuesFx = capitulo1V20Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V20Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V20",
        id: "cap1V20Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V20-img1', {opacity:0, top:-10, x:-10, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V20-img2', {opacity:0, top:-10, x:-10, duration:0.5, ease:"sine.inOut"}, '<0.3')
    .from('.cap1V20-img3', {opacity:0, top:-10, x:-10, duration:0.5, ease:"sine.inOut"}, '<0.2')
    .from('.cap1V20-textos1', {opacity:0, top:-10, x:10, duration:0.4, ease:"sine.inOut"}, '<0.2')
    .from('.cap1V20-textos2', {opacity:0, top:-10, duration:0.3, ease:"sine.inOut"}, '<0.1')
    .from('.cap1V20-textos3', {opacity:0, top:-10, x:0, duration:0.2, ease:"sine.inOut"}, '<0.1')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito3.buffer);
        }  
    }) 

    timeLines.push(tl);

    capitulo1V21();
}

// V21

function capitulo1V21(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V21';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v21-fondo.png', 'cap1V21-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v21-textos.png', 'cap1V21-textos');      
    vineta.despuesFx = capitulo1V21Tl;
    vineta.ponerImagenes();
}

function capitulo1V21Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V21",
        id: "cap1V21Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V21-fondo', {opacity:0, duration:1, ease:"sine.inOut"})
    .from('.cap1V21-textos', {opacity:0, x:-10, duration:1, ease:"sine.inOut"}, '<0.6')
    timeLines.push(tl);

    capitulo1V22();
}

// V22

function capitulo1V22(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V22';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v22-img1.png', 'cap1V22-img1');
    vineta.adjuntaImagen('./assets/cap1/imgs/v22-img2.png', 'cap1V22-img2'); 
    vineta.adjuntaImagen('./assets/cap1/imgs/v22-textos.png', 'cap1V22-textos');      
    vineta.despuesFx = capitulo1V22Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V22Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V22",
        id: "cap1V22Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V22-textos', {opacity:0, top:-10, x:-10, duration:0.3, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito2.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V23();
}

// V23

function capitulo1V23(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V23';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v23-img1.png', 'cap1V23-img1');
    vineta.adjuntaImagen('./assets/cap1/imgs/v23-img2.png', 'cap1V23-img2'); 
    vineta.adjuntaImagen('./assets/cap1/imgs/v23-circulo.png', 'cap1V23-circulo');
    vineta.adjuntaImagen('./assets/cap1/imgs/v23-textos.png', 'cap1V23-textos');           
    vineta.despuesFx = capitulo1V23Tl;
    vineta.ponerImagenes();    
}

function capitulo1V23Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V23",
        id: "cap1V23Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V23-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito1.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V24();
}

// V24

function capitulo1V24(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V24';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v24-fondo.png', 'cap1V24-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v24-textos.png', 'cap1V24-textos');      
    vineta.despuesFx = capitulo1V24Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V24Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V24",
        id: "cap1V24Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V24-fondo', {opacity:0, top:-10, x:-10, duration:0.2, ease:"sine.inOut"})
    .from('.cap1V24-textos', {opacity:0, y:4, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo1V25();
}

// V25

function capitulo1V25(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V25';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v25-fondo.png', 'cap1V25-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v25-textos.png', 'cap1V25-textos');      
    vineta.despuesFx = capitulo1V25Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V25Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V25",
        id: "cap1V25Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V25-textos', {opacity:0, y:-4, duration:0.5, ease:"sine.inOut"})
    .from('.cap1V25-fondo', {opacity:0, top:10, x:-20, duration:0.6, ease:"sine.inOut"}, '<0.2')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1Sapito3.buffer);
        }  
    })

    timeLines.push(tl);

    capitulo1V26();
}

// V26

function capitulo1V26(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V26';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v26-fondo.png', 'cap1V26-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v26-textos.png', 'cap1V26-textos');      
    vineta.despuesFx = capitulo1V26Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V26Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V26",
        id: "cap1V26Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V26-fondo', {opacity:0, top:10, x:20, duration:0.8, ease:"sine.inOut"})
    .from('.cap1V26-textos', {opacity:0, y:10, duration:0.5, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo1V27();
}

// V27

function capitulo1V27(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V27';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v27-textos.png', 'cap1V27-textos');      
    vineta.despuesFx = capitulo1V27Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V27Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V27",
        id: "cap1V27Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V27-textos', {opacity:0, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo1V28();
}

// V28

function capitulo1V28(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1V28';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap1/imgs/v28-fondo.png', 'cap1V28-fondo');  
    vineta.adjuntaImagen('./assets/cap1/imgs/v28-textos.png', 'cap1V28-textos');      
    vineta.despuesFx = capitulo1V28Tl;
    vineta.ponerImagenes();
    
}

function capitulo1V28Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap1V28",
        id: "cap1V28Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap1V28-fondo', {opacity:0, y:10, duration:1, ease:"sine.inOut"})
    .from('.cap1V28-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo1'){
            audioManager.playSonido(audioManager.audiosCap1.c1V19v28Mistico.buffer);
        }  
    })

    timeLines.push(tl);
    preguntasCap1();

    irACapitulo2()
}

function preguntasCap1(){
    const section = cE("section", capitulo1VinetasContenedor);
    section.className = 'cap1Preguntas';

    const iframeP = cE("iframe", section);
    iframeP.src = './iframes/preguntas/index.html?n=144&v=1';
}

function irACapitulo2(){
    const section = cE("section", capitulo1VinetasContenedor)
    section.className = 'siguienteCap'

    const img = cE("img", section);
    img.src = './assets/imgs/cap2.png';
    img.addEventListener('click', ()=>{
        window.location.href = "#capitulo2"; 
    })
}


