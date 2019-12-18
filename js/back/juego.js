"use strict";

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
['jocker', 'jocker', 'jocker1'],
['jocker', 'jocker', 'jocker2'],
];
var cartasMezcladas = [];
var totalMazosUtilizados = 0;

var contenedorCartas = document.getElementById('cartas');
var contenedorMazos = document.getElementById('mazos');

var mazo1 = [], mazo2 = [], mazo3 = [], mazo4 = [], mazo5 = [];

window.onload = comenzarJuego();

function comenzarJuego() {
  cartasMezcladas = shuffle(cartas);
  armarMazos();
  console.log('Juego cargado y listo para comenzar');
}

function armarMazos() {
  mazo1 = cartasMezcladas.splice(0, getRandomInt(5,15));
  mazo2 = cartasMezcladas.splice(0, getRandomInt(5,15));
  mazo3 = cartasMezcladas.splice(0, getRandomInt(5,15));
  mazo4 = cartasMezcladas.splice(0, getRandomInt(5,15));
  mazo5 = cartasMezcladas;
  console.log(mazo1.length, mazo2.length, mazo3.length, mazo4.length, mazo5.length);
  console.log(mazo1.length + mazo2.length + mazo3.length + mazo4.length + mazo5.length);
  escucharClickEnMazos();
}

function escucharClickEnMazos() {
  contenedorMazos.addEventListener('click', function(e) {
    var  el = e.target.parentNode.getAttribute('id');
    if (e.target.nodeName == 'BUTTON') {
      if (el == 'mazo1') {
        crearCartas(mazo1, '#cartas');
      } else if (el == 'mazo2') {
        crearCartas(mazo2, '#cartas');
      } else if (el == 'mazo3') {
        crearCartas(mazo3, '#cartas');
      } else if (el == 'mazo4') {
        crearCartas(mazo4, '#cartas');
      } else if (el == 'mazo5'){
        crearCartas(mazo5, '#cartas');
      }

      funcionesGenerales.agregar(e.target.parentNode, 'clicked');
      //e.target.parentNode.classList.add('clicked');
      //e.target.setAttribute('disabled', 'disabled');
      funcionesGenerales.agregarAtributo(e.target, 'disabled', 'disabled');
      totalMazosUtilizados++;
      if (totalMazosUtilizados == 4) {
        var todosLosMazos = Array.prototype.slice.call(e.target.parentNode.parentNode.children);
        var ultimoMazo = todosLosMazos.find(function(element) {
          return element.className !== 'mazo-principal clicked';
        });
        funcionesGenerales.agregarAtributo(ultimoMazo.firstElementChild, 'disabled', 'disabled');
        funcionesGenerales.agregar(ultimoMazo,'last');
      }
      escucharClickEnCartas();
    }
  })
}
function escucharClickEnCartas() {
  var carta = document.querySelectorAll('.carta');
  var selected =  [];
  for (var i = 0; i < carta.length; i++) {
    carta[i].addEventListener('click', function(e) {
      if (e.target.nodeName == 'BUTTON') {
        e.target.classList.toggle('disabled');
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
            compararElementos(selected);
          }
          if (selected.length >= 3) {
            funcionesGenerales.vaciarArray(selected);
            funcionesGenerales.vaciarArray(cartaSelected);
          }


        if (totalMazosUtilizados == 4) {
          var opciones = compararUltimosMazosEnTablero();
        if (opciones == true) {
           mostrarCartelOtraOportunidad();
         }
       } else if (totalMazosUtilizados == 5) {
         var opciones = compararUltimosMazosEnTablero();
         if (opciones == true) {
           mostrarCartelFinal();
         }
       }
      }
    });
  }
}

