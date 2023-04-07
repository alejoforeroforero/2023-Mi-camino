function pintarHeader(contenedor){
    contenedor.innerHTML = "";

    let divM = cE("div", contenedor);
    divM.className = "menu oculto";

    let divX = cE('div', divM);
    divX.className = 'cerrar';
    divX.innerHTML = "X";
    divX.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
    })

    let divL = cE("div", divM);
    divL.className = 'menu-lista';
    pintarMenu(divL, divM);

    let divH = cE("div", contenedor);
    divH.className = "hamburguesa";
    divH.addEventListener('click', ()=>{
        divM.classList.remove("oculto");
        divM.classList.add("visible");
    })

    for(var i=0; i<3; i++){
        let div = cE("div", divH);
    }   

    let divTitulo = cE("div", contenedor);
    divTitulo.className = 'titulo'

    const img = cE("img", divTitulo);
    img.src = './assets/imgs/logo-titulo.png';
}

function pintarMenu(contenedor, divM){

    let pH = cE("p", contenedor);
    pH.innerHTML = "Home";
    pH.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#home"; 
        }, 1000);        
    })

    let p1 = cE("p", contenedor);
    p1.innerHTML = "Cómic";
    p1.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#comic"; 
        }, 1000);        
    })

    let p4 = cE("p", contenedor);
    p4.innerHTML = "Juegos";
    p4.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#juegos"; 
        }, 1000);
    })

    let p6 = cE("p", contenedor);
    p6.innerHTML = "Actividades";
    p6.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#actividades"; 
        }, 1000);
    })

    let p7 = cE("p", contenedor);
    p7.innerHTML = "About";
    p7.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#about"; 
        }, 1000);
    })

    let p5 = cE("p", contenedor);
    p5.innerHTML = "Créditos";
    p5.addEventListener('click', ()=>{
        divM.classList.remove("visible");
        divM.classList.add("oculto");
        setTimeout(()=>{
            window.location.href = "#creditos"; 
        }, 1000);
    })
}

