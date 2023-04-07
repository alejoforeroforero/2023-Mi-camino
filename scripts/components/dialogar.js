
let dialogarVinetasContenedor

function dialogarVinetas(parentEl){

    parentEl.innerHTML = "";

    dialogarVinetasContenedor = cE('div', parentEl);
    dialogarVinetasContenedor.className = 'vineta-contenedor'    
    dialogarV1();
}

function dialogarV1(){

    const div = cE('div', dialogarVinetasContenedor);
    div.className = 'risaralda-div-inicial';

    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV1';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v1-fondo.png', 'dialogarV1-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v1-textos.png', 'dialogarV1-texto');
    vineta.despuesFx = dialogarV1Tl; 
    vineta.ponerImagenes(); 
}

function dialogarV1Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV1",
        id: "dialogarV1Trigger",
        start:"top 20%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV1-texto', {opacity:0, ease:"sine.inOut", duration:0.5})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.loopSonido(audioManager.audiosDialogar.ambiente.buffer);
            audioManager.playSonido(audioManager.audiosDialogar.v1Pasos.buffer);
        }
    })
    timeLines.push(tl);

    dialogarV2();
}

// V2

function dialogarV2(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV2';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v2-fondo.png', 'dialogarV2-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v2-textos.png', 'dialogarV2-texto');
    vineta.despuesFx = dialogarV2Tl;
    vineta.ponerImagenes(); 
}

function dialogarV2Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV2",
        id: "dialogarV2Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from(".dialogarV2-fondo", {y:0, opacity:0, ease:"sine.inOut", duration:1})
    .from('.dialogarV2-texto', {opacity:0, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV3();
}

// V3

function dialogarV3(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV3';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v3-fondo.png', 'dialogarV3-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v3-textos.png', 'dialogarV3-texto');
    vineta.despuesFx = dialogarV3Tl;
    vineta.ponerImagenes();
   
}

function dialogarV3Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV3",
        id: "dialogarV3Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV3-fondo', {opacity:0, y:-10, duration:0.8}) 
    .from('.dialogarV3-texto', {opacity:0, y:10, duration:0.8}, '<0.4')    

    timeLines.push(tl);

    dialogarV4();
}

// V4

function dialogarV4(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV4';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v4-fondo.png', 'dialogarV4-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v4-textos.png', 'dialogarV4-texto');
    vineta.despuesFx = dialogarV4Tl;
    vineta.ponerImagenes();    
}

function dialogarV4Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV4",
        id: "dialogarV4Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV4-texto', {opacity:0, yPercent:-10, duration:0.8})    

    timeLines.push(tl);

    dialogarV5();
}

// V5

function dialogarV5(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV5';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v5-fondo.png', 'dialogarV5-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v5-textos.png', 'dialogarV5-texto');
    vineta.despuesFx = dialogarV5Tl;
    vineta.ponerImagenes();    
}

function dialogarV5Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV5",
        id: "dialogarV5Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV5-texto', {x:-100, opacity:0, duration:0.5, ease:"sine.inOut"})  
    .from('.dialogarV5-fondo', {opacity:0, duration:1, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV6();
}

// V6

function dialogarV6(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV6';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v6-fondo.png', 'dialogarV6-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v6-textos.png', 'dialogarV6-texto');
    vineta.despuesFx = dialogarV6Tl;
    vineta.ponerImagenes();    
}

function dialogarV6Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV6",
        id: "dialogarV6Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV6-fondo', {y:20, opacity:0, duration:0.5, ease:"sine.inOut"}) 

    timeLines.push(tl);

    dialogarV7();
}

// V7

function dialogarV7(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV7';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v7-fondo.png', 'dialogarV7-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v7-img.png', 'dialogarV7-img');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v7-textos.png', 'dialogarV7-texto');
    vineta.despuesFx = dialogarV7Tl;
    vineta.ponerImagenes();
    
}