function compararUltimosMazosEnTablero() {
  var array = document.querySelectorAll('.carta');
  //guarda los datos en una array de dos dimensiones.
  var tempArr = [];
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    var cartaNumero = funcionesGenerales.obtenerAtributo(el,'carta-numero');
    var cartaPalo = funcionesGenerales.obtenerAtributo(el,'carta-palo');
    var cartaColor = funcionesGenerales.obtenerAtributo(el,'carta-color');
    var cartaArr = [];
    cartaArr.push(cartaNumero);
    cartaArr.push(cartaPalo);
    cartaArr.push(cartaColor);
    tempArr.push(cartaArr);
  }
  var pares = encontrarPares(tempArr);
  //si no quedan cartas en el tablero.
  if (tempArr.length == 0) {
    mostrarCartelFinal();
  } else {
    if (pares == 0) {
      console.log('No hay más pares');
      //  mostrarCartelOtraOportunidad();
      return true;
    } else {
      //console de control, para saber que va a seguir loopeando.
      console.log('Puede que todavía hay pares todavía');
      //no devuelve nada porque todavía hay pares.
    }
  }
  // //si no hay más pares y hay más de 1 carta en el tablereo.
  // if (pares == 0 && tempArr.length > 0) {
  //   console.log('No hay más pares');
  //   //  mostrarCartelOtraOportunidad();
  //   return true;
  //   //console de control, para saber que va a seguir loopeando.
  // } else {
  //   console.log('Puede que todavía hay pares todavía');
  //   //no devuelve nada porque todavía hay pares.
  // }
}
function encontrarPares(arr) {
  //is going to return as many par as cards are in the board.
  //and we need only one
  var par = 0;
  var matches = arr.forEach(function(current, index, array) {
    var cur = current;
    array.splice(array.indexOf(cur),1);
    for (var i = 0; i < array.length; i++) {
      if (((cur[0] == array[i][0]) && (cur[2] == array[i][2]))) {
        // console.log('cur[0]', cur[0]);
        // console.log('array[i][0]', array[i][0]);
        par++;
      } else if (cur[0] == 'jocker' || array[i][0] == 'jocker') {
        par++;
      }
    }
  });

  console.log(matches);

  console.log(par);
  //si las dos cartas son diferentes, nos va a dar par 0.
  //entonces??? jajaja! Maldición!
  // if (matches == false) {
  //   console.log(matches);
  //   return false;
  // }
  if (par == 0) {
    console.log('returning par');
    return par;
  }
}
function mostrarCartelOtraOportunidad() {
  var last = document.querySelector('.last');
  var lastId = funcionesGenerales.obtenerAtributo(last, 'id');

  var lastChanceContainer = document.getElementById('last-chance');
  var lastChanceOk = document.getElementById('conlastchance');
  var lastChanceNot = document.getElementById('sinlastchance');

  funcionesGenerales.quitar(lastChanceContainer, 'hidden');

  lastChanceOk.addEventListener('click', function(e) {
    obtenerUltimaChance(lastId);

  });
  lastChanceNot.addEventListener('click', function() {
    // window.location = 'index.html';
    mostrarCartelFinal();
  })
}
function mostrarCartelFinal() {
  var cartasPendientes = document.querySelectorAll('.carta');
  var puntaje = contarCartas(cartasPendientes);
  if (puntaje >= 10) {
    getCartel('GAME OVER', 'Lo sentimos, pero has perdido.', puntaje);
  } else {
    getCartel('GANASTE', 'Has podido vencer!! Te felicitamos!! La próxima no será tan fácil...', puntaje);
  }
}
function obtenerUltimaChance(el) {
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
  //var arrayLength = array.length;
  var cartasAEntregar = getRandomInt(1, array.length);
  //console.log(cartasAEntregar);
  var newArray = array.slice(0, cartasAEntregar);
  totalMazosUtilizados = 5;
  crearCartas(newArray, '#cartas');
  //console.log('the newarray', newArray);
  var lastChanceContainer = document.getElementById('last-chance');
  lastChanceContainer.innerHTML = '<h3>Hemos agregado: ' + newArray.length + ' cartas al tablero</h3>';
  escucharClickEnCartas();
}

