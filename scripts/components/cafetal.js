let cafetalVinetaContenedor

function cafetalVinetas(parentEl){

    parentEl.innerHTML = "";

    cafetalVinetaContenedor = cE('div', parentEl);
    cafetalVinetaContenedor.className = 'vineta-contenedor'    
    cafetalV1();
}

function cafetalV1(){

    const div = cE('div', cafetalVinetaContenedor);
    div.className = 'cafetal-div-inicial';

    const section = cE("section", cafetalVinetaContenedor);
    section.className = 'cafetalV1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cafetal/imgs/v1-fondo.png', 'cafetalV1-fondo');
    vineta.adjuntaImagen('./assets/cafetal/imgs/v1-textos.png', 'cafetalV1-texto');
    vineta.despuesFx = cafetalV1Tl; 
    vineta.ponerImagenes(); 
}

function cafetalV1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cafetalV1",
        id: "cafetalV1Trigger",
        start:"top 20%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#cafetal'){
            audioManager.playSonido(audioManager.audiosCafetal.cafetalV1Ambiente.buffer);
        }
    })
    .from('.cafetalV1-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    cafetalV2();
}

function cafetalV2(){
    const section = cE("section", cafetalVinetaContenedor);
    section.className = 'cafetalV2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cafetal/imgs/v2-fondo.png', 'cafetalV2-fondo');
    vineta.adjuntaImagen('./assets/cafetal/imgs/v2-textos.png', 'cafetalV2-texto');
    vineta.despuesFx = cafetalV2Tl;
    vineta.ponerImagenes();
    
}

function cafetalV2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cafetalV2",
        id: "cafetalV2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".cafetalV2-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.cafetalV2-texto', {opacity:0, y:10, duration:0.4, ease:"sine.inOut"}, '<0.3')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#cafetal'){
            audioManager.playSonido(audioManager.audiosCafetal.cafetalV2Sevan.buffer);
        }
    })

    timeLines.push(tl);

    cafetalV3();
}

function cafetalV3(){
    const section = cE("section", cafetalVinetaContenedor);
    section.className = 'cafetalV3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cafetal/imgs/v3-fondo.png', 'cafetalV3-fondo');
    vineta.adjuntaImagen('./assets/cafetal/imgs/v3-textos.png', 'cafetalV3-texto');
    vineta.despuesFx = cafetalV3Tl;
    vineta.ponerImagenes();    
}

function cafetalV3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cafetalV3",
        id: "cafetalV3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".cafetalV3-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.cafetalV3-texto', {opacity:0, y:-10, duration:0.4, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    cafetalV4();
}

function cafetalV4(){
    const section = cE("section", cafetalVinetaContenedor);
    section.className = 'cafetalV4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/cafetal/imgs/v4-fondo.png', 'cafetalV4-fondo');
    vineta.adjuntaImagen('./assets/cafetal/imgs/v4-textos.png', 'cafetalV4-texto');
    vineta.despuesFx = cafetalV4Tl;
    vineta.ponerImagenes();
    
}

function cafetalV4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".cafetalV4",
        id: "cafetalV4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".cafetalV4-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.cafetalV4-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    cafetalDesicion();
}

function cafetalDesicion(){
    const section = cE("section", cafetalVinetaContenedor);
    section.className = 'decision';

    const div = cE('div', section);
    div.className = 'opciones opciones-cafetal';

    const divC2 = cE('div', div);
    divC2.className = 'camino';

    divC2.addEventListener('click', ()=>{
        window.location.href = "#casa"; 
    })

    const imgC2 = cE('img', divC2);
    imgC2.src = './assets/cafetal/imgs/regresar.png?n=145';

    const pC2 = cE('p', divC2);
    pC2.innerHTML = '2. Regresar a casa';
}