function dialogarV7Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV7",
        id: "dialogarV7Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV7-texto', {opacity:0, duration:0.5, ease:"sine.inOut"})  

    timeLines.push(tl);

    dialogarV8();
}

function dialogarV8(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV8';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v8-fondo.png', 'dialogarV8-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v8-textos.png', 'dialogarV8-texto');
    vineta.despuesFx = dialogarV8Tl;
    vineta.ponerImagenes();
    
}

function dialogarV8Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV8",
        id: "dialogarV8Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV8-fondo', {opacity:0, duration:2, ease:"sine.inOut"})
    .from('.dialogarV8-texto', {opacity:0, duration:1.5, ease:"sine.inOut"}, "<1")

    timeLines.push(tl);

    dialogarV9();
}

function dialogarV9(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV9';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v9-fondo.png', 'dialogarV9-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v9-textos.png', 'dialogarV9-textos');
    vineta.despuesFx = dialogarV9Tl;
    vineta.ponerImagenes();
    
}

function dialogarV9Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV9",
        id: "dialogarV9Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV9-fondo', {opacity:0, y:-10, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV9-textos', {opacity:0, y:10, duration:0.5, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    dialogarV10();
}

// V10

function dialogarV10(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV10';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v10-fondo.png', 'dialogarV10-fondo');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v10-textos.png', 'dialogarV10-textos');
    vineta.despuesFx = dialogarV10Tl;
    vineta.ponerImagenes();
    
}

function dialogarV10Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV10",
        id: "dialogarV10Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV10-fondo', {y:20, opacity:0, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV10-textos', {opacity:0, y:-20, x:-7, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV11();
}

// V11

function dialogarV11(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV11';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v11-img.png', 'dialogarV11-img');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v11-reloj.png', 'dialogarV11-reloj');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v11-fondo.png', 'dialogarV11-fondo');    
    vineta.despuesFx = dialogarV11Tl;
    vineta.ponerImagenes();  
}

function dialogarV11Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV11",
        id: "dialogarV11Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV11-img', {x:-47, opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV11-fondo', {opacity:0, y:40, duration:1, ease:"sine.inOut"}, '<0.6')

    timeLines.push(tl);

    dialogarV12();
}

// V12

function dialogarV12(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV12';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v12-textos.png', 'dialogarV12-textos');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v12-fondo.png', 'dialogarV12-fondo');    
    vineta.despuesFx = dialogarV12Tl;
    vineta.ponerImagenes();
    
}

function dialogarV12Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV12",
        id: "dialogarV12Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV12-textos', {x:-47, opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV12-fondo', {opacity:0, y:30, duration:1, ease:"sine.inOut"}, '<0.2')
    timeLines.push(tl);

    dialogarV13();
}

// V13

function dialogarV13(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV13';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v13-fondo.png', 'dialogarV13-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v13-textos.png', 'dialogarV13-textos');      
    vineta.despuesFx = dialogarV13Tl;
    vineta.ponerImagenes();
    
}

function dialogarV13Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV13",
        id: "dialogarV13Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV13-fondo', {opacity:0, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV13-textos', {y:-20, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV14();
}

// V14

function dialogarV14(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV14';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v14-textos.png', 'dialogarV14-textos');      
    vineta.despuesFx = dialogarV14Tl;
    vineta.ponerImagenes();    
}

function dialogarV14Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV14",
        id: "dialogarV14Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV14-textos', {opacity:0, duration:0.5, ease:"sine.inOut"}, '<0.3')

    timeLines.push(tl);

    dialogarV15();
}

// V15

function dialogarV15(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV15';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v15-fondo.png', 'dialogarV15-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v15-img1.png', 'dialogarV15-img1'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v15-img2.png', 'dialogarV15-img2');
    vineta.adjuntaImagen('./assets/dialogar/imgs/v15-textos.png', 'dialogarV15-textos');      
    vineta.despuesFx = dialogarV15Tl;
    vineta.ponerImagenes();
    
}

