let portada3Contador = 0;
let capitulo3VinetasContenedor;

function capitulo3Componente(contenedor){

    const div1 = cE("div", contenedor);

    const div2 = cE("div", contenedor);

    capitulo3VinetasContenedor = cE("div", div2);
    capitulo3VinetasContenedor.id = 'capitulo3VinetasContenedor';
    capitulo3VinetasContenedor.className = 'vineta-contenedor';
    capitulo3VinetasContenedor.innerHTML = "";

    capitulo3Portada(div1);  
}

function capitulo3Portada(contenedor){
    const portadaP2 = new Portada();
    portadaP2.id = 'p3';
    portadaP2.nImagenes = 48;
    portadaP2.path = './assets/cap3/imgs/';
    portadaP2.parentEl = contenedor;
    portadaP2.despuesFx = portada3Tl;
    portadaP2.ponerLoadingIcon();
    portadaP2.ponerImagenes();
}

function portada3Tl(){

    let portadaTl = gsap.timeline({
        repeat:-1,
        duration:0.2
    })
    .call(()=>{ portada3CambiarImg() })
    portadaTl.play();

    timeLines.push(portadaTl);

    capitulo3Vinetas();
}  
  
function portada3CambiarImg(){
    let idA = portada3Contador === 0 ? 'p3-47':`p3-${portada3Contador-1}`
    let pImageA = document.getElementById(idA);
    pImageA.style.visibility = 'hidden';

    let id = `p3-${portada3Contador}`
    let pImage = document.getElementById(id);
    pImage.style.visibility = 'visible';

    portada3Contador++

    if(portada3Contador > 47){
        portada3Contador = 0;
    }
} 

function capitulo3Vinetas(parentEl){
    capitulo3V1(parentEl);
}

function capitulo3V1(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v1-fondo.png', 'cap3V1-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v1-textos.png', 'cap3V1-texto');
    vineta.despuesFx = capitulo3V1Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V1",
        id: "cap3V1Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosBase.c3Ambiente.buffer);
        }
    })
    .from('.cap3V1-fondo', {y:100, opacity:0, ease:"sine.inOut", duration:0.4})
    .from('.cap3V1-texto', {opacity:0, x:-20, yPercent:-20, duration:1, ease:"back"})

    timeLines.push(tl);

    capitulo3V2();
}

function capitulo3V2(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v2-textos.png', 'cap3V2-texto');
    vineta.despuesFx = capitulo3V2Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V2",
        id: "cap3V2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V2-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    capitulo3V3();
}

function capitulo3V3(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v3-fondo.png', 'cap3V3-fondo');
    vineta.despuesFx = capitulo3V3Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V3",
        id: "cap3V3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V3-fondo', {opacity:0, ease:"sine.inOut", duration:0.5})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V3Buldozer.buffer);
        }
    })

    timeLines.push(tl);

    capitulo3V4();
}

function capitulo3V4(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v4-fondo.png', 'cap3V4-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v4-textos.png', 'cap3V4-texto');
    vineta.despuesFx = capitulo3V4Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V4",
        id: "cap3V4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V4V8Protesta.buffer);
        }
    })
    .from('.cap3V4-fondo', {y:100, opacity:0, ease:"sine.inOut", duration:1})
    .from('.cap3V4-texto', {opacity:0, x:80, yPercent:10, duration:1, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    capitulo3V5();
}

function capitulo3V5(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v5-textos.png', 'cap3V5-texto');
    vineta.despuesFx = capitulo3V5Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V5Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V5",
        id: "cap3V5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V5-texto', {opacity:0, x:-10, yPercent:-20, duration:1, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo3V6();
}

function capitulo3V6(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v6-fondo.png', 'cap3V6-fondo');
    vineta.despuesFx = capitulo3V6Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V6",
        id: "cap3V6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V6Dinero.buffer);
        }
    })
    .from('.cap3V6-fondo', {opacity:0, x:0, yPercent:10, duration:0.6, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo3V7();
}

function capitulo3V7(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v7-textos.png', 'cap3V7-texto');
    vineta.despuesFx = capitulo3V7Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V7",
        id: "cap3V7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V7-texto', {opacity:0, x:20, yPercent:10, duration:0.4, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo3V8();
}

function capitulo3V8(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v8-fondo.png', 'cap3V8-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v8-circulo.png', 'cap3V8-circulo');
    vineta.despuesFx = capitulo3V8Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V8",
        id: "cap3V8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V4V8Protesta.buffer);
        }
    })
    .from('.cap3V8-fondo', {opacity:0, y:40, duration:1, ease:"sine.inOut"})

    timeLines.push(tl);

    capitulo3V9();
}

function capitulo3V9(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v9-fondo.png', 'cap3V9-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v9-img.png', 'cap3V9-img');
    vineta.adjuntaImagen('./assets/cap3/imgs/v9-textos.png', 'cap3V9-texto');
    vineta.despuesFx = capitulo3V9Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V9",
        id: "cap3V9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V9V13Mistico.buffer);
        }
    })
    .from('.cap3V9-fondo', {opacity:0, ease:"sine.inOut", duration:0.5})
    .from('.cap3V9-img', {opacity:0, ease:"sine.inOut", duration:0.5})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosBase.c1Sapito2.buffer);
        }
    })
    .from('.cap3V9-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    capitulo3V10();
}

