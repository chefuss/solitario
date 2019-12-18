"use strict";
//el juego de cartas completo, guardado en un array.
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
//seleccionamos los elementos del dom que nos resulten esenciales para trabajar.

//seleccionamos el contenedor de mazos, que es donde vamos a colocar nuestras cartas luego de que el usuario haga click


//seleccionamos el elemento cartas, que contiene los botones que utiliza el usuario


//creamos un array vacío en el que guardaremos las cartas mezcladas. De este modo no modificamos el array original de cartas.

//aquí creamos todas las variables que guardarán todos nuestros mazos.

window.onload = function() {
  //cuando comenzamos el juego ejecutamos ciertas funciones

  //aquí sería el lugar ideal para ejecutar las funciones que realizan esas acciones.

  //necesitamos mezclar nuestras cartas.
  //también necesitamos armar los 5 mazos.
}

/*
 * Necesitamos una función para armar nuestros mazos.
 * Tenemos una función que asigna una cantidad de
 * cartas aleatorias cada vez que la llamamos.
 * Consoleamos el resultado. Qué está sucediendo?
*/

function comenzarJuego() {
  //esta función debe mezclar las cartas y guardar el resultado en una variable.
  //por ejemplo: cartasMezcladas = funcionAUtilizar(pasamos nuestra array de cartas);


  //debemos devolver todas las cartas mezcladas.
  
}

function armarMazos() {
  //esta funcion debe armar cada mazo, total 5. 
  //en cada mazo deberíamos:
  //asignar al mazo el resultado de la función armarMazo;
 
}

//escuchamos el click en los mazos.
contenedorMazos.addEventListener('click', clickEnMazos);
//borrar antes de entragar.

function clickEnMazos() {
  //vamos a utilizar esta función para cuando el usuario haga click en un mazo.
  //esta función recibe de manera tácita el objeto event.
  //por ejemplo: podríamos consolear el target del event, la clase o el textContent.

  // console.log(event.target);
  // console.log(event.target.textContent);
  // console.log(event.target.className);

  //una delegación de evento es cuando: en vez de escuchar el click en el elemento en si
  //lo escuchamos en el padre de ese elemento.
  //de este modo con un solo "event handler" podemos detectar el click en varios elementos
  //y utilizando estructuras condicionales cambiar el código que se ejecuta en cada caso.

  //vamos a guardar en una variable el elemento padre del target de nuestro evento.
  //para ello necestamos una nueva propiedad que se llama parentNode y
  //un método que se llama getAttribute();

  //creamos dos variables: en una guardamos el elemento padre, y en la otra guardamos el id del elemento padre.

  var elementoPadre = event.target.parentNode;
  var elementoPadreId = elementoPadre.getAttribute('id');
  // console.log(event.target);
  // console.log(elementoPadre);

  //una vez que tenemos guardado el id del padre del elemento que disparó el evento
  //comenzamos con nuestro if / else.

  //primero queremos que nuestro código se ejecute sólo si el usuariio ha hecho click en un node del tipo botón. Para ello necesitamos saber la propiedad nodeName.

  //console.log(event.target.nodeName);

  if (event.target.nodeName == 'BUTTON') {
    if (elementoPadreId == 'mazo1') {

      //para cada mazo tenemos que crear una función que
      //cree cada una de las cartas para mostrar en el front-end.
      //esta función la creamos afuera del evento y la ejecutamos aquí.
      //de este modo la podemos volver a llamar cuando nos es necesario.

      //llamamos la función de crear cartas.
      // console.log('debemos crear el mazo 1');

    } else if (elementoPadreId == 'mazo2') {

       //llamamos la función de crear cartas.
      // console.log('debemos crear el mazo 2');

    } else if (elementoPadreId == 'mazo3') {

       //llamamos la función de crear cartas.
      // console.log('debemos crear el mazo3');

    } else if (elementoPadreId == 'mazo4') {

       //llamamos la función de crear cartas.
      // console.log('debemos crearr el mazo4');

    } else if (elementoPadreId == 'mazo5') {

       //llamamos la función de crear cartas.
      // console.log('debemos crear el mazo5');

    } else {
      // console.log('algo salió mal, no hemos podido crear un mazo.');
    }

    //ahora ya tenemos creadas nuestras cartas en el front end.
    //sin embargo, si volvemos a hacer click en el boton del mazo, sigue creando nodos.
    //debemos utilizar un método para frenar este comportamiento.
    //en nuestras funcionesGenerales tenemos la posibilidad de agregar un atributo

    //sólo tendríamos que seleccionar el elemento al que se le ha hecho click y aplicarle este método para deshabilitar el botón del mazo luego de que se hayan creado las cartas.

    //además deberíamos añadir la clase 'clicked' al elemento padre, así nos queda una referencia en el dom de lo que ha sucedido, y además estilizamos el mazo clickeado.


    //por último, necesitamos controlar los mazos que han sido utilizados, ya que el usuario sólo puede hacer click en 4 mazos para jugar.

    //tenemos que crear una variable de control para cuando el usuario haga click sume uno a su valor. Y cuando ese valor sea igual a 4 deshabilitar el último mazo.

    //vamos a crear una variable global! que se llame mazosUtilizados, y la vamos a inicializar con el valor 0. (hay otra indicación para esto más arriba)

    //ahora, cuando el usuario haya click en un mazo, le sumamos 1 a nuestra varible mazos utilizados.


    //controlamos con un if si la cantidad de mazos es igual a 4, si lo es, deshabilitamos el último mazo.

    if (mazosUtilizados == 4) {
      // console.log('queda un sólo mazo para usar.');

      //seleccionamos todos los mazos del dom.
      var todosLosMazos = elementoPadre.parentNode.children;
      // console.log(todosLosMazos);

      //las propiedades parentNode.children nos devuelve una htmlColletion.
      //la cual es "similar" a un array, pero no es lo mismo, por lo tanto
      //tendremos que convertirla en un array, para poder utilizar los métodos de esta.
      //Array.prototype.slice.call(htmlCollection);

      todosLosMazos = Array.prototype.slice.call(todosLosMazos);

      // console.log(todosLosMazos);

      //ahora vamos a buscar el último mazo libre utilizando el método de array find(); 

      var ultimoMazo = todosLosMazos.find(function(mazo) {
        //devolvemos solo el mazo cuyo atributo clase sea  DISTINTO a mazo-principal clicked;
        return mazo.className !== 'mazo-principal clicked';
      });

      //utilizando las funciones generales, deshabilitamos el ultimo mazo.
      //el atributo debe ser aplicado al botton. Utilizar la propiedad:
      //firstElementChild.

      funcionesGenerales.agregarAtributo(ultimoMazo.firstElementChild, 'disabled', 'disabled');

      //por último, le agregamos la clase last al último mazo.
      funcionesGenerales.agregar(ultimoMazo, 'last');
    }

    //una vez que ya tenemos resuelto todo lo relacionado a los mazos, vamos a ver qué hacemos con las cartas desplegadas!!

    //tenemos que escuchar el click en las cartas, comparar las selecciones etc.
    //llamamos a la función escucharCartas();
    
  }
}