function dialogarV15Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV15",
        id: "dialogarV15Trigger",
        start:"top 60%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v15V27Lluvia.buffer);
        }
    })
    .from('.dialogarV15-fondo', {filter:'blur(30px)', duration:1.5, ease:"sine.inOut"})
    .from('.dialogarV15-textos', {y:80, duration:0.5, ease:"sine.inOut"}, '<0.8')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v15Llanto.buffer);
        }
    })

    timeLines.push(tl);

    dialogarV16();
}

// V16

function dialogarV16(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV16';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v16-textos.png', 'dialogarV16-textos');      
    vineta.despuesFx = dialogarV16Tl;
    vineta.ponerImagenes();
    
}

function dialogarV16Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV16",
        id: "dialogarV16Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV16-textos', {opacity:0, duration:1.5, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV17();
}

// V17

function dialogarV17(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV17';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v17-fondo.png', 'dialogarV17-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v17-textos.png', 'dialogarV17-textos');      
    vineta.despuesFx = dialogarV17Tl;
    vineta.ponerImagenes();
    
}

function dialogarV17Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV17",
        id: "dialogarV17Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV17-textos', {opacity:0, top:-10, x:10, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV17-fondo', {opacity:0, duration:1, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV18();
}

// V18

function dialogarV18(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV18';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v18-textos.png', 'dialogarV18-textos');      
    vineta.despuesFx = dialogarV18Tl;
    vineta.ponerImagenes();
    
}

function dialogarV18Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV18",
        id: "dialogarV18Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV18-textos', {opacity:0, duration:1, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v18V28Mistico.buffer);
        }
    })

    timeLines.push(tl);

    dialogarV19();
}

// V19

function dialogarV19(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV19';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v19-fondo.png', 'dialogarV19-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v19-textos.png', 'dialogarV19-textos');      
    vineta.despuesFx = dialogarV19Tl;
    vineta.ponerImagenes(); 
}

function dialogarV19Tl(){

    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV19",
        id: "dialogarV19Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV19-textos', {opacity:0, duration:1})

    timeLines.push(tl);

    dialogarV20();
}

// V20

function dialogarV20(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV20';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v20-textos.png', 'dialogarV20-textos');    
    vineta.despuesFx = dialogarV20Tl;
    vineta.ponerImagenes();
    
}

function dialogarV20Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV20",
        id: "dialogarV20Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV20-textos', {opacity:0, top:-10, x:10, duration:0.4, ease:"sine.inOut"})
  
    timeLines.push(tl);

    dialogarV21();
}

// V21

function dialogarV21(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV21';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v21-fondo.png', 'dialogarV21-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v21-textos.png', 'dialogarV21-textos');      
    vineta.despuesFx = dialogarV21Tl;
    vineta.ponerImagenes();
    
}

function dialogarV21Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV21",
        id: "dialogarV21Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV21-fondo', {opacity:0, duration:1, ease:"sine.inOut"})
    timeLines.push(tl);

    dialogarV22();
}

// V22

function dialogarV22(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV22';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v22-fondo.png', 'dialogarV22-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v22-textos.png', 'dialogarV22-textos');      
    vineta.despuesFx = dialogarV22Tl;
    vineta.ponerImagenes();  
}

function dialogarV22Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV22",
        id: "dialogarV22Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV22-textos', {opacity:0, top:-10, x:-10, duration:0.3, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV23();
}

// V23

function dialogarV23(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV23';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v23-fondo.png', 'dialogarV23-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v23-img.png', 'dialogarV23-img');    
    vineta.adjuntaImagen('./assets/dialogar/imgs/v23-textos.png', 'dialogarV23-textos');           
    vineta.despuesFx = dialogarV23Tl;
    vineta.ponerImagenes();    
}

function dialogarV23Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV23",
        id: "dialogarV23Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV23-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v23V27Ranas.buffer);
        }
    })

    timeLines.push(tl);

    dialogarV24();
}

