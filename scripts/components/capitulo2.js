let portada2Contador = 0;
let capitulo2VinetasContenedor;

function capitulo2Componente(contenedor){

    const div1 = cE("div", contenedor);

    const div2 = cE("div", contenedor);

    capitulo2VinetasContenedor = cE("div", div2);
    capitulo2VinetasContenedor.id = 'capitulo2VinetasContenedor';
    capitulo2VinetasContenedor.className = 'vineta-contenedor';
    capitulo2VinetasContenedor.innerHTML = "";

    capitulo2Portada(div1);  
}

function capitulo2Portada(contenedor){
    const portadaP2 = new Portada();
    portadaP2.id = 'p2';
    portadaP2.nImagenes = 48;
    portadaP2.path = './assets/cap2/imgs/';
    portadaP2.parentEl = contenedor;
    portadaP2.despuesFx = portada2Tl;
    portadaP2.ponerLoadingIcon();
    portadaP2.ponerImagenes();
}

function portada2Tl(){

    let portadaTl = gsap.timeline({
        repeat:-1,
        duration:0.2
    })
    .call(()=>{ portada2CambiarImg() })
    portadaTl.play();

    timeLines.push(portadaTl);

    capitulo2Vinetas();
}  
  
function portada2CambiarImg(){
    let idA = portada2Contador === 0 ? 'p2-47':`p2-${portada2Contador-1}`
    let pImageA = document.getElementById(idA);
    pImageA.style.visibility = 'hidden';

    let id = `p2-${portada2Contador}`
    let pImage = document.getElementById(id);
    pImage.style.visibility = 'visible';

    portada2Contador++

    if(portada2Contador > 47){
        portada2Contador = 0;
    }
} 

function capitulo2Vinetas(parentEl){
    capitulo2V1(parentEl);
}

