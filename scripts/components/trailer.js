function pintarTrailer(){
    const divT = cE("div", document.body);
    divT.className = 'trailer';

    const divV = cE("div", divT);

    const span = cE("span", divV);
    span.className = 'x-video';
    span.innerHTML = "X";
    span.addEventListener('click', ()=>{
        divT.innerHTML = "";
        document.body.removeChild(divT);

        if(!audioManager.activo){
            audioManager.activo = true;
            audioManager.sonidoActivo = true;
            audioManager.playSonido(audioManager.audiosBase.c1V15ConversionArbol.buffer);
            //audioManager.toogleIcono();
        }
    })

    const video = cE('video', divV)
    video.src = './assets/videos/trailer.mp4';
    video.poster = './assets/imgs/poster-video.jpg';
    video.controls = true;

    
}