// V24

function dialogarV24(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV24';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v24-fondo.png', 'dialogarV24-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v24-textos.png', 'dialogarV24-textos');      
    vineta.despuesFx = dialogarV24Tl;
    vineta.ponerImagenes();
    
}

function dialogarV24Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV24",
        id: "dialogarV24Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV24-fondo', {opacity:0, top:-10, x:-10, duration:0.2, ease:"sine.inOut"})
    .from('.dialogarV24-textos', {opacity:0, y:4, duration:0.5, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV25();
}

// V25

function dialogarV25(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV25';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v25-fondo.png', 'dialogarV25-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v25-textos.png', 'dialogarV25-textos');      
    vineta.despuesFx = dialogarV25Tl;
    vineta.ponerImagenes();
    
}

function dialogarV25Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV25",
        id: "dialogarV25Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV25-textos', {opacity:0, y:-4, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV25-fondo', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    dialogarV26();
}

// V26

function dialogarV26(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV26';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v26-fondo.png', 'dialogarV26-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v26-textos.png', 'dialogarV26-textos');      
    vineta.despuesFx = dialogarV26Tl;
    vineta.ponerImagenes();
    
}

function dialogarV26Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV26",
        id: "dialogarV26Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV26-fondo', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})
    .from('.dialogarV26-textos', {opacity:0, y:10, duration:0.5, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    dialogarV27();
}

// V27

function dialogarV27(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV27';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v27-fondo.png', 'dialogarV27-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v27-textos.png', 'dialogarV27-textos');      
    vineta.despuesFx = dialogarV27Tl;
    vineta.ponerImagenes();
    
}

function dialogarV27Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV27",
        id: "dialogarV27Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v15V27Lluvia.buffer);
        }
    })
    .from('.dialogarV27-textos', {opacity:0, duration:1, ease:"sine.inOut"})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v23V27Ranas.buffer);
        }
    })
    

    timeLines.push(tl);

    dialogarV28();
}

// V28

function dialogarV28(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV28';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v28-textos.png', 'dialogarV28-textos');      
    vineta.despuesFx = dialogarV28Tl;
    vineta.ponerImagenes();
    
}

function dialogarV28Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV28",
        id: "dialogarV28Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV28-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV29();
}

// V29

function dialogarV29(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV29';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v29-fondo.png', 'dialogarV29-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v29-textos.png', 'dialogarV29-textos');      
    vineta.despuesFx = dialogarV29Tl;
    vineta.ponerImagenes();
    
}

function dialogarV29Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV29",
        id: "dialogarV29Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v29Ranas.buffer);
        }
    })
    .from('.dialogarV29-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV29-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    dialogarV30();
}

// V30

function dialogarV30(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV30';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v30-fondo.png', 'dialogarV30-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v30-textos.png', 'dialogarV30-textos');      
    vineta.despuesFx = dialogarV30Tl;
    vineta.ponerImagenes();
    
}

function dialogarV30Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV30",
        id: "dialogarV30Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV30-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV30-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    dialogarV31();
}

// V31

function dialogarV31(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV31';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v31-fondo.png', 'dialogarV31-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v31-textos.png', 'dialogarV31-textos');      
    vineta.despuesFx = dialogarV31Tl;
    vineta.ponerImagenes();
    
}

function dialogarV31Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV31",
        id: "dialogarV31Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV31-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV31-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')
    .call(()=>{
        if(audioManager.sonidoActivo && nombrePagina === '#dialogar'){
            audioManager.playSonido(audioManager.audiosDialogar.v31Mistico.buffer);
        }
    })

    timeLines.push(tl);

    dialogarV32();
}

// V32

function dialogarV32(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV32';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v32-fondo.png', 'dialogarV32-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v32-img.png', 'dialogarV32-img'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v32-textos.png', 'dialogarV32-textos');      
    vineta.despuesFx = dialogarV32Tl;
    vineta.ponerImagenes();
    
}

