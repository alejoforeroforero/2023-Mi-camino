let casaVinetaContenedor

function casaVinetas(parentEl){

    parentEl.innerHTML = "";

    casaVinetaContenedor = cE('div', parentEl);
    casaVinetaContenedor.className = 'vineta-contenedor'    
    casaV1();
}

function casaV1(){

    const div = cE('div', casaVinetaContenedor);
    div.className = 'casa-div-inicial';

    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v1-fondo.png', 'casaV1-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v1-textos.png', 'casaV1-texto');
    vineta.despuesFx = casaV1Tl; 
    vineta.ponerImagenes(); 
}

function casaV1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV1",
        id: "casaV1Trigger",
        start:"top 20%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#casa'){
            audioManager.playSonido(audioManager.audiosCasa.casaV1Ambiente.buffer);
            audioManager.playSonido(audioManager.audiosCasa.casaV1Musica.buffer);
        }
    })
    .from('.casaV1-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    casaV2();
}

function casaV2(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v2-fondo.png', 'casaV2-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v2-textos.png', 'casaV2-texto');
    vineta.despuesFx = casaV2Tl;
    vineta.ponerImagenes();
    
}

function casaV2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV2",
        id: "casaV2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV2-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.casaV2-texto', {opacity:0, y:10, duration:0.4, ease:"sine.inOut"}, '<0.3')

    timeLines.push(tl);

    casaV3();
}

function casaV3(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v3-fondo.png', 'casaV3-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v3-textos.png', 'casaV3-texto');
    vineta.despuesFx = casaV3Tl;
    vineta.ponerImagenes();    
}

function casaV3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV3",
        id: "casaV3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV3-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.casaV3-texto', {opacity:0, y:-10, duration:0.4, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    casaV4();
}

function casaV4(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v4-fondo.png', 'casaV4-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v4-textos.png', 'casaV4-texto');
    vineta.despuesFx = casaV4Tl;
    vineta.ponerImagenes();
    
}

function casaV4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV4",
        id: "casaV4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV4-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV4-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV5();
}

function casaV5(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v5-fondo.png', 'casaV5-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v5-textos.png', 'casaV5-texto');
    vineta.despuesFx = casaV5Tl;
    vineta.ponerImagenes();
    
}

function casaV5Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV5",
        id: "casaV5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV5-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV5-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV6();
}

function casaV6(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v6-fondo.png', 'casaV6-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v6-textos.png', 'casaV6-texto');
    vineta.despuesFx = casaV6Tl;
    vineta.ponerImagenes();
    
}

function casaV6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV6",
        id: "casaV6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV6-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV6-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV7();
}

function casaV7(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v7-fondo.png', 'casaV7-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v7-textos.png', 'casaV7-texto');
    vineta.despuesFx = casaV7Tl;
    vineta.ponerImagenes();
    
}

function casaV7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV7",
        id: "casaV7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV7-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV7-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV8();
}

function casaV8(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v8-fondo.png', 'casaV8-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v8-textos.png', 'casaV8-texto');
    vineta.despuesFx = casaV8Tl;
    vineta.ponerImagenes();
}

function casaV8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV8",
        id: "casaV8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV8-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV8-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV9();
}

function casaV9(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v9-fondo.png', 'casaV9-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v9-textos.png', 'casaV9-texto');
    vineta.despuesFx = casaV9Tl;
    vineta.ponerImagenes();    
}

function casaV9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV9",
        id: "casaV9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV9-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV9-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV10();
}

function casaV10(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v10-fondo.png', 'casaV10-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v10-textos.png', 'casaV10-texto');
    vineta.despuesFx = casaV10Tl;
    vineta.ponerImagenes();
    
}

function casaV10Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV10",
        id: "casaV10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV10-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV10-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV11();
}

function casaV11(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV11';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v11-fondo.png', 'casaV11-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v11-textos.png', 'casaV11-texto');
    vineta.despuesFx = casaV11Tl;
    vineta.ponerImagenes();    
}

function casaV11Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV11",
        id: "casaV11Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV11-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV11-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV12();
}

function casaV12(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV12';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v12-fondo.png', 'casaV12-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v12-textos.png', 'casaV12-texto');
    vineta.despuesFx = casaV12Tl;
    vineta.ponerImagenes();    
}

function casaV12Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV12",
        id: "casaV12Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV12-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.casaV12-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    casaV13();
}

function casaV13(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV13';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v13-textos.png', 'casaV13-texto');
    vineta.despuesFx = casaV13Tl;
    vineta.ponerImagenes();
    
}

function casaV13Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV13",
        id: "casaV13Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".casaV13-texto", {opacity:0, y:-10, duration:0.8})

    timeLines.push(tl);

    casaV14();
}

function casaV14(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'casaV14';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/casa/imgs/v14-fondo.png', 'casaV14-fondo');
    vineta.adjuntaImagen('./assets/casa/imgs/v14-textos.png', 'casaV14-texto');
    vineta.despuesFx = casaV14Tl;
    vineta.ponerImagenes();    
}

function casaV14Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".casaV14",
        id: "casaV14Trigger",
        start:"top 0%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.casaV14-texto', {opacity:0, y:10, duration:0.8})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#casa'){
            audioManager.playSonido(audioManager.audiosCasa.casaV14ArbolMistico.buffer);
            audioManager.playSonido(audioManager.audiosCasa.casaSapito.buffer);
        }
    })

    timeLines.push(tl);
    preguntasCap2();

    irACapitulo3()
}

function preguntasCap2(){
    const section = cE("section", casaVinetaContenedor);
    section.className = 'cap1Preguntas';

    const iframeP = cE("iframe", section);
    iframeP.src = './iframes/preguntas/index.html?n=143&v=2';
}

function irACapitulo3(){
    const section = cE("section", casaVinetaContenedor)
    section.className = 'siguienteCap'

    const img = cE("img", section);
    img.src = './assets/imgs/cap3.png';
    img.addEventListener('click', ()=>{
        window.location.href = "#capitulo3"; 
    })
}


