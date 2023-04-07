function pintarCreditos(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'creditos-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-creditos-m.jpg?n=143' : './assets/imgs/header-creditos.jpg?n=143';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCentro = cE("div", divG);
    divCentro.className = 'creditos-centro';

    let divCG = cE("div", divCentro);
    divCG.className = "creditos-c";

    let divC = cE("div", divCG);    

    let p = cE("p", divC);
    p.innerHTML = "Global Challenges Research Fund (GCRF) <br>"+ 
    "Bournemouth University (BU)<br>"+
    "Center for Excellence and Media Practice (CEMP) <br>"+
    "Taller de Vida"

    let divCr = cE("div", divCG);

    let cr1 = new CreditosObj();
    cr1.titulo = 'Dirección del proyecto';
    cr1.parrafo = "Karen Fowler-Watt y Mathew H. Charles";
    cr1.pintar(divCr);

    let cr2 = new CreditosObj();
    cr2.titulo = 'Edición';
    cr2.parrafo = "Mathew H. Charles";
    cr2.pintar(divCr);

    let cr4 = new CreditosObj();
    cr4.titulo = 'Autoría';
    cr4.parrafo = "Carlos Javier Amaya";
    cr4.pintar(divCr);

    let cr5 = new CreditosObj();
    cr5.titulo = 'Ilustración y diseño';
    cr5.parrafo = "Paola Andrea Albao Delgadillo";
    cr5.pintar(divCr);

    let cr6 = new CreditosObj();
    cr6.titulo = 'Ilustración adicional';
    cr6.parrafo = "Julián David Saravia Sánchez <br>" +
    "Vivian Reyes";
    cr6.pintar(divCr);

    let cr7 = new CreditosObj();
    cr7.titulo = 'Consultora Psicosocial';
    cr7.parrafo = "Stella Duque";
    cr7.pintar(divCr);

    let cr8 = new CreditosObj();
    cr8.titulo = 'Traducción';
    cr8.parrafo = "Anacely Saigama";
    cr8.pintar(divCr);

    let cr9 = new CreditosObj();
    cr9.titulo = 'Programación y diseño web';
    cr9.parrafo = "Alejandro Forero";
    cr9.pintar(divCr);

    let cr10 = new CreditosObj();
    cr10.titulo = 'Sonido';
    cr10.parrafo = "Carolina Lucio";
    cr10.pintar(divCr);

    let cr3 = new CreditosObj();
    cr3.titulo = 'Con la participación de';
    cr3.parrafo = "Andrea Agualimpia Mena, Karime Chala Renteria, Camila Campaña Mena, Karabi Nacavera Flores, Shirly Nacavera Flores, Nayibe Siagama Namundia, Keisury Nacavera Guasiruma, Jhon Faber Nacequia Candidos, Sandra Viviana Nacequia Candidos, Yusney Nacavera Nacequia, Manuel Medina Carillo, Weimar Moreno Escobar, Elmer Gonzales Queragama, Mario Libia Restrepo Queragama, Blanca Rosa Restrepo Charicha, Emilia Nequeta Queragama, Jhon Jairo Queragama Murillo, Jesús Gonzales Queragama, Enrique Nequito Restrepo, Diana Patricia Restrepo Nequito, María Luz Mejía Sintua, Yaneth Nequeta Baniama, Melissa Queragama Siagama, Estela Restrepo Queragama, María Luz Restrepo Charicha, Álvaro Niaza Bateza, Olivia Charicha Aizama, Hasbleidy Mena.";
    cr3.pintar(divCr);

    pintarFooter(juegosContenedor, true);
}

class CreditosObj{

    titulo;
    parrafo;

    pintar(parentEl){

        let div = cE("div", parentEl)

        let h1 = cE("h1", div);
        h1.innerHTML = this.titulo;

        let p = cE("p", parentEl);
        p.innerHTML = this.parrafo;
    }
}