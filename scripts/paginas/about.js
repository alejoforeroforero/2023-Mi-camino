function pintarAbout(){
    juegosContenedor.innerHTML = "";

    let divG = cE("div", juegosContenedor);
    divG.className = 'about-menu';

    const imgUrl = window.innerWidth < 421 ? './assets/imgs/header-about-m.jpg?n=142' : './assets/imgs/header-about.jpg?n=142';

    const imgHeader = cE("img", divG);
    imgHeader.className = 'img-header';
    imgHeader.src = imgUrl;

    let divCG = cE("div", divG);
    divCG.className = "about";

    let divC = cE("div", divCG);  
    
    let p = cE('p', divC);
    p.innerHTML = 'Mi Camino es una serie de cómics interactivos, cuyo objetivo es generar confianza y autoeficacia entre los niños, niñas y adolescentes (NNA) que viven en comunidades de alto riesgo en Colombia. Esto se debe a que los y las jóvenes en los márgenes del país, frente a contextos de violencia prolongada, pueden experimentar identidades negativas, lo que apuntala un pesimismo general sobre sus vidas y las oportunidades disponibles para ellos. Unirse a un grupo armado o recurrir al crimen puede, por lo tanto, aparecer a menudo como la única solución a esta crisis de inseguridad ontológica. Como respuesta, y basándose en el marco pedagógico del proyecto Mi Historia, los cómics promueven Habilidades para la paz específicas, aumentando la autoestima y promoviendo una comprensión más profunda de las implicaciones de la violencia. La primera historieta, Dabeiba: un viaje en el tiempo, apela específicamente a los NNA indígenas de la comunidad Emberá de Santa Cecilia, Risaralda; una comunidad que se ha visto afectada de manera desproporcionada por el conflicto. Los enfrentamientos entre facciones armadas rivales provocan desplazamientos periódicos; las niñas y las mujeres son objeto de violencia sexual y los jóvenes indígenas son vulnerables al reclutamiento por parte de grupos armados no estatales. El cómic va acompañado de una unidad didáctica en la que profesores y otros profesionales pueden profundizar en los temas del cuento con sus alumnos. También hay juegos destinados a involucrar a los NNA lectores y usuarios con los objetivos de aprendizaje del cómic.'

    pintarFooter(juegosContenedor);
}