function dialogarV32Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV32",
        id: "dialogarV32Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV32-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV32-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')
    .from('.dialogarV32-img', {opacity:0, y:-10, duration:0.8, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    dialogarV33();
}

// V33

function dialogarV33(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV33';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v33-fondo.png', 'dialogarV33-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v33-img.png', 'dialogarV33-img'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v33-textos.png', 'dialogarV33-textos');      
    vineta.despuesFx = dialogarV33Tl;
    vineta.ponerImagenes();
    
}

function dialogarV33Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV33",
        id: "dialogarV33Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV33-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV33-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')
    .from('.dialogarV33-img', {opacity:0, y:-10, duration:0.8, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    dialogarV34();
}

// V34

function dialogarV34(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV34';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v34-textos.png', 'dialogarV34-textos');      
    vineta.despuesFx = dialogarV34Tl;
    vineta.ponerImagenes();
    
}

function dialogarV34Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV34",
        id: "dialogarV34Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV34-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV35();
}

// V35

function dialogarV35(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV35';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v35-fondo.png', 'dialogarV35-fondo');      
    vineta.despuesFx = dialogarV35Tl;
    vineta.ponerImagenes();
    
}

function dialogarV35Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV35",
        id: "dialogarV35Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV35-fondo', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})

    timeLines.push(tl);

    dialogarV36();
}

// V36

function dialogarV36(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV36';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v36-fondo.png', 'dialogarV36-fondo');  
    vineta.adjuntaImagen('./assets/dialogar/imgs/v36-textos.png', 'dialogarV36-textos');      
    vineta.despuesFx = dialogarV36Tl;
    vineta.ponerImagenes();
    
}

function dialogarV36Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV36",
        id: "dialogarV36Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV36-textos', {opacity:0, top:10, x:10, duration:0.5, ease:"sine.inOut"})
    .from('.dialogarV36-fondo', {opacity:0, y:-10, duration:0.5, ease:"sine.inOut"}, '<0.2')

    timeLines.push(tl);

    dialogarV37();
}

// V37

function dialogarV37(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV37';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon(); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v37-textos.png', 'dialogarV37-textos');      
    vineta.despuesFx = dialogarV37Tl;
    vineta.ponerImagenes();
    
}

function dialogarV37Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV37",
        id: "dialogarV37Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV37-textos', {opacity:0, top:10, x:10, duration:0.2, ease:"sine.inOut"})
    
    timeLines.push(tl);

    dialogarV38();
}

// V38

function dialogarV38(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'dialogarV38';

    const vineta = new Vineta();
    vineta.parentEl = section;
    vineta.ponerLoadingIcon();
    vineta.adjuntaImagen('./assets/dialogar/imgs/v38-fondo.png', 'dialogarV38-fondo'); 
    vineta.adjuntaImagen('./assets/dialogar/imgs/v38-textos.png', 'dialogarV38-textos');      
    vineta.despuesFx = dialogarV38Tl;
    vineta.ponerImagenes();    
}

function dialogarV38Tl(){
    const tl = gsap.timeline({scrollTrigger:{
        trigger:".dialogarV38",
        id: "dialogarV38Trigger",
        start:"top 50%",
        end:`bottom ${pBottom}%`,
        markers:false,
        toggleActions:"play complete reverse reset"
    }})
    .from('.dialogarV38-textos', {opacity:0, duration:0.8, ease:"sine.inOut"})
    .from('.dialogarV38-fondo', {opacity:0, y:10, duration:0.8, ease:"sine.inOut"}, '<0.4')

    timeLines.push(tl);

    preguntasCap3();
}

function preguntasCap3(){
    const section = cE("section", dialogarVinetasContenedor);
    section.className = 'cap1Preguntas';

    const iframeP = cE("iframe", section);
    iframeP.src = './iframes/preguntas/index.html?n=143&v=3';
}



