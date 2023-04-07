let respuestasCap1 = [];

function cE(el, padre){
    let htmlObj = document.createElement(el);
    padre.appendChild(htmlObj);

    return htmlObj;
}

class Pregunta{
    enunciado = '';
    respuestas=[];
    boton;

    cE(el, padreEl){
        let htmlEl = document.createElement(el);
        padreEl.appendChild(htmlEl);
        return htmlEl;
    }

    agregar(pregunta, acertada){
        let preguntaObj = {
            texto:pregunta,
            acertada:acertada
        }
        this.respuestas.push(preguntaObj);
    }    

    pintar(padreEl){

        let div = this.cE('div', padreEl);
        div.innerHTML = this.enunciado;

        let ol = this.cE('ol', padreEl);
        ol.type = 'a';

        for(let respuesta of this.respuestas){
            let li = this.cE("li", ol);
            
            let input = this.cE('input', li);
            input.type = 'radio';
            input.name = 'respuesta'
            input.value = respuesta.acertada;
            input.texto = respuesta.texto;
            input.id = respuesta.texto;
            input.addEventListener('click', ()=>{
                this.boton.disabled = false;
            })

            let label = this.cE('label', li);
            label.for = respuesta.texto;
            label.innerHTML = respuesta.texto;
        }

        let divB = this.cE('div', padreEl);
        divB.className = 'divB';

        let boton = this.cE("button", divB);
        boton.innerHTML = "Responder";
        boton.disabled = true;
        boton.addEventListener('click', ()=>{
            let elementoActivo = document.querySelector('input[name="respuesta"]:checked');

            let respuestaObj = {
                enunciado:this.enunciado,
                respuesta:elementoActivo.texto,
                valor:elementoActivo.value
            }
            respuestasCap1.push(respuestaObj);

            if(elementoActivo) {

                this.alAcertar();             
            }
        })

        this.boton = boton;
    }
}


let divTitulo = document.getElementById('titulo');
let divEnunciado = document.getElementById('enunciado');
let divPreguntas = document.getElementById('preguntas');

correrPreguntas()

function correrPreguntas(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);  
    const numero = urlParams.get('v');
    //const numero = 1;

    if(numero == 1){
        divTitulo.innerHTML = '1er Capítulo: El árbol de Caragabí';
        divEnunciado.innerHTML = "Hora de probar qué tanto hemos aprendido de nuestras heroínas y sus historias. Lee las siguientes preguntas y selecciona la respuesta correcta. Si no estás completamente seguro o segura de tu respuesta, te invitamos a explorar la historia de nuevo.";
        pregunta1();
    }else if(numero == 2){
        divTitulo.innerHTML = 'Capítulo 2: Mamita (Abuela)';
        divEnunciado.innerHTML = "Luego de saber que Dabeiba viaja en el tiempo y que no recuerda su nombre, ayúdanos a identificar partes importantes de este segundo capítulo que te servirán para entender toda la historia:"
        pregunta1C2();
    }else{
        divTitulo.innerHTML = 'Capítulo 3: La Ruta de las Ranas';
        divEnunciado.innerHTML = "Luego de que la abuela logra resolver el conflicto del matrimonio, un nuevo reto llega a la vida de Dabeiba, revisemos este tercer capítulo para ver si comprendiste toda la historia:";
        pregunta1C3();
    } 
}

function pregunta1(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Dónde se ubica la historia principal?";
    pregunta.agregar('En una aldea indígena cerca de la montaña', false);
    pregunta.agregar('Bagadó', true);
    pregunta.agregar('El pueblo de Andágueda', false);
    pregunta.agregar('Caragabí', false);
    pregunta.alAcertar = pregunta2;
    pregunta.pintar(divPreguntas);
}

function pregunta2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Quién es Orkokoe?";
    pregunta.agregar('Un guerrero de la comunidad Emberá', false);
    pregunta.agregar('Un ave', false);
    pregunta.agregar('Un anima-droide con forma de rana', true);
    pregunta.agregar('Un grillo', false);
    pregunta.alAcertar = pregunta3;
    pregunta.pintar(divPreguntas);
}

function pregunta3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Qué vinieron a hacer el grupo de personas desconocido?";
    pregunta.agregar('Saquear el pueblo', false);
    pregunta.agregar('Robarse el agua del poso', true);
    pregunta.agregar('Atacar el viejo bosque', false);
    pregunta.agregar('Cortar el árbol de Caragabí', false);
    pregunta.alAcertar = pregunta4;
    pregunta.pintar(divPreguntas);
}

