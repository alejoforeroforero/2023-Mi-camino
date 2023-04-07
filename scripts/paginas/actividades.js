function pintarActividades(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'actividades-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-actividades-m.jpg?n=143' :'./assets/imgs/header-actividades.jpg?n=143';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCG = cE("div", divG);
    divCG.className = "actividades";    

    let divC = cE("div", divCG); 
    
    // let p = cE('p', divC);
    // p.innerHTML = 'En esta unidad podrás........'

    let a = cE("a", divC);
    a.innerHTML = '';
    a.target = '_blank';
    a.href = './assets/pdf/unidad-didactica.pdf?n=143';

    let img = cE('img', a);
    img.src = './assets/imgs/descarga-pdf.png'

    pintarFooter(juegosContenedor);
}