function escucharCartas() {
  //seleccionamos las cartas que están desplegadas en el tablero. podríamos utilizar una clase para ello. una clase que tengan en común.

  //creamos un array vacía para guardar las cartas que son seleccionadas por el usuario.
  var selected = [];

  //para ello necesitamos escuchar el click del usuario en las cartas.
  //en este caso también vamos recorrer todas las cartas que hay en cartas con un loop for. para detectar en qué carta se ha hecho click.

  //creamos un for loop
  for (var i = 0; i < cartas.length; i++) {
    //escuchamos el click en cada [index] de nuestra array cartas.
    cartas[i].addEventListener('click', function() {
      //verificamos que el click sea sobre un BUTTON.
      if (event.target.nodeName == 'BUTTON') {
        //guardamos en selected mediante el método push el resultado de la ejecución de la función obtenerCarta() pasando como parámetro el elemento sobre el que se le ha hecho click (this);
        //qué es this: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this
        selected.push(obtenerCarta(this));
        // console.log(selected);

        //si selected.length es igual a dos, debemos comparar las dos cartas.
          if (selected.length == 2) {
            //llamaremos a la función compararElementos(selected) pasando como parámetro nuestra array selected.

            compararCartas(selected);

          //si es mayor que 3 o igual a 3, debemos vaciar selected.
          } else if (selected.length >= 3) {
            //si selected, por algún motivo, tuviera un tamaño mayor a 3, vaciamos selected con la funcionn vaciar array de funciones generales.
            funcionesGenerales.vaciarArray(selected);
          }

          //también debemos controlar si la cantidad de mazos utilizados es igual a 4
          //el usuario puede seleccionar hasta 4 mazos, pero si al finalizar todos los emparejamientos queda con muchas cartas, le tendremos que mostrar la opción de obtener más cartas del mazo sin utilizar. El número de cartas que reciba será al azar.

          if (mazosUtilizados == 4) {
            //debemos verificar si hay todavía pares antes de mostrale el cartel al usuario de la última oportunidad.
            //para eso vamos a crear una función: verificarPares();
            if (verificarPares() == true) {
              mostrarCartelUltimaOportunidad();
            }
          } else if (mazosUtilizados == 5) {
            if (verificarPares() == true) {
              mostrarCartelFinal();
            }
          }
        }
    });
  }
}
//==================================
//crear funciones aquí.
//==================================