function pregunta4(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué ambos personajes tienen el mismo nombre?";
    pregunta.agregar('Son homónimas por coincidencia', false);
    pregunta.agregar('Se ponen el mismo nombre porque la del futuro no lo recuerda', false);
    pregunta.agregar('Son la misma persona', true);
    pregunta.agregar('No tienen el mismo nombre', false);
    pregunta.alAcertar = pregunta5;
    pregunta.pintar(divPreguntas);
}

function pregunta5(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Adónde la manda Caragabí?";
    pregunta.agregar('Al pasado a encontrarse con la hija de su tío', false);
    pregunta.agregar('Al futuro', false);
    pregunta.agregar('Al pasado a encontrarse con ella misma', true);
    pregunta.agregar('A un bosque desconocido', false);
    pregunta.alAcertar = pintarResultado;
    pregunta.pintar(divPreguntas);
}

function pintarResultado(){

    let respuestasBuenas = 0;

    divPreguntas.innerHTML = '';

    let ul = cE("ul", divPreguntas);

    for(var respuesta of respuestasCap1){

        let li = cE("li", ul);

        let spanE = cE("span", li);
        spanE.innerHTML = respuesta.enunciado;

        let spanR = cE("span", li);
        spanR.className = (respuesta.valor == 'true') ? 'respuesta-correcta' : 'respuesta-incorrecta';
        spanR.innerHTML = respuesta.respuesta;

        if(respuesta.valor == 'true'){
            respuestasBuenas++;
        }
    }

    let p = cE("p", divPreguntas);
    p.innerHTML = `${respuestasBuenas} de ${respuestasCap1.length}`;

    let button = cE("button", divPreguntas);
    button.innerHTML = "Volver a responder"
    button.addEventListener('click', ()=>{
        respuestasCap1 = [];
        pregunta1();
    })
}

// Preguntas Capitulo 2


function pregunta1C2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué Dabeiba quiere escaparse de su familia?";
    pregunta.agregar('No quiere a su familia', false);
    pregunta.agregar('Se siente maltratada por su padre', false);
    pregunta.agregar('La quieren casar con quien no conoce', true);
    pregunta.agregar('La quieren casar con un primo', false);
    pregunta.alAcertar = pregunta2C2;
    pregunta.pintar(divPreguntas);
}

function pregunta2C2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Qué hace el grupo de jóvenes que se lleva a Dabeiba?";
    pregunta.agregar('Recogen café', true);
    pregunta.agregar('Recogen flores', false);
    pregunta.agregar('Siembran aguacate', false);
    pregunta.agregar('Trabajan en una mina', false);
    pregunta.alAcertar = pregunta3C2;
    pregunta.pintar(divPreguntas);
}

function pregunta3C2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Cómo se da cuenta Dabeiba que no puede confaiar en ellos?";
    pregunta.agregar('No la invitan a salir', false);
    pregunta.agregar('Se da cuenta que se aprovechan de ella quitándole su sueldo', true);
    pregunta.agregar('Cuentan sus secretos a todo el mundo', false);
    pregunta.agregar('Se burlan de ella', false);
    pregunta.alAcertar = pregunta4C2;
    pregunta.pintar(divPreguntas);
}

function pregunta4C2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Quién termina convenciendo a la familia de reconsiderar lo del matrimonio?";
    pregunta.agregar('La mamá termina reflexionando y pidiéndole a Dabeiba que regrese', false);
    pregunta.agregar('La abuela pide que dejen a Dabeiba conocer más al muchacho y así decidir más adelante si se quiere o no casar', true);
    pregunta.agregar('El muchacho le propone a Dabeiba que mejor no se casen', false);
    pregunta.agregar('El papá de los Sinigüi desiste del compromiso', false);
    pregunta.alAcertar = pregunta5C2;
    pregunta.pintar(divPreguntas);
}

function pregunta5C2(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué la familia le pide a Dabeiba casarse sin querer?";
    pregunta.agregar('No quieren que un grupo de jóvenes se la lleven para explotarla', true);
    pregunta.agregar('La familia del joven les ofreció dinero', false);
    pregunta.agregar('Quieren que empiece una familia', false);
    pregunta.agregar('Quieren honrar el acuerdo con la familia Charicha', false);
    pregunta.alAcertar = pintarResultadoC2;
    pregunta.pintar(divPreguntas);
}

