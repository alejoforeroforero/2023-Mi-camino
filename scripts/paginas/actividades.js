function pintarActividades(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'actividades-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-actividades-m.jpg?n=145' :'./assets/imgs/header-actividades.jpg?n=145';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCG = cE("div", divG);
    divCG.className = "actividades";    

    let divC = cE("div", divCG); 
    
    let p = cE('p', divC);
    p.innerHTML = 'Nuestro primer cómic, Dabeiba: un viaje en el tiempo, viene acompañado de un conjunto de actividades didácticas, que se pueden descargar a continuación. Estas actividades están destinadas a que los profesores y otros profesionales las completen con sus alumnos, y están pensadas para completarlas después de leer el cómic. Las actividades promueven <a href="https://mihistoria.co/habilidades-para-la-paz/" target="_Blank">Habilidades para la paz</a> que tienen como objetivo mejorar la autoeficacia de los jóvenes participantes.'

    let a = cE("a", divC);
    a.innerHTML = '';
    a.target = '_blank';
    a.href = './assets/pdf/unidad-didactica.pdf?n=145';

    let img = cE('img', a);
    img.src = './assets/imgs/descarga-pdf.png'

    pintarFooter(juegosContenedor);
}