// var posiblesMatches = [];

function verificarPares() {
  //esta función deberá recorrer un array de todas las cartas que hay en el tablero.
  //para ello habrá que crear una variable que guarde
  //todas las .carta que hay en el tablero.

  //por cada una de las cartas en el tablero, deberemos comparar con las demás para conocer si hay alguna opción de encontrar un par, y eliminarla en ese caso.
  //es decir 1 carta se compara con todas las demás, y así, hasta que no quede nada por comparar.

  //debemos crear un array temporal con todas las cartas
  var arrTemp = [];

  //este loop guarda en el arrayTemporal la carta que actualmente está viendo la función, sea index 0, 1, 2, etc.

  for (var i = 0; i < cartas.length; i++) {
    var cartaActual = cartas[i];
    arrTemp.push(obtenerCarta(cartaActual));
  }

  //controlamos con un if si la función encontrarPares nos devuelve 0,
  //es decir que no hay mas pares posibles.
  //en ese caso devolvemos true.
  if (encontrarPares(arrTemp) == 0) {
    // console.log('no hay más pares');
    return true;
  }
  //si todavía hay pares devolvemos false;
  return false;
}
function mostrarCartelUltimaOportunidad() {
  //seleccionamos el último mazo que queda sin usar en el tablero. Recordemos que le habíamos puesto una clase para identificarlo.

  //guardamos el id del último mazo antes seleccionado.

  //seleccionamos el contenedor de la última change.
  

  //seleccionamos los botones para aceptar la última chance o no
  
  //utilizamos nuestras funciones generales para quitarle la clase hidden al contenedor de ultima change


  //escuchamos el click en el botón si.
  function obtenerUltimaOportunidad(mazo) {
  //y ejecutamos la función obtenerUltimaChange(id) que recibe como parámetro el id del último mazo disponible.

  //también debemos escuchar el click en el botón no, 
  //y ejecutar la función mostrar cartel final.

}
function compararCartas(array) {
  //seleccionamos los dos elementos del dom que coincidan en sus atributos con los valores que tenemos guardados en nuestra array.
  // console.log(array[0]);
  // console.log(array[1]);
  // var cartaUno = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');

  // console.log(cartaUno);

  //la segunda carta:

  // console.log(cartaDos);

  //guardamos en distintas variables el numero y el color de cada carta de modo que sea más fácil hacer las comparaciones, y más legible.

  // var cartaUnoNombre = array[0][0];
  // var cartaUnoPalo = array[0][1];
  // var cartaUnoColor = array[0][2];

  //lo mismo para carta dos.

  //ahora comparamos
  //vamos a filtrar la comparación. Si alguno de nuestros elementos no existen, son null.
  //vaciamos la array y volvemos a comenzar con las selecciones.
  if (cartaUno == null || cartaDos == null) {

  } else if (cartaUnoNombre == 'jocker' || cartaDosNombre == 'jocker') {
    //si alguno de las cartas es un jocker, también salimos.

    // console.log('se ha utilizado jocker, continuar');
    //utilizamos el método remove(); para eliminar las dos cartas del tablero.
    //ejecutar función eliminarCarta(cartauno, cartados); necesita dos parámetros que son las dos cartas del dom que hay que eliminar.

  } else if ((cartaUnoNombre != cartaDosNombre) || (cartaUnoColor != cartaDosColor) || (cartaUnoPalo == cartaDosPalo)) {
    //en este else if verificamos que no haya habido ningún tipo de coincidencias, de palo, nombre o color.
    // console.log('no hubo coincidencias, seguir intentando');

    //quitamos la clase disabled, que le habíamos agregado al seleccionarla.
   

    //agregamos la clase shake a las cartas en las que el usuario había hecho click
    //para advertirle que están mal (que no hubo coincidencia).
    

    //utilizamos la función setTimeout para quitar la clase shake a las mismas cartas.
    setTimeout(function () {
      
    }, 1000);
    //setTimeout(); recibe dos parámetros. el primero es la función a ejecutar cuando pase el tiempo establecido. El segundo es el tiempo en milisegundos.
    //setTimeout(funcion(){}, tiempo);
  } else {
    //nuestro caso default será cuando las cartas coicidan.
    //en este caso vamos a llamar la la función eliminarCarta, para quitar las cartas seleccionadas del dom.
    
  }
  //al finalizar toda la lógica, vaciamos el array selected, para volver a empezar.
  
}

//====================================
//  FUNCIONES DEL JUEGO ESENCIALES.
//====================================
  function obtenerUltimaOportunidad(mazoid) {
    var cartasAEntregar;
    if (mazoid == 'mazo1') {
      cartasAEntregar = mazo1.splice(0, getRandomInt(1, mazo1.length));
    } else if (mazoid == 'mazo2') {
      cartasAEntregar = mazo2.splice(0, getRandomInt(1, mazo2.length));
    } else if (mazoid == 'mazo3') {
      cartasAEntregar = mazo3.splice(0, getRandomInt(1, mazo3.length));
    } else if (mazoid == 'mazo4') {
      cartasAEntregar = mazo4.splice(0, getRandomInt(1, mazo4.length));
    } else if (mazoid == 'mazo5') {
      cartasAEntregar = mazo5.splice(0, getRandomInt(1, mazo5.length));
    }
    // console.log(cartasAEntregar);
    mazosUtilizados = 5;
    crearCartas(cartasAEntregar, '#cartas');

    var ultimaChanceContenedor = document.getElementById('last-chance');
    
    ultimaChanceContenedor.innerHTML = '<h3>Hemos agregado: ' + cartasAEntregar.length + ' cartas al tablero</h3>';
    
    escucharCartas();
  }
  function contarCartas(array) {
    var cantidad = 0;
    for (var i = 0; i < array.length; i++) {
      var numeroCarta = array[i].getAttribute('carta-numero');
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
function mostrarCartelFinal() {
  var cartasSinUsar = document.querySelectorAll('.carta');
  // console.log(cartasSinUsar);
  var puntaje = contarCartas(cartasSinUsar);
  // console.log(puntaje);
  if (puntaje >= 10) {
    mostrarCartel('GAME OVER', 'Lo sentimos pero perdiste!!!', puntaje);
  } else {
    mostrarCartel('GANASTE!!!', 'Venciste!! Felicitaciones!! La próxima no será tan fácilllll!!', puntaje);
  }
}
function mostrarCartel(estado, frase, puntaje) {
  var contenedor = document.createElement('div');
  contenedor.id = 'cartel';
  var titulo = document.createElement('h2');
  titulo.textContent = '¡' + estado + '!';
  var parrafo = document.createElement('p');
  parrafo.textContent = frase;
  contenedor.append(titulo, parrafo);

  if (puntaje) {
    var score = document.createElement('p');
    score.textContent = 'Tu puntaje a sido: ' + puntaje;
    contenedor.append(score);

  }

  document.querySelector('#message').append(contenedor);
}
function encontrarPares(array) {

  //inicializamos la cantidad de pares en 0.
  var cantidadDePares = 0;

  var pares = array.forEach(function (current, index, array) {
    //guardamos una versión de la array sin el elemento actual del loop.

    array.splice(array.indexOf(current), 1);
    //hacemos un loop en el que chequeamos si alguna de los otras cartas que han quedadoo en el array son pares o no.

    for (var i = 0; i < array.length; i++) {
      if ((current[0] == array[i][0]) && (current[2] == array[i][2])) {
        // posiblesMatches.push([current[0], current[2]]);
        cantidadDePares++;
      } else if (current[0] == 'jocker' || array[i][0] == 'jocker') {
        cantidadDePares++;
      }
    }
  });
  return cantidadDePares;
}
function obtenerCarta(carta) {
  var numero = carta.getAttribute('carta-numero');
  var palo = carta.getAttribute('carta-palo');
  var color = carta.getAttribute('carta-color');
  var cartaSelected = [];

  cartaSelected.push(numero);
  cartaSelected.push(palo);
  cartaSelected.push(color);

  return cartaSelected;
}
function crearCartas(array, selector) {
  array.forEach(function (el) {
    var carta = document.createElement('button');
    funcionesGenerales.agregar(carta, 'carta');
    funcionesGenerales.agregarAtributo(carta, 'carta-numero', el[0]);
    funcionesGenerales.agregarAtributo(carta, 'carta-palo', el[1]);
    funcionesGenerales.agregarAtributo(carta, 'carta-color', el[2]);
    carta.innerHTML = '<span>' + el[0] + '</span>';
    funcionesGenerales.agregar(carta, el[1]);
    funcionesGenerales.agregar(carta, el[2]);
    funcionesGenerales.agregar(document.querySelector(selector), 'is-visible');
    document.querySelector(selector).append(carta);
    return;
  });
}
function eliminarCarta(cartauno, cartados) {
  cartauno.remove();
  cartados.remove();
  return;
}
//funcion para mezclar las cartas.
function shuffle(array) {
  var mazo = array.length, t, i;
  //while there remain elements to shuffle
  while (mazo) {
    //pick a remaining element.
    i = Math.floor(Math.random() * mazo--);
    //and swap it with the current element
    t = array[mazo];
    array[mazo] = array[i];
    array[i] = t;
  }
  return array;
}
function armarMazo() {
  //ver método splice.
  return cartasMezcladas.splice(0, getRandomInt(5, 15));
}
//asignar cantidad de cartas en un mazo aleatoriamente.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}