function capitulo2V1(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v1-fondo.png', 'cap2V1-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v1-textos.png', 'cap2V1-texto');
    vineta.despuesFx = capitulo2V1Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V1",
        id: "cap2V1Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo2'){
            console.log('entro a ambiente');
            audioManager.playSonido(audioManager.audiosBase.c2Ambiente.buffer);
        }
    })
    .from('.cap2V1-fondo', {opacity:0, ease:"sine.inOut", duration:0.5})
    .from('.cap2V1-texto', {opacity:0, stagger:0.05, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    capitulo2V2();
}

function capitulo2V2(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v2-fondo.png', 'cap2V2-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v2-textos.png', 'cap2V2-texto');
    vineta.despuesFx = capitulo2V2Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V2",
        id: "cap2V2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V2-fondo', {y:100, opacity:0, ease:"sine.inOut", duration:1})
    .from('.cap2V2-texto', {opacity:0, yPercent:-20, duration:1, ease:"sine.inOut"}, '<0.5')

    timeLines.push(tl);

    capitulo2V3();
}

function capitulo2V3(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v3-fondo.png', 'cap2V3-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v3-textos.png', 'cap2V3-texto');
    vineta.despuesFx = capitulo2V3Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V3",
        id: "cap2V3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V3-fondo', {y:100, opacity:0, ease:"sine.inOut", duration:0.4})
    .from('.cap2V3-texto', {opacity:0, x:-20, yPercent:-10, duration:1, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo2V4();
}

function capitulo2V4(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v4-fondo.png', 'cap2V4-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v4-textos.png', 'cap2V4-texto');
    vineta.despuesFx = capitulo2V4Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V4",
        id: "cap2V4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V4-fondo', {opacity:0, ease:"sine.inOut", duration:0.8})
    .from('.cap2V4-texto', {opacity:0, x:80, yPercent:10, duration:0.6, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo2V5();
}

function capitulo2V5(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v5-fondo.png', 'cap2V5-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v5-textos.png', 'cap2V5-textos');
    vineta.adjuntaImagen('./assets/cap2/imgs/v5-circulo.png', 'cap2V5-circulo');
    vineta.despuesFx = capitulo2V5Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V5Tl(){

    let flotar = gsap.timeline({   
        repeat:-1,
        yoyo:true
    })
    .fromTo('.cap2V5-circulo', {y:0, x:0}, {y:-15, x:0, duration: 4, ease:'sine.inOut'})
    .to('.cap2V5-circulo', {y:5, x:0, duration: 3, ease:'sine.inOut'})
    .to('.cap2V5-circulo', {y:5, x:-10, duration: 4, ease:'sine.inOut'})
    .to('.cap2V5-circulo', {y:0, x:0, duration: 4, ease:'sine.inOut'})
    flotar.play(); 

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V5",
        id: "cap2V5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo2'){
            console.log('entro a flauta');
            audioManager.playSonido(audioManager.audiosCap2.c2V5Flauta.buffer);
        }
    })
    .from('.cap2V5-fondo', {y:10, opacity:0, ease:"sine.inOut", duration:0.4})
    .from('.cap2V5-textos', {opacity:0, x:-30, yPercent:-20,  stagger:0.05, duration:1, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo2V6();
}

function capitulo2V6(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v6-fondo.png', 'cap2V6-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v6-textos.png', 'cap2V6-texto');
    vineta.despuesFx = capitulo2V6Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V6",
        id: "cap2V6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V6-fondo', {opacity:0, ease:"sine.inOut", duration:0.8})
    .from('.cap2V6-texto', {opacity:0, x:80, yPercent:10, duration:0.6, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    capitulo2V7();
}

function capitulo2V7(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v7-fondo.png', 'cap2V7-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v7-textos.png', 'cap2V7-texto');
    vineta.despuesFx = capitulo2V7Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V7",
        id: "cap2V7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V7-texto', {opacity:0, x:20, yPercent:10, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo2V8();
}

function capitulo2V8(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v8-fondo.png', 'cap2V8-fondo');
    vineta.despuesFx = capitulo2V8Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V8",
        id: "cap2V8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo2'){
            audioManager.playSonido(audioManager.audiosCap2.c2V8PasosCorriendo.buffer);
        }
    })
    .from('.cap2V8-fondo', {opacity:0, x:20, yPercent:10, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo2V9();
}

function capitulo2V9(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v9-img.png', 'cap2V9-img');
    vineta.adjuntaImagen('./assets/cap2/imgs/v9-fondo.png', 'cap2V9-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v9-textos.png', 'cap2V9-texto');
    vineta.despuesFx = capitulo2V9Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V9",
        id: "cap2V9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V9-fondo', {opacity:0, duration:0.2, ease:"sine.inOut"})
    .from('.cap2V9-img', {opacity:0, duration:0.2, ease:"sine.inOut"})
    .from('.cap2V9-texto', {opacity:0, x:-10, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo2V10();
}

function capitulo2V10(){

    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'cap2V10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap2/imgs/v10-fondo.png', 'cap2V10-fondo');
    vineta.adjuntaImagen('./assets/cap2/imgs/v10-textos.png', 'cap2V10-texto');
    vineta.despuesFx = capitulo2V10Tl; 
    vineta.ponerImagenes(); 
}

function capitulo2V10Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap2V10",
        id: "cap2V10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap2V10-fondo', {opacity:0, y:20, duration:0.7, ease:"sine.inOut"})
    .from('.cap2V10-texto', {opacity:0, x:-10, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo2Desicion();
}

function capitulo2Desicion(){
    const section = cE("section", capitulo2VinetasContenedor);
    section.className = 'decision';

    const p = cE("p", section);
    p.className = 'p-desicion';
    p.innerHTML = 'Deberás ayudar a Dabeiba a escoger un camino:'

    const div = cE('div', section);
    div.className = 'opciones';

    const divC1 = cE('div', div);
    divC1.className = 'camino';

    divC1.addEventListener('click', ()=>{
        window.location.href = "#risaralda"; 
    })

    const imgC1 = cE('img', divC1);
    imgC1.src = './assets/cap2/imgs/camino1-c2.png?n=144';

    const pC1 = cE('p', divC1);
    pC1.innerHTML = '1. Irse para Risaralda a recoger café con un destino incierto.';

    const divC2 = cE('div', div);
    divC2.className = 'camino';

    divC2.addEventListener('click', ()=>{
        window.location.href = "#casa"; 
    })

    const imgC2 = cE('img', divC2);
    imgC2.src = './assets/cap2/imgs/camino2-c2.png?n=144';

    const pC2 = cE('p', divC2);
    pC2.innerHTML = '2. Quedarse con su familia para afrontar su boda forzada.';

    const divAyuda = cE('div', section);
    divAyuda.className = 'ayuda';

    const a = cE('a', divAyuda);
    a.href = './assets/videos/ayuda1.mp4';
    a.target = '_Blank';

    const imgA = cE('img', a);
    imgA.src = './assets/cap2/imgs/ayuda.png?n=144';
}

