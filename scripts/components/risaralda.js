let risaraldaVinetaContenedor

function risaraldaVinetas(parentEl){

    parentEl.innerHTML = "";

    risaraldaVinetaContenedor = cE('div', parentEl);
    risaraldaVinetaContenedor.className = 'vineta-contenedor'    
    risaraldaV1();
}

function risaraldaV1(){

    const div = cE('div', risaraldaVinetaContenedor);
    div.className = 'risaralda-div-inicial';

    const section = cE("section", risaraldaVinetaContenedor);
    section.className = 'risaraldaV1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/risaralda/imgs/v1-fondo.png', 'risaraldaV1-fondo');
    vineta.adjuntaImagen('./assets/risaralda/imgs/v1-textos.png', 'risaraldaV1-texto');
    vineta.despuesFx = risaraldaV1Tl; 
    vineta.ponerImagenes(); 
}

function risaraldaV1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".risaraldaV1",
        id: "risaraldaV1Trigger",
        start:"top 20%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#risaralda'){
            audioManager.playSonido(audioManager.audiosRisaralda.risaraldaV1Ambiente.buffer);
            audioManager.playSonido(audioManager.audiosRisaralda.risaraldaV1Recolecta.buffer);
        }
    })
    .from('.risaraldaV1-texto', {opacity:0, ease:"sine.inOut", duration:0.5})

    timeLines.push(tl);

    risaraldaV2();
}

function risaraldaV2(){
    const section = cE("section", risaraldaVinetaContenedor);
    section.className = 'risaraldaV2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/risaralda/imgs/v2-fondo.png', 'risaraldaV2-fondo');
    vineta.adjuntaImagen('./assets/risaralda/imgs/v2-textos.png', 'risaraldaV2-texto');
    vineta.despuesFx = risaraldaV2Tl;
    vineta.ponerImagenes();
    
}

function risaraldaV2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".risaraldaV2",
        id: "risaraldaV2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".risaraldaV2-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.risaraldaV2-texto', {opacity:0, y:10, duration:0.4, ease:"sine.inOut"}, '<0.3')
    if(audioManager.sonidoActivo && nombrePagina === '#risaralda'){
        audioManager.playSonido(audioManager.audiosRisaralda.risaraldaV2Sevan.buffer);
    }

    timeLines.push(tl);

    risaraldaV3();
}

function risaraldaV3(){
    const section = cE("section", risaraldaVinetaContenedor);
    section.className = 'risaraldaV3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/risaralda/imgs/v3-fondo.png', 'risaraldaV3-fondo');
    vineta.adjuntaImagen('./assets/risaralda/imgs/v3-textos.png', 'risaraldaV3-texto');
    vineta.despuesFx = risaraldaV3Tl;
    vineta.ponerImagenes();    
}

function risaraldaV3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".risaraldaV3",
        id: "risaraldaV3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".risaraldaV3-fondo", {opacity:0, y:10, duration:0.8, ease:"sine.inOut"})
    .from('.risaraldaV3-texto', {opacity:0, y:-10, duration:0.4, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    risaraldaV4();
}

function risaraldaV4(){
    const section = cE("section", risaraldaVinetaContenedor);
    section.className = 'risaraldaV4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/risaralda/imgs/v4-fondo.png', 'risaraldaV4-fondo');
    vineta.adjuntaImagen('./assets/risaralda/imgs/v4-textos.png', 'risaraldaV4-texto');
    vineta.despuesFx = risaraldaV4Tl;
    vineta.ponerImagenes();
    
}

function risaraldaV4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".risaraldaV4",
        id: "risaraldaV4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".risaraldaV4-fondo", {opacity:0, y:-10, duration:0.8})
    .from('.risaraldaV4-texto', {opacity:0, y:10, duration:0.8}, '<0.4')

    timeLines.push(tl);

    risaraldaDesicion();
}

function risaraldaDesicion(){
    const section = cE("section", risaraldaVinetaContenedor);
    section.className = 'decision';

    const p = cE("p", section);
    p.className = 'p-desicion';
    p.innerHTML = 'Siempre que tomamos desiciones, nos cuestionamos sobre ellas. ¿Crees que Dabeiba deba regresar a casa?:'

    const div = cE('div', section);
    div.className = 'opciones';

    const divC1 = cE('div', div);
    divC1.className = 'camino';

    divC1.addEventListener('click', ()=>{
        window.location.href = "#cafetal"; 
    })

    const imgC1 = cE('img', divC1);
    imgC1.src = './assets/risaralda/imgs/cafetal.png?n=143';

    const pC1 = cE('p', divC1);
    pC1.innerHTML = '1. Quedarse en el cafetal';

    const divC2 = cE('div', div);
    divC2.className = 'camino';

    divC2.addEventListener('click', ()=>{
        window.location.href = "#casa"; 
    })

    const imgC2 = cE('img', divC2);
    imgC2.src = './assets/risaralda/imgs/regresar.png?n=143';

    const pC2 = cE('p', divC2);
    pC2.innerHTML = '2. Regresar a casa';

    const divAyuda = cE('div', section);
    divAyuda.className = 'ayuda';

    const a = cE('a', divAyuda);
    a.target = '_Blank';

    const imgA = cE('img', a);
    imgA.src = './assets/cap2/imgs/ayuda.png?n=143';
}
