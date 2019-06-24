//comenzamos nuestro juego.

//lo primero que necesitamos son nuestras cartas. Para ello vamos a utilizar un array en la que vamos a guardar todos las posibles cartas.

//creamos el array de cartas.
//este array contendrá todas nuestras cartas del mazo, tal como se describe en el readme del juego.
//vamos a utilizar números en vez del nombre real de las cartas para que sea más fácil, luego podemos modificarlo.

var cartas = [
[1, 'corazones', 'rojo'],
[2, 'corazones', 'rojo'],
[3, 'corazones', 'rojo'],
[4, 'corazones', 'rojo'],
[5, 'corazones', 'rojo'],
[6, 'corazones', 'rojo'],
[7, 'corazones', 'rojo'],
[8, 'corazones', 'rojo'],
[9, 'corazones', 'rojo'],
[10, 'corazones', 'rojo'],
[11, 'corazones', 'rojo'],
[12, 'corazones', 'rojo'],
[13, 'corazones', 'rojo'],
[1, 'picas', 'negro'],
[2, 'picas', 'negro'],
[3, 'picas', 'negro'],
[4, 'picas', 'negro'],
[5, 'picas', 'negro'],
[6, 'picas', 'negro'],
[7, 'picas', 'negro'],
[8, 'picas', 'negro'],
[9, 'picas', 'negro'],
[10, 'picas', 'negro'],
[11, 'picas', 'negro'],
[12, 'picas', 'negro'],
[13, 'picas', 'negro'],
[1, 'trebol', 'negro'],
[2, 'trebol', 'negro'],
[3, 'trebol', 'negro'],
[4, 'trebol', 'negro'],
[5, 'trebol', 'negro'],
[6, 'trebol', 'negro'],
[7, 'trebol', 'negro'],
[8, 'trebol', 'negro'],
[9, 'trebol', 'negro'],
[10, 'trebol', 'negro'],
[11, 'trebol', 'negro'],
[12, 'trebol', 'negro'],
[13, 'trebol', 'negro'],
[1, 'rombo', 'rojo'],
[2, 'rombo', 'rojo'],
[3, 'rombo', 'rojo'],
[4, 'rombo', 'rojo'],
[5, 'rombo', 'rojo'],
[6, 'rombo', 'rojo'],
[7, 'rombo', 'rojo'],
[8, 'rombo', 'rojo'],
[9, 'rombo', 'rojo'],
[10, 'rombo', 'rojo'],
[11, 'rombo', 'rojo'],
[12, 'rombo', 'rojo'],
[13, 'rombo', 'rojo'],
];
//aquí vamos a guardar nuestras cartas mezcladas.
var cartasMezcladas = [];
//esta variable guardará el puntaje del usuario.
var puntaje = 0;
var puntajeContainer = document.getElementById('score');

//seleccionamos nuestro contenedor de cartas.
var contenedorCartas = document.getElementById('cartas');

//1- debemos asegurarnos que cuando el usuario haga click en el botón comenzar-juego, se muestre el tablero del juego, y se vaya el cartel de bienvenida.
  //para ello va a ser necesario: seleccionar nuestro botón.
  //quitar la clase hidden de nuestro contenedor del tablero.
  //agregar la clase hidden a nuestro contenedor de bienvenida.

//seleccionamos el botón:
//var buttonInicio = document.getElementById('comenzar-juego');
var buttonInicio = document.getElementsByClassName('boton-comenzar');
var contenedorBienvenida = document.getElementById('juego-iniciar');
var contenedorTablero = document.getElementById('juego-desplegado');

//hacemos un loop para buscar cuál es el botón que ha seleccionado el usuario.
//primero hacemos pasamos una función anónima como parámetro
//sería más fácil, si tuvieramos una función que nos ayude a separar nuestro código, y hacerlo más manejable.
//vamos a pasar una función como parámetro. La función se llamará comenzarJuego.
for (var i = 0; i < buttonInicio.length; i++) {
  //función anonima como parámetro.

    // buttonInicio[i].addEventListener('click', function(e) {
    //
    // })

  //función a la que llamaremos cada vez que necesitemos iniciar el juego.
  buttonInicio[i].addEventListener('click', comenzarJuego);
}

//vamos a crear una función que vamos a ejecutar cada vez que el usuario haga click en un botón de comienzo.
function comenzarJuego(eventoClick) {
  //esta función debe: mostrar el contenedor del tablero,
  //esconder el contenedor de bienvenida.
  //mezclar las cartas.
  //consolear que el juego a comenzado.
  contenedorBienvenida.classList.add('hidden');
  contenedorTablero.classList.remove('hidden');

  resultados = [];
  cartasMezclas = cartas;

  //la función shuffle (mezclar) la creamos más tarde en el juego. En  una primera instancia sólo debemos mostrar el tablero y esconder la bienvenida, luego agregamos esta función.
  cartasMezcladas = shuffle(cartas);
  //luego de mezcladas nuestras cartas, armamos nuestros mazos.
  armarMazos();
  console.log('Juego cargado y listo para comenzar');
}

//esta es una función inicial para seleccionar el botón con id comenzar juego.
//luego que comenzamos a delegar nuestros eventos a varios botones, ya no nos hace falta.

    // buttonInicio.addEventListener('click', function() {
    //   contenedorBienvenida.classList.add('hidden');
    //   contenedorTablero.classList.remove('hidden');
    // })

//----- YA TENEMOS NUESTRO TABLERO LISTO ----//
//vamos a programar el juego.

//mezclar array
//funcion shuffle.
//esta función nos ayudará a mezclar las cartas al inicio de nuestro juego.
//cuando el usuario hace click en cualquier botón comenzar se deben volver a mezclar las cartas.

//podemos ir a la documentación para verificar que debemos utilizar.
//La función shuffle va a mezclar los elementos de nuestro array cartas, no las va a colocar en diferentes mazos, sólo mezclarlas.

function shuffle(array) {

  //creamos las variables mazo, que va a contener el length de nuestra array.
  //creamos las variables: i que es una variable de control.
  //y la variable t que es una variable temporal, que nos va a ayudar a guardar nuestro elemento mezclado.
  var mazo = array.length, t, i;
  //while there remain elements to shuffle
  while(mazo) {
    //pick a remaining element.
    i = Math.floor(Math.random() * mazo--);
    //and swap it with the current element
    t = array[mazo];
    array[mazo] = array[i];
    array[i] = t;
  }
  return array;
}
//establecemos el mínimo que puede tener nuestro mazo = 1.
//el máximo que puede tener es 11. Guardamos ambos valores en variables.
//
// var min = 1;
// var max = 11;

//cantidad de cartas en el mazo aleatoriamente.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//armamos los mazos
//para ello creamos 5 arrays vacías. En las que vamos a guardar cada carta.

var mazo1 = [], mazo2 = [], mazo3 = [], mazo4 = [], mazo5 = [];

//cada mazo puede tener un número de cartas como mínimo 5 y máximo 16. Se lo pasamos como parámetros a nuestra función getRandomInt.
//estas funciones va a seleccionar el array (previamente mezclado) y va a primero utilizar el método splice que es un método que cambia el contenido de un array, necesita dos parámetros:
//el primero el lugar desde dónde va a comenzar.
//el segundo que indica la cantidad de elementos a eliminar del array afectado.
//por ejemplo, en nuestro caso le estamos diciendo que: corte el array cartas desde la posición 0 (índice 0) y elimine la cantidad de elementos que surgan de la función getRandomInt, si está función tiene por resultado 5, 6 u 15, da igual, será esa la cantidad de elementos que va a borrar del array original.
//y además guardamos en una nueva variable mazo1, mazo2, etc. el resultado de esta operación.
function armarMazos() {
  mazo1 = cartasMezcladas.splice(0, getRandomInt(5,16));
  // console.log('mazo 1: ', mazo1);
  mazo2 = cartasMezcladas.splice(0, getRandomInt(5,16));
  // console.log('mazo 2: ', mazo2);
  mazo3 = cartasMezcladas.splice(0, getRandomInt(5,16));
  // console.log('mazo 3: ', mazo3);
  mazo4 = cartasMezcladas.splice(0, getRandomInt(5,16));
  // console.log('mazo 4: ', mazo4);
  mazo5 = cartasMezcladas;
  // console.log('mazo 5: ', mazo5);
}


//creamos los mazos en el html.
//creamos tantos divs como cartas tengan en el mazo.
//le asignamos una clase para otra para el tipo

