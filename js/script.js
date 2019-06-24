//comenzamos nuestro juego.
var cartas = [
['A', 'corazon', 'rojo'],
[2, 'corazon', 'rojo'],
[3, 'corazon', 'rojo'],
[4, 'corazon', 'rojo'],
[5, 'corazon', 'rojo'],
[6, 'corazon', 'rojo'],
[7, 'corazon', 'rojo'],
[8, 'corazon', 'rojo'],
[9, 'corazon', 'rojo'],
[10, 'corazon', 'rojo'],
['J', 'corazon', 'rojo'],
['Q', 'corazon', 'rojo'],
['K', 'corazon', 'rojo'],
['A', 'pica', 'negro'],
[2, 'pica', 'negro'],
[3, 'pica', 'negro'],
[4, 'pica', 'negro'],
[5, 'pica', 'negro'],
[6, 'pica', 'negro'],
[7, 'pica', 'negro'],
[8, 'pica', 'negro'],
[9, 'pica', 'negro'],
[10, 'pica', 'negro'],
['J', 'pica', 'negro'],
['Q', 'pica', 'negro'],
['K', 'pica', 'negro'],
['A', 'trebol', 'negro'],
[2, 'trebol', 'negro'],
[3, 'trebol', 'negro'],
[4, 'trebol', 'negro'],
[5, 'trebol', 'negro'],
[6, 'trebol', 'negro'],
[7, 'trebol', 'negro'],
[8, 'trebol', 'negro'],
[9, 'trebol', 'negro'],
[10, 'trebol', 'negro'],
['J', 'trebol', 'negro'],
['Q', 'trebol', 'negro'],
['K', 'trebol', 'negro'],
['A', 'rombo', 'rojo'],
[2, 'rombo', 'rojo'],
[3, 'rombo', 'rojo'],
[4, 'rombo', 'rojo'],
[5, 'rombo', 'rojo'],
[6, 'rombo', 'rojo'],
[7, 'rombo', 'rojo'],
[8, 'rombo', 'rojo'],
[9, 'rombo', 'rojo'],
[10, 'rombo', 'rojo'],
['J', 'rombo', 'rojo'],
['Q', 'rombo', 'rojo'],
['K', 'rombo', 'rojo'],
['jocker', 'jocker', 'jocker'],
['jocker', 'jocker', 'jocker'],
];
//aquí vamos a guardar nuestras cartas mezcladas.
var cartasMezcladas = [];
//esta variable guardará el puntaje del usuario.
// var puntaje = 0;
// var puntajeContainer = document.getElementById('score');
// var valorCartasEnLaMezaContainer = document.getElementById('valor-cartas');

//controlamos la cantidad de mazos utilizados.
var mazosUtilizados = 0;

//contamos las cartas que hay en la mesa, y tomamos su valor.
var valorDeCartasEnLaMeza = document.getElementsByClassName('carta');

//seleccionamos nuestro contenedor de cartas.
var contenedorCartas = document.getElementById('cartas');
var mazoContainer = document.querySelector('#mazos');
//armamos los mazos
//para ello creamos 5 arrays vacías. En las que vamos a guardar cada carta.

var mazo1 = [], mazo2 = [], mazo3 = [], mazo4 = [], mazo5 = [];

window.onload = comenzarJuego();

//vamos a crear una función que vamos a ejecutar cada vez que el usuario haga click en un botón de comienzo.
function comenzarJuego(eventoClick) {
  cartasMezcladas = shuffle(cartas);
  //luego de mezcladas nuestras cartas, armamos nuestros mazos.
  armarMazos();
  console.log('Juego cargado y listo para comenzar');
}

//----- YA TENEMOS NUESTRO TABLERO LISTO ----//
//vamos a programar el juego.

function armarMazos() {
  mazo1 = cartasMezcladas.splice(0, getRandomInt(5,16));
  mazo2 = cartasMezcladas.splice(0, getRandomInt(5,16));
  mazo3 = cartasMezcladas.splice(0, getRandomInt(5,16));
  mazo4 = cartasMezcladas.splice(0, getRandomInt(5,16));
  mazo5 = cartasMezcladas;
  listenToMazoClick(mazo1, mazo2,  mazo3, mazo4, mazo5);
}

function listenToMazoClick(mazo1, mazo2, mazo3, mazo4, mazo5) {
  mazoContainer.addEventListener('click', function(e) {
    var el = e.target.parentNode.getAttribute('id');
    if (e.target.nodeName == 'BUTTON') {
      //create  button for every mazo.
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
      e.target.parentNode.classList.add('clicked');
      e.target.setAttribute('disabled','disabled');
      mazosUtilizados++;
      if (mazosUtilizados == 4) {
        //parentNode Children devuelve un htmlcollection.
        //tenemos que volver el htmlcollection en un array.
        var mazosTodos = Array.prototype.slice.call(e.target.parentNode.parentNode.children);
        var ultimoMazo = mazosTodos.find(function(element) {
          return element.className !== 'mazo-principal clicked';
        });
        ultimoMazo.firstElementChild.setAttribute('disabled', 'disabled');
        ultimoMazo.classList.add('class', 'last');
        //tomamos el array que contiene el último mazo.
        var ultimoArray = ultimoMazo.getAttribute('id');
      }
      listenToUserClick(mazosUtilizados);
    }
  });
}

function listenToUserClick() {
  //seleccionamos todos los elementos del dom con clase carta.
  var carta = document.querySelectorAll('.carta');
  //creamos el array de selected para poder comparar las selecciones.
  var selected = [];

  //recorremos el array de cartas
  for (var i = 0; i < carta.length; i++) {
    //escuchamos el click.
    carta[i].addEventListener('click', function(e) {
      if (e.target.nodeName == 'BUTTON') {
      //  console.log(e.target);
        //deshabilitamos el elemento en que se ha hecho click.
        e.target.classList.add('disabled');
        //console.log(e.target.classList);

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

        // console.log(cartaSelected);
        // console.log(selected);
        if (selected.length == 2) {
          compareEl(selected);
        }
        if (mazosUtilizados == 4) {
          compareLastCardsInBoard();
        }
      }
    });
  }
}