function capitulo3V10(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v10-fondo.png', 'cap3V10-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v10-textos.png', 'cap3V10-texto');
    vineta.adjuntaImagen('./assets/cap3/imgs/v10-circulo.png', 'cap3V10-circulo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v11-textos.png', 'cap3V11-texto');
    vineta.despuesFx = capitulo3V10Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V10Tl(){

    let flotar = gsap.timeline({   
        repeat:-1,
        yoyo:true
    })
    .fromTo('.cap3V10-circulo', {y:0, x:0}, {y:-15, x:0, duration: 4, ease:'sine.inOut'})
    .to('.cap3V10-circulo', {y:5, x:0, duration: 3, ease:'sine.inOut'})
    .to('.cap3V10-circulo', {y:5, x:-10, duration: 4, ease:'sine.inOut'})
    .to('.cap3V10-circulo', {y:0, x:0, duration: 4, ease:'sine.inOut'})
    flotar.play(); 

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V10",
        id: "cap3V10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V10-fondo', {y:10, opacity:0, ease:"sine.inOut", duration:0.4})
    .from('.cap3V10-texto', {opacity:0, x:-30, yPercent:-20, duration:1, ease:"sine.inOut"}, '<0.2')
    .from('.cap3V11-texto', {opacity:0, x:30, yPercent:20, duration:1, ease:"sine.inOut"}, '<0.5')

    timeLines.push(tl);

    capitulo3V12();
}

function capitulo3V12(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V12';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v12-fondo.png', 'cap3V12-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v12-img.png', 'cap3V12-img');
    vineta.despuesFx = capitulo3V12Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V12Tl(){ 

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V12",
        id: "cap3V12Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V11Relampago.buffer);
        }
    })
    .from('.cap3V12-fondo', {opacity:0, y:20, duration:1.5, ease:"sine.inOut"})
    .from('.cap3V12-img', {opacity:0, x:-10, duration:1.2, ease:"sine.inOut"}, '<0.3')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V12Relampago.buffer);
        }
    })

    timeLines.push(tl);

    capitulo3V13();
}

function capitulo3V13(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V13';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v13-fondo.png', 'cap3V13-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v13-img.png', 'cap3V13-img');
    vineta.despuesFx = capitulo3V13Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V13Tl(){ 

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V13",
        id: "cap3V13Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#capitulo3'){
            audioManager.playSonido(audioManager.audiosCap3.c3V9V13Mistico.buffer);
        }
    })
    .from('.cap3V13-fondo', {opacity:0, y:10, duration:1, ease:"sine.inOut"})
    .from('.cap3V13-img', {opacity:0, y:10, duration:1, ease:"sine.inOut"}, '<0.7')

    timeLines.push(tl);

    capitulo3V14();
}

function capitulo3V14(){

    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'cap3V14';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cap3/imgs/v14-fondo.png', 'cap3V14-fondo');
    vineta.adjuntaImagen('./assets/cap3/imgs/v14-textos.png', 'cap3V14-texto');
    vineta.despuesFx = capitulo3V14Tl; 
    vineta.ponerImagenes(); 
}

function capitulo3V14Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cap3V14",
        id: "cap3V14Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.cap3V14-fondo', {opacity:0, y:-10, duration:0.4, ease:"sine.inOut"})
    .from('.cap3V14-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    capitulo3Desicion();
}

function capitulo3Desicion(){
    const section = cE("section", capitulo3VinetasContenedor);
    section.className = 'decision';

    const p = cE("p", section);
    p.className = 'p-desicion';
    p.innerHTML = 'Deberás ayudar a Dabeiba a escoger un camino:'

    const div = cE('div', section);
    div.className = 'opciones';

    const divC1 = cE('div', div);
    divC1.className = 'camino';

    divC1.addEventListener('click', ()=>{
        window.location.href = "#defender"; 
    })

    const imgC1 = cE('img', divC1);
    imgC1.src = './assets/cap3/imgs/camino1-c3.png?n=142';

    const pC1 = cE('p', divC1);
    pC1.innerHTML = '1. Unirse a las familias que defienden el bosque';

    const divC2 = cE('div', div);
    divC2.className = 'camino';

    divC2.addEventListener('click', ()=>{
        window.location.href = "#dialogar"; 
    })

    const imgC2 = cE('img', divC2);
    imgC2.src = './assets/cap3/imgs/camino2-c3.png?n=142';

    const pC2 = cE('p', divC2);
    pC2.innerHTML = '2. Dialogar con las familias que quieren que la empresa canadiense use la madera del bosque';

    const divAyuda = cE('div', section);
    divAyuda.className = 'ayuda';

    const a = cE('a', divAyuda);
    a.href = './assets/videos/ayuda2.mp4';
    a.target = '_Blank';

    const imgA = cE('img', a);
    imgA.src = './assets/cap3/imgs/ayuda.png?n=142';
}