function createCard(array, mazo) {
  for (var i = 0; i < array.length; i++) {
    var card = document.createElement('div');
    card.classList.add('carta');
    card.setAttribute('carta-numero', array[i][0]);
    card.setAttribute('carta-palo', array[i][1]);
    card.setAttribute('carta-color', array[i][2]);
    card.innerHTML = '<span>' + array[i][0] + '</span>';
    card.innerHTML += '<span>' + array[i][1] + '</span>';
    card.classList.add(array[i][1]);
    card.classList.add(array[i][2]);
    document.querySelector(mazo).classList.add('is-visible');
    document.querySelector(mazo).append(card);
  }
}

//escuchamos el click del usuario sobre cada uno de los mazos
//cada vez que el usuario haga click, vamos a tener que agregar las nuevas cartas a nuestro div#cartas. Así vamos desplegando el tablero con todas las opciones.

//seleccionamos todos los botones de mazos (los 5).
var mazoButtons = document.querySelectorAll('.mazo-button');

//hacemos un loop sobre estos botones para verificar en qué mazo hizo click el usuario.

for (var button = 0; button < mazoButtons.length; button++) {
  //escuchamos el click.
  mazoButtons[button].addEventListener('click', function(e) {
    //vamos verificando en cuál hizo click.
    var el = e.target.parentNode.getAttribute('id');

    if (el == 'mazo1') {
      createCard(mazo1, '#cartas');
    } else if (el == 'mazo2') {
      createCard(mazo2, '#cartas');
    } else if (el == 'mazo3') {
      createCard(mazo3, '#cartas');
    } else if (el == 'mazo4') {
      createCard(mazo4, '#cartas');
    } else if (el == 'mazo5'){
      createCard(mazo5, '#cartas');
    }
    //agregamos una clase y deshabilitamos el botón ya cliqueado
    this.classList.add('clicked');
    this.setAttribute('disabled','disabled');
    listenToUserClick();
  });
}

//ahora debemos saber qué hace el usuario.
//tenemos que escuchar el click del usuario en cada una de las cartas.
//podemos guardar temporalmente la carta en la que hizo click la primera vez.
//luego escuchamos un segundo click, y comparamos ambas cartas.
//si la selección es correcta la guardamos en el array resultados, y las quitamos del html.
//si la selección no es correcta consoleamos el error.


function listenToUserClick() {

  //seleccionamos todos los elementos del dom con clase carta.
  var carta = document.querySelectorAll('.carta');
  //creamos el array de selected para poder comparar las selecciones.
  var selected = [];

  //recorremos el array de cartas
  for (var i = 0; i < carta.length; i++) {
    //escuchamos el click.
    carta[i].addEventListener('click', function(e) {

      //chequeamos que el click sea sobre el div y no sobre cualquiera de las tags hijas de nuestro div (que representa la carta.)
      //en nuestro css además debemos poner que las etiquetas hijas de nuestro div no tengan ningún efecto a través de la propiedad pointer-events, lo setteamos a none.
      if (e.target.nodeName == 'DIV') {
        //viendo nuestro resultado, tomamos el valor de los atributos: carta-numero y carta-palo.
        var cartaNumero = e.target.getAttribute('carta-numero');
        var cartaPalo = e.target.getAttribute('carta-palo');
        var cartaColor = e.target.getAttribute('carta-color');
        var cartaSelected = [];
        //guardamos estas dos variables en nuestro array selected.
        cartaSelected.push(cartaNumero);
        cartaSelected.push(cartaPalo);
        cartaSelected.push(cartaColor);
        selected.push(cartaSelected);

        //deshabilitamos el elemento en que se ha hecho click.
        e.target.classList.add('disabled');
        if (selected.length == 2) {
          compareEl(selected);
        }
      }
    });
  }
}
function compareEl(array) {
  var el1 = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');
  var el2 = document.querySelector('[carta-numero="' + array[1][0] + '"][carta-palo="' + array[1][1] + '"]');

  if ((array[0][0] != array[1][0]) || (array[0][2] != array[1][2])) {
    console.log('no match');
    el1.classList.remove('disabled');
    el2.classList.remove('disabled');
    puntaje--;
    updatePuntaje();
  } else {
    console.log('right');
    el1.remove();
    el2.remove();
    resultados.push(el1);
    resultados.push(el2);
    puntaje++;
    updatePuntaje();
  }
  array.pop();
  array.pop();
}
function updatePuntaje() {
  puntajeContainer.textContent = puntaje;
}