function compareLastCardsInBoard(ultimoArray) {
  var array = document.querySelectorAll('.carta');
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    //console.log(array[i]);
    var cartaNumero = array[i].getAttribute('carta-numero');
    var cartaPalo = array[i].getAttribute('carta-palo');
    var cartaColor = array[i].getAttribute('carta-color');
    var cartaArr = [];
    //guardamos estas dos variables en nuestro array selected.
    cartaArr.push(cartaNumero);
    cartaArr.push(cartaPalo);
    cartaArr.push(cartaColor);
    arr.push(cartaArr);
  }
  //console.log(arr);
//find posibles matches
  var matches = findMatches(arr);
  if (matches == 0) {
    console.log('no more matches');
    showCartel();
  } else {
    console.log('something went wrong!! maybe there are some matches left');
  }
}
function findMatches(arr) {
  var match = 0;
  var matches = arr.forEach(function(current, index, array) {
    var cur = current;
    //console.log(array);
    array.splice(array.indexOf(cur),1);
    // console.log(cur);
    // console.log(array);
    for (var i = 0; i < array.length; i++) {
      //&& (cur[2] !== array[i][2])
      // if ((cur[0] !== array[i][0]) && (cur[2] !== array[i][2])) {
      //   console.log('no matches color and number ' + 'false');
      // } else if ((cur[0] == array[i][0]) && (cur[2] == array[i][2])){
      //   console.log('matches number ', cur[0], array[i][0]), (cur[2], array[i][2]);
      // }
      if ((cur[0] == array[i][0]) && (cur[2] == array[i][2])) {
        match++;
      }
    }

    //console.log(newArr);
  })
  console.log(match);
  return match;
}

function showCartel() {
  console.log('cartel mostrado');
  var last = document.querySelector('.last');
  var lastId = last.getAttribute('id');
  var lastChanceContainer = document.getElementById('last-chance');
  var lastChanceOk = document.getElementById('conlastchance');
  var lastChanceNot = document.getElementById('sinlastchance');
  lastChanceContainer.classList.remove('hidden');
  lastChanceOk.onclick = function() {
    getLastChance(lastId);
    setTimeout(function() {
      lastChanceContainer.classList.add('hidden');
    }, 2000);
  }
  lastChanceNot.onclick =  function() {
    window.location = 'index.html';
  }
}
function getLastChance(el) {
  var array;
  if (el == 'mazo1') {
    array = mazo1;
  } else if (el == 'mazo2') {
    array = mazo2;
  } else if (el == 'mazo3') {
    array = mazo3;
  } else if (el == 'mazo4') {
    array = mazo4;
  } else if (el == 'mazo5'){
    array = mazo5;
  }
  var arrayLength = array.length;
  var cartasAEntregar = getRandomInt(1, array.length);
  var newArray = array.slice(0, cartasAEntregar);
  mazosUtilizados = 5;
  console.log(cartasAEntregar);
  createCard(newArray, '#cartas');
  listenToUserClick();
}

///////////////////

function createCard(array, mazo) {
  for (var i = 0; i < array.length; i++) {
    var card = document.createElement('button');
    card.classList.add('carta');
    card.setAttribute('carta-numero', array[i][0]);
    card.setAttribute('carta-palo', array[i][1]);
    card.setAttribute('carta-color', array[i][2]);
    card.innerHTML = '<span>' + array[i][0] + '</span>';
    card.classList.add(array[i][1]);
    card.classList.add(array[i][2]);
    document.querySelector(mazo).classList.add('is-visible');
    document.querySelector(mazo).append(card);
  }
}


function shuffle(array) {
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

//cantidad de cartas en el mazo aleatoriamente.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareEl(array) {
  var el1 = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');
  //console.log(el1);
  var el2 = document.querySelector('[carta-numero="' + array[1][0] + '"][carta-palo="' + array[1][1] + '"]');
  //console.log(el2);
  // console.log('array 1 ' + array[0][0]);
  // console.log('array 2 ' + array[1][0]);
  if (array[0][0] == 'jocker' || array[1][0] == 'jocker') {
    console.log('right, used a jocker');
    el1.remove();
    el2.remove();
    // puntaje++;
  }
  if ((array[0][0] != array[1][0]) || (array[0][2] != array[1][2]) || (array[0][1] == array[1][1]) ) {
    console.log('no match');
    el1.classList.remove('disabled');
    el2.classList.remove('disabled');
    el1.classList.add('shake');
    el2.classList.add('shake');
    setTimeout(function() {
      el1.classList.remove('shake');
      el2.classList.remove('shake');
    }, 1000);
    // puntaje--;
  } else {
    console.log('right');
    el1.remove();
    el2.remove();
    // puntaje++;
  }
  // updatePuntaje();
  // valorCartasEnLaMezaContainer.textContent = contarCartas(valorDeCartasEnLaMeza);
  empty(array);
}
function  empty(array) {
  return array.length = 0;
}
function updatePuntaje() {
  puntajeContainer.textContent = puntaje;
}

function contarCartas(array) {
//console.log(array);
  var cantidad = 0;
  for (var i = 0; i < array.length; i++) {
    var numeroCarta = array[i].getAttribute('carta-numero')
    if (numeroCarta == 'jocker') {
      numeroCarta = 0;
    }
    cantidad += parseInt(numeroCarta);
  }
  return cantidad;
}
