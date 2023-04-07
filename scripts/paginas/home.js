function pintarHome(){
    homeContenedor.innerHTML = "";

    //pintarImgHome(homeContenedor);

    let divG = cE("div", homeContenedor);
    divG.className = 'home-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-home-m.jpg?n=143' : './assets/imgs/header-home.jpg?n=143';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCentro = cE("div", divG);
    divCentro.className = 'home-centro'

    for(var menuObj in menu){

        let divC = cE("div", divCentro);

        adjuntarIrAMenuS(divC, menuObj);        

        let img = cE("img", divC);
        img.src = menu[menuObj].img + '?n=143';
    }

    pintarFooter(homeContenedor);
}

function pintarImgHome(parentEl){
    const divImgHome = cE("div", parentEl);
    divImgHome.className = 'div-img-home';

    const imgHome = cE("img", divImgHome);
    imgHome.src = './assets/imgs/fondo-home.jpg?n=143';
}

function pintarFooter(parentEl, azul){
    const footer = cE('footer', parentEl);
    footer.className = azul ? 'footer-azul' : 'footer-verde';

    const divImgs = cE('div', footer);

    const imgUrl = azul ? './assets/imgs/footer.png?n=143' : './assets/imgs/footer.png?n=143' 

    const img = cE('img', divImgs);
    img.src = imgUrl;
}

function adjuntarIrAMenuS(divC, menuObj){
    divC.addEventListener('click', ()=>{
        window.location.href = menu[menuObj].enlace; 
    })
}
