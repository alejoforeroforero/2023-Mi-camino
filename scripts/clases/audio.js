class AudioManager{  
    
    sources = [];
    activo = false;
    sonidoActivo = false;
    apagoElAudio = false;
    loadingIcon;
    indiceDescarga = 0;
    yaDescargoCap1 = false;
    yaDescargoCap2 = false;
    yaDescargoCap3 = false;
    yaDescargoCasa = false;
    yaDescargoCafetal = false;
    yaDescargoRisaralda = false;

    audiosBase = {
        c1V15ConversionArbol:{
            src:'assets/cap1/audios/v15-conversion-arbol.mp3?n=143',
            buffer:null
        },
        c1V0Portada:{
            src:'assets/cap1/audios/v0-portada.mp3?n=143',
            buffer:null
        },
        c1V1PCuadrito:{
            src:'assets/cap1/audios/v1-cuadrito.mp3?n=143',
            buffer:null
        },        
        c2V1ArbolMistico:{
            src:'assets/cap2/audios/v1-arbol-mistico.mp3?n=143',
            buffer:null
        },
        c2Ambiente:{
            src:'assets/cap2/audios/ambiente.mp3?n=143',
            buffer:null
        },
        c3Ambiente:{
            src:'assets/cap3/audios/ambiente.mp3?n=143',
            buffer:null
        },
        c1Sapito2:{
            src:'assets/cap1/audios/sapito2.mp3?n=143',
            buffer:null
        },
        salto:{
            src:'assets/audios/salto.mp3?n=143',
            buffer:null
        },
    }

    audiosCap1 = {
        c1V1v6v8v14Desierto:{
            src:'assets/cap1/audios/v2-v6-v8-v14-desierto.mp3?n=143',
            buffer:null
        },
        c1Sapito1:{
            src:'assets/cap1/audios/sapito1.mp3?n=143',
            buffer:null
        },
        c1Sapito2:{
            src:'assets/cap1/audios/sapito2.mp3?n=143',
            buffer:null
        },
        c1Sapito3:{
            src:'assets/cap1/audios/sapito3.mp3?n=143',
            buffer:null
        }, 
        c1V3Baile:{
            src:'assets/cap1/audios/v3-baile.mp3?n=143',
            buffer:null
        },
        c1V4v5Motobomba:{
            src:'assets/cap1/audios/v4-v5-motobomba.mp3?n=143',
            buffer:null
        },
        c1V6PasosArena:{
            src:'assets/cap1/audios/v6-pasos-arena.mp3?n=143',
            buffer:null
        },
        c1V8Sequia:{
            src:'assets/cap1/audios/v8-sequia.mp3?n=143',
            buffer:null
        },
        c1V9Camiones:{
            src:'assets/cap1/audios/v9-camiones.mp3?n=143',
            buffer:null
        },
        c1V9Flauta:{
            src:'assets/cap1/audios/v9-flauta.mp3?n=143',
            buffer:null
        },
        c1V11v14ArbolMistico:{
            src:'assets/cap1/audios/v11-v14-arbol-mistico.mp3?n=143',
            buffer:null
        },
        c1V16v28Selva:{
            src:'assets/cap1/audios/v16-v28-selva.mp3?n=143',
            buffer:null
        },
        c1V17Risas:{
            src:'assets/cap1/audios/v17-risas.mp3?n=143',
            buffer:null
        },
        c1V19v28Mistico:{
            src:'assets/cap1/audios/v19-v28-mistico.mp3?n=143',
            buffer:null
        }
    }

    audiosCap2 = {        
        c2V5Flauta:{
            src:'assets/cap2/audios/v5-flauta.mp3?n=143',
            buffer:null
        },
        c2V8PasosCorriendo:{
            src:'assets/cap2/audios/v8-pasos-corriendo.mp3?n=143',
            buffer:null
        } 
    }

    audiosRisaralda = {        
        risaraldaV1Ambiente:{
            src:'assets/risaralda/audios/ambiente.mp3?n=143',
            buffer:null
        },
        risaraldaV1Recolecta:{
            src:'assets/risaralda/audios/v1-recolecta.mp3?n=143',
            buffer:null
        },
        risaraldaV2Sevan:{
            src:'assets/risaralda/audios/v2-se-van.mp3?n=143',
            buffer:null
        }
    }

    audiosCafetal = {        
        cafetalV1Ambiente:{
            src:'assets/cafetal/audios/ambiente.mp3?n=143',
            buffer:null
        },
        cafetalV2Sevan:{
            src:'assets/cafetal/audios/v2-se-van.mp3?n=143',
            buffer:null
        }
    }

    audiosCasa = {        
        casaV1Ambiente:{
            src:'assets/casa/audios/ambiente.mp3?n=143',
            buffer:null
        },
        casaV1Musica:{
            src:'assets/casa/audios/musica.mp3?n=143',
            buffer:null
        },
        casaV14ArbolMistico:{
            src:'assets/casa/audios/v14-arbol-mistico.mp3?n=143',
            buffer:null
        },
        casaSapito:{
            src:'assets/casa/audios/sapito1.mp3?n=143',
            buffer:null
        }
    }

    audiosCap3 = {        
        c3V3Buldozer:{
            src:'assets/cap3/audios/v3-buldozer.mp3?n=143',
            buffer:null
        },
        c3V4V8Protesta:{
            src:'assets/cap3/audios/v4-v8-protesta.mp3?n=143',
            buffer:null
        },
        c3V6Dinero:{
            src:'assets/cap3/audios/v6-dinero.mp3?n=143',
            buffer:null
        },
        c3V9V13Mistico:{
            src:'assets/cap3/audios/v9-v13-mistico.mp3?n=143',
            buffer:null
        },
        c3V11Relampago:{
            src:'assets/cap3/audios/v11-relampago.mp3?n=143',
            buffer:null
        },
        c3V12Relampago:{
            src:'assets/cap3/audios/v12-relampago.mp3?n=143',
            buffer:null
        },
        c3V15Peleas:{
            src:'assets/cap3/audios/v15-peleas.mp3?n=143',
            buffer:null
        }     
    }

    audiosDefender = {        
        defenderAmbiente:{
            src:'assets/defender/audios/ambiente.mp3?n=143',
            buffer:null
        },
    }

    audiosDialogar = {        
        ambiente:{
            src:'assets/dialogar/audios/ambiente.mp3?n=143',
            buffer:null
        },
        v1Pasos:{
            src:'assets/dialogar/audios/v1-pasos.mp3?n=143',
            buffer:null
        },
        v15Llanto:{
            src:'assets/dialogar/audios/v15-llanto.mp3?n=143',
            buffer:null
        },
        v15V27Lluvia:{
            src:'assets/dialogar/audios/v15-v27-lluvia.mp3?n=143',
            buffer:null
        },
        v18V28Mistico:{
            src:'assets/dialogar/audios/v18-v28-ambiente-mistico.mp3?n=143',
            buffer:null
        },
        v23V27Ranas:{
            src:'assets/dialogar/audios/v23-v27-encuentro-ranas.mp3?n=143',
            buffer:null
        },
        v29Ranas:{
            src:'assets/dialogar/audios/v29-ambiente-ranas.mp3?n=143',
            buffer:null
        },
        v31Mistico:{
            src:'assets/dialogar/audios/v31-mistico.mp3?n=143',
            buffer:null
        },
    }

    async descargarSonidos(seccion){

        let audios;

        if(seccion === 'base'){
            audios = this.audiosBase;
        }else if(seccion === 'cap1'){
            audios = this.audiosCap1;
        }else if(seccion === 'cap2'){
            audios = this.audiosCap2;
        }else if(seccion === 'risaralda'){
            audios = this.audiosRisaralda;
        }else if(seccion === 'cafetal'){
            audios = this.audiosCafetal;
        }else if(seccion === 'casa'){
            audios = this.audiosCasa;
        }else if(seccion === 'cap3'){
            audios = this.audiosCap3;
        }else if(seccion === 'defender'){
            audios = this.audiosDefender;
        }else if(seccion === 'dialogar'){
            audios = this.audiosDialogar;
        }

        if(audios){
            this.indiceDescarga = 0;
            if(!this.loadingIcon){
                this.loadingIcon = cE('div', document.body);
                this.loadingIcon.className = 'audio-loading';
            }

            let divMensaje = cE('div', this.loadingIcon);
            divMensaje.innerHTML = "Estamos descargando algunos archivos para mejorar tu experiencia";
    
            let divPorcentaje = cE('div', this.loadingIcon);
            divPorcentaje.innerHTML = '0%'
    
            const loadingImg = cE('img', this.loadingIcon);
            loadingImg.src = './assets/imgs/loading-image.gif'; 
    
            for(let indice in audios){
                let audio = audios[indice];
                let response = await fetch(audio.src);
                const responseData = await response.arrayBuffer();
    
                this.indiceDescarga++;
                let porcentaje = Math.floor((this.indiceDescarga*100)/Object.keys(audios).length); 
                divPorcentaje.innerHTML = porcentaje < 100 ? `${porcentaje}%` : 'espera un momento más por favor';
    
                await this.context.decodeAudioData(responseData, (buffer) => {
                    audio.buffer = buffer;               
                }, this.onError); 
            }            
        }

        if(this.loadingIcon){
            this.loadingIcon.style.display = 'none';
        }
    }

    pintarIcono(){
        this.icono = cE("div", document.body);
        this.icono.style.visibility = 'hidden';
        this.icono.className = 'audio-contenedor';

        this.icono.addEventListener('click', ()=>{
            this.apagarEscender();
        })

        const divA = cE("div", this.icono);
        
        this.iconoImg = cE("img", divA);
        this.iconoImg.src = "./assets/imgs/audio-on.png";
    }

    apagarEscender(){
        if(!this.apagoElAudio){
            this.apagoElAudio = true;
            this.sonidoActivo = true;            
        }else{
            this.apagoElAudio = false;
            this.sonidoActivo = false;
        }

        this.toogleIcono();
    }

    toogleIcono(){
        if(this.iconoImg){
            if(this.sonidoActivo){
                this.iconoImg.src = "./assets/imgs/audio-off.png";
                this.sonidoActivo = false;
                this.pararAudios();
            }else{
                this.iconoImg.src = "./assets/imgs/audio-on.png";
                this.sonidoActivo = true;
                this.ponerAudios();
            }
        }
    }

    playSonido(buffer){ 
        this.source1 = this.context.createBufferSource(); 
        this.source1.buffer = buffer; 
        this.source1.connect(this.context.destination);
        this.source1.loop = false; 
        this.source1.start(0);

        this.sources.push(this.source1);
    }

    loopSonido(buffer){            
        this.source2 = this.context.createBufferSource(); 
        this.source2.buffer = buffer; 
        this.source2.connect(this.context.destination);
        this.source2.loop = true; 
        this.source2.start(0);

        this.sources.push(this.source2);
    }

    pararAudios() {
    this.sonidoActivo = false; 
        for(var source of this.sources){
            source.disconnect(0);
        }
    }

    ponerAudios() {
        this.sonidoActivo = true; 
        this.playSonido(this.audios.c1V15ConversionArbol.buffer);
    }

    onError(){
        alert('algo falló');
    }
}

// function pararAudios(audioImg) {
//     estaSonando = false;
//     audioImg.src = "../imgs/audio-off.png";
//     audioManager.pararSonidos();
//   }
  
//   function ponerAudios(audioImg) {
//     estaSonando = true;
//     audioImg.src = "../imgs/audio-on.png";
//     audioManager.playSonido(audioManager.audios.v15ConversionArbol.buffer);
//   }
  
 /*  
 for(let indice in this.audios){
    let audio = this.audios[indice];
    let response = await fetch(audio.src);
    const reader = response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    let receivedLength = 0; 
    let chunks = []; 
    while(true) {
        const {done, value} = await reader.read();
        if (done) {
            divMensaje.innerHTML = `${porcentaje}%`;
            break;
        }
        chunks.push(value);
        receivedLength += value.length;
        console.log(`Received ${receivedLength} of ${contentLength}`)
    }
} */   