//funciones del juego generales.

function  crearCartas(array, mazo) {
  //console.log('the array en crear cartas ', array);
  for (var i = 0; i < array.length; i++) {
    var card = document.createElement('button');
    funcionesGenerales.agregar(card, 'carta');
    //card.classList.add('carta');
    funcionesGenerales.agregarAtributo(card, 'carta-numero', array[i][0]);
    //card.setAttribute('carta-numero', array[i][0]);
    funcionesGenerales.agregarAtributo(card, 'carta-palo', array[i][1]);
    // card.setAttribute('carta-palo', array[i][1]);
    funcionesGenerales.agregarAtributo(card, 'carta-color', array[i][2]);
    //card.setAttribute('carta-color', array[i][2]);
    card.innerHTML = '<span>' + array[i][0] + '</span>';
    funcionesGenerales.agregar(card, array[i][1]);
    funcionesGenerales.agregar(card, array[i][2]);
    // card.classList.add(array[i][1]);
    // card.classList.add(array[i][2]);
    funcionesGenerales.agregar(document.querySelector(mazo), 'is-visible');
    //document.querySelector(mazo).classList.add('is-visible');
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
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function compararElementos(array) {
  var el1 = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');

  var el2 = document.querySelector('[carta-numero="' + array[1][0] + '"][carta-palo="' + array[1][1] + '"]');
  if (el1 == null || el2 == null) {
    funcionesGenerales.vaciarArray(array);
    return;
  } else if (array[0][0] == 'jocker' || array[1][0] == 'jocker') {
    console.log('right, used a jocker');
    el1.remove();
    el2.remove();
    // puntaje++;
  } else if ((array[0][0] != array[1][0]) || (array[0][2] != array[1][2]) || (array[0][1] == array[1][1]) ) {
    console.log('no match');
    funcionesGenerales.quitar(el1, 'disabled');
    funcionesGenerales.quitar(el2, 'disabled');
    // el1.classList.remove('disabled');
    // el2.classList.remove('disabled');
    funcionesGenerales.agregar(el1, 'shake');
    funcionesGenerales.agregar(el2, 'shake');
    // el1.classList.add('shake');
    // el2.classList.add('shake');
    setTimeout(function() {
      funcionesGenerales.quitar(el1, 'shake');
      funcionesGenerales.quitar(el2, 'shake');
    }, 1000);
  } else {
    console.log('right');
    el1.remove();
    el2.remove();
  }
  funcionesGenerales.vaciarArray(array);
}
function contarCartas(array) {
  var cantidad = 0;
  for (var i = 0; i < array.length; i++) {
    var numeroCarta = array[i].getAttribute('carta-numero')
    if (numeroCarta == 'jocker') {
      numeroCarta = 0;
    } else if (numeroCarta == 'A') {
      numeroCarta = 1;
    } else if (numeroCarta == 'J') {
      numeroCarta = 11;
    } else if (numeroCarta == 'Q') {
      numeroCarta = 12;
    } else if (numeroCarta == 'K') {
      numeroCarta = 13;
    }
    cantidad += parseInt(numeroCarta);
  }
  return cantidad;
}
function getCartel(estado, frase, puntaje) {
  var contenedor = document.createElement('div');
  contenedor.id = 'cartel';
  var titulo = document.createElement('h2');
  titulo.textContent = '¡' + estado + '!';
  var parrafo = document.createElement('p');
  parrafo.textContent = frase;
  var score = document.createElement('p');
  score.textContent = 'Tu puntaje a sido: ' + puntaje;
  // var button = document.createElement('button');
  // button.classList.add('button');
  // button.id = 'comenzar-juego';
  // button.textContent = 'Comenzar nuevo juego';
  contenedor.append(titulo, parrafo, score);

  document.querySelector('#message').append(contenedor);
}