function pintarResultadoC2(){

    let respuestasBuenas = 0;

    divPreguntas.innerHTML = '';

    let ul = cE("ul", divPreguntas);

    for(var respuesta of respuestasCap1){

        let li = cE("li", ul);

        let spanE = cE("span", li);
        spanE.innerHTML = respuesta.enunciado;

        let spanR = cE("span", li);
        spanR.className = (respuesta.valor == 'true') ? 'respuesta-correcta' : 'respuesta-incorrecta';
        spanR.innerHTML = respuesta.respuesta;

        if(respuesta.valor == 'true'){
            respuestasBuenas++;
        }
    }

    let p = cE("p", divPreguntas);
    p.innerHTML = `${respuestasBuenas} de ${respuestasCap1.length}`;

    let button = cE("button", divPreguntas);
    button.innerHTML = "Volver a responder"
    button.addEventListener('click', ()=>{
        respuestasCap1 = [];
        pregunta1C2();
    })
}

// Preguntas Capitulo 3


function pregunta1C3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué es un peligro talar los árboles?";
    pregunta.agregar('Puede ser la razón por la cual habrá una gran sequía en el futuro y provocará el fin del bosque', true);
    pregunta.agregar('Puede herir a la gente los árboles al caer', false);
    pregunta.agregar('No todo el mundo está de acuerdo', false);
    pregunta.agregar('La empresa que corta los árboles amenaza al pueblo', false);
    pregunta.alAcertar = pregunta2C3;
    pregunta.pintar(divPreguntas);
}

function pregunta2C3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué algunas familias del pueblo deciden apoyar la tala de árboles?";
    pregunta.agregar('Desean destruir el bosque', false);
    pregunta.agregar('Quieren llevarle la contraria a los que no desean que esto pase', false);
    pregunta.agregar('Son enemigos de la comunidad', false);
    pregunta.agregar('Necesitan el pago como sustento para sus familias', true);
    pregunta.alAcertar = pregunta3C3;
    pregunta.pintar(divPreguntas);
}

function pregunta3C3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué Dabeiba se arrepiente de atacar a quienes defienden la tala del bosque?";
    pregunta.agregar('Se da cuenta que la tala puede ayudar', false);
    pregunta.agregar('Se da cuenta que las familias no quieren talar los árboles sino buscar un sustento', true);
    pregunta.agregar('Se da cuenta que la violencia no es necesaria gracias a su abuela', false);
    pregunta.agregar('Se cansa de luchar', false);
    pregunta.alAcertar = pregunta4C3;
    pregunta.pintar(divPreguntas);
}

function pregunta4C3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Por qué las ranas son importantes?";
    pregunta.agregar('Son dioses', false);
    pregunta.agregar('Son la solución para la ruta ecoturística que propone Dabeiba como solución', true);
    pregunta.agregar('Atraen el agua', false);
    pregunta.agregar('Son hermosas', false);
    pregunta.alAcertar = pregunta5C3;
    pregunta.pintar(divPreguntas);
}

function pregunta5C3(){
    divPreguntas.innerHTML = '';

    let pregunta = new Pregunta();
    pregunta.enunciado = "¿Qué pasa con Dabeiba al final?";
    pregunta.agregar('Es regresada al futuro esperando haber salvado el bosque', true);
    pregunta.agregar('Logra salvar al bosque', false);
    pregunta.agregar('Decide marcharse a otro lugar', false);
    pregunta.agregar('Se va con Orkokoe al árbol de Caragabí', false);
    pregunta.alAcertar = pintarResultadoC3;
    pregunta.pintar(divPreguntas);
}

function pintarResultadoC3(){

    let respuestasBuenas = 0;

    divPreguntas.innerHTML = '';

    let ul = cE("ul", divPreguntas);

    for(var respuesta of respuestasCap1){

        let li = cE("li", ul);

        let spanE = cE("span", li);
        spanE.innerHTML = respuesta.enunciado;

        let spanR = cE("span", li);
        spanR.className = (respuesta.valor == 'true') ? 'respuesta-correcta' : 'respuesta-incorrecta';
        spanR.innerHTML = respuesta.respuesta;

        if(respuesta.valor == 'true'){
            respuestasBuenas++;
        }
    }

    let p = cE("p", divPreguntas);
    p.innerHTML = `${respuestasBuenas} de ${respuestasCap1.length}`;

    let button = cE("button", divPreguntas);
    button.innerHTML = "Volver a responder"
    button.addEventListener('click', ()=>{
        respuestasCap1 = [];
        pregunta1C3();
    })
}


