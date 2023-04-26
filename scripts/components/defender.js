let defenderVinetaContenedor

function defenderVinetas(parentEl){

    parentEl.innerHTML = "";

    defenderVinetaContenedor = cE('div', parentEl);
    defenderVinetaContenedor.className = 'vineta-contenedor'    
    defenderV1();
}

function defenderV1(){

    const div = cE('div', defenderVinetaContenedor);
    div.className = 'defender-div-inicial';

    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v1-fondo.png', 'defenderV1-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v1-textos.png', 'defenderV1-texto');
    vineta.despuesFx = defenderV1Tl; 
    vineta.ponerImagenes(); 
}

function defenderV1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV1",
        id: "defenderV1Trigger",
        start:"top 20%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#defender'){
            audioManager.loopSonido(audioManager.audiosDefender.defenderAmbiente.buffer);
        }
    })
    .from('.defenderV1-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    defenderV2();
}

function defenderV2(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v2-fondo.png', 'defenderV2-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v2-textos.png', 'defenderV2-texto');
    vineta.despuesFx = defenderV2Tl;
    vineta.ponerImagenes();
    
}

function defenderV2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV2",
        id: "defenderV2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV2-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.defenderV2-texto', {opacity:0, y:10, duration:0.4, ease:"sine.inOut"}, '<0.3')

    timeLines.push(tl);

    defenderV3();
}

function defenderV3(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v3-fondo.png', 'defenderV3-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v3-textos.png', 'defenderV3-texto');
    vineta.despuesFx = defenderV3Tl;
    vineta.ponerImagenes();    
}

function defenderV3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV3",
        id: "defenderV3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV3-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.defenderV3-texto', {opacity:0, y:-10, duration:0.4, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    defenderV4();
}

function defenderV4(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v4-fondo.png', 'defenderV4-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v4-textos.png', 'defenderV4-texto');
    vineta.despuesFx = defenderV4Tl;
    vineta.ponerImagenes();
    
}

function defenderV4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV4",
        id: "defenderV4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV4-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV4-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV5();
}

function defenderV5(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v5-fondo.png', 'defenderV5-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v5-textos.png', 'defenderV5-texto');
    vineta.despuesFx = defenderV5Tl;
    vineta.ponerImagenes();
    
}

function defenderV5Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV5",
        id: "defenderV5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV5-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV5-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV6();
}

function defenderV6(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v6-fondo.png', 'defenderV6-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v6-textos.png', 'defenderV6-texto');
    vineta.despuesFx = defenderV6Tl;
    vineta.ponerImagenes();
}

function defenderV6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV6",
        id: "defenderV6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV6-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV6-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV7();
}

function defenderV7(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v7-fondo.png', 'defenderV7-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v7-textos.png', 'defenderV7-texto');
    vineta.despuesFx = defenderV7Tl;
    vineta.ponerImagenes(); 
}

function defenderV7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV7",
        id: "defenderV7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV7-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV7-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV8();
}

function defenderV8(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v8-fondo.png', 'defenderV8-fondo');
    vineta.despuesFx = defenderV8Tl;
    vineta.ponerImagenes();
}

function defenderV8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV8",
        id: "defenderV8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV8-fondo", {opacity:0, y:-10, duration:0.8})

    timeLines.push(tl);

    defenderV9();
}

function defenderV9(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v9-fondo.png', 'defenderV9-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v9-textos.png', 'defenderV9-texto');
    vineta.despuesFx = defenderV9Tl;
    vineta.ponerImagenes();    
}

function defenderV9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV9",
        id: "defenderV9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV9-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV9-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV10();
}

function defenderV10(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v10-textos.png', 'defenderV10-texto');
    vineta.despuesFx = defenderV10Tl;
    vineta.ponerImagenes();
    
}

function defenderV10Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV10",
        id: "defenderV10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.defenderV10-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV11();
}

function defenderV11(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV11';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v11-fondo.png', 'defenderV11-fondo');
    vineta.despuesFx = defenderV11Tl;
    vineta.ponerImagenes();    
}

function defenderV11Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV11",
        id: "defenderV11Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV11-fondo", {opacity:0, y:-10, duration:0.8})

    timeLines.push(tl);

    defenderV12();
}

function defenderV12(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV12';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v12-fondo.png', 'defenderV12-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v12-textos.png', 'defenderV12-texto');
    vineta.despuesFx = defenderV12Tl;
    vineta.ponerImagenes();    
}

function defenderV12Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV12",
        id: "defenderV12Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV12-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.defenderV12-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderV13();
}

function defenderV13(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'defenderV13';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/defender/imgs/v13-fondo.png', 'defenderV13-fondo');
    vineta.adjuntaImagen('./assets/defender/imgs/v13-img.png', 'defenderV13-img');
    vineta.adjuntaImagen('./assets/defender/imgs/v13-textos.png', 'defenderV13-texto');
    vineta.despuesFx = defenderV13Tl;
    vineta.ponerImagenes();  
}

function defenderV13Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".defenderV13",
        id: "defenderV13Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".defenderV13-fondo", {opacity:0, y:-20, duration:1.2})
    .from(".defenderV13-img", {opacity:0, y:10, duration:1}, '<0.6')
    .from(".defenderV13-texto", {opacity:0, x:-10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    defenderDesicion()
}

function defenderDesicion(){
    const section = cE("section", defenderVinetaContenedor);
    section.className = 'decision';

    const div = cE('div', section);
    div.className = 'opciones opciones-cafetal';

    const divC2 = cE('div', div);
    divC2.className = 'camino';

    divC2.addEventListener('click', ()=>{
        window.location.href = "#dialogar"; 
    })

    const imgC2 = cE('img', divC2);
    imgC2.src = './assets/defender/imgs/regresar.png?n=144';
}

