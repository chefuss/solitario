// TODO aquí debemos seleccionar los elementos del DOM: #mazos y #cartas.

var Juego = {
  cartas: Carta,
  //TODO aquí debemos crear las propiedades contenedoras de mazos y cartas y guardar la referencia el elemento del DOM
  naipes: [
    new Carta('A', 'corazon', 'rojo'),
    new Carta(2, 'corazon', 'rojo'),
    new Carta(3, 'corazon', 'rojo'),
    new Carta(4, 'corazon', 'rojo'),
    new Carta(5, 'corazon', 'rojo'),
    new Carta(6, 'corazon', 'rojo'),
    new Carta(7, 'corazon', 'rojo'),
    new Carta(8, 'corazon', 'rojo'),
    new Carta(9, 'corazon', 'rojo'),
    new Carta(10, 'corazon', 'rojo'),
    new Carta('J', 'corazon', 'rojo'),
    new Carta('Q', 'corazon', 'rojo'),
    new Carta('K', 'corazon', 'rojo'),
    new Carta('A', 'pica', 'negro'),
    new Carta(2, 'pica', 'negro'),
    new Carta(3, 'pica', 'negro'),
    new Carta(4, 'pica', 'negro'),
    new Carta(5, 'pica', 'negro'),
    new Carta(6, 'pica', 'negro'),
    new Carta(7, 'pica', 'negro'),
    new Carta(8, 'pica', 'negro'),
    new Carta(9, 'pica', 'negro'),
    new Carta(10, 'pica', 'negro'),
    new Carta('J', 'pica', 'negro'),
    new Carta('Q', 'pica', 'negro'),
    new Carta('K', 'pica', 'negro'),
    new Carta('A', 'trebol', 'negro'),
    new Carta(2, 'trebol', 'negro'),
    new Carta(3, 'trebol', 'negro'),
    new Carta(4, 'trebol', 'negro'),
    new Carta(5, 'trebol', 'negro'),
    new Carta(6, 'trebol', 'negro'),
    new Carta(7, 'trebol', 'negro'),
    new Carta(8, 'trebol', 'negro'),
    new Carta(9, 'trebol', 'negro'),
    new Carta(10, 'trebol', 'negro'),
    new Carta('J', 'trebol', 'negro'),
    new Carta('Q', 'trebol', 'negro'),
    new Carta('K', 'trebol', 'negro'),
    new Carta('A', 'rombo', 'rojo'),
    new Carta(2, 'rombo', 'rojo'),
    new Carta(3, 'rombo', 'rojo'),
    new Carta(4, 'rombo', 'rojo'),
    new Carta(5, 'rombo', 'rojo'),
    new Carta(6, 'rombo', 'rojo'),
    new Carta(7, 'rombo', 'rojo'),
    new Carta(8, 'rombo', 'rojo'),
    new Carta(9, 'rombo', 'rojo'),
    new Carta(10, 'rombo', 'rojo'),
    new Carta('J', 'rombo', 'rojo'),
    new Carta('Q', 'rombo', 'rojo'),
    new Carta('K', 'rombo', 'rojo'),
    new Carta('jocker', 'jocker', 'jocker1'),
    new Carta('jocker', 'jocker', 'jocker2')
  ],
  //TODO aquí debe estar la propiedad cartasMezcladas inicializada correctamente
  //TODO aquí deben estar los mazos: mazo1, mazo2, etc.
  //TODO aquí debemos crear la propiedad mazosUtilizados e inicializarla correctamente
  comenzarJuego: function() {
    this.cartasMezcladas = this.mezclar(this.naipes);
    console.log('juego listo y cargado para comenzar');
  },
  mezclar: function(array) {
    var mazo = array.length,
      t,
      i;
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
  },
  // TODO: aquí debe estar el método armarMazos
  armarMazo: function() {
    return this.cartasMezcladas.splice(0, this.obtenerNumeroRandom(5, 15));
  },
  obtenerNumeroRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  obtenerUltimaOportunidad: function(mazo) {
    var cartasAEntregar;
    if (mazo == 'mazo1') {
      cartasAEntregar = this.mazo1.splice(0, this.obtenerNumeroRandom(1, this.mazo1.length));
    } else if (mazo == 'mazo2') {
      cartasAEntregar = this.mazo2.splice(0, this.obtenerNumeroRandom(1, this.mazo2.length));
    } else if (mazo == 'mazo3') {
      cartasAEntregar = this.mazo3.splice(0, this.obtenerNumeroRandom(1, this.mazo3.length));
    } else if (mazo == 'mazo4') {
      cartasAEntregar = this.mazo4.splice(0, this.obtenerNumeroRandom(1, this.mazo4.length));
    } else if (mazo == 'mazo5') {
      cartasAEntregar = this.mazo5.splice(0, this.obtenerNumeroRandom(1, this.mazo5.length));
    }
    this.mazosUtilizados = 5;
    this.cartas.prototype.crearCartas(cartasAEntregar, '#cartas');

    var ultimaChanceContenedor = document.getElementById('last-chance');
    ultimaChanceContenedor.innerHTML =
      '<h3>Hemos agregado: ' +
      cartasAEntregar.length +
      ' cartas al tablero</h3>';
    escucharCartas();
  }
};

window.onload = function () {
    Juego.comenzarJuego();
    Juego.armarMazos();
}

//escuchamos el click en los mazos.
Juego.contenedorMazos.addEventListener('click', clickEnMazos);


function clickEnMazos() {
var elementoPadre = event.target.parentNode;
var elementoPadreId = elementoPadre.getAttribute('id');
if (event.target.nodeName == 'BUTTON') {
    if (elementoPadreId == 'mazo1') {
        Carta.prototype.crearCartas(Juego.mazo1, '#cartas');
    } else if (elementoPadreId == 'mazo2') {
        Carta.prototype.crearCartas(Juego.mazo2, '#cartas');
    } else if (elementoPadreId == 'mazo3') {
        Carta.prototype.crearCartas(Juego.mazo3, '#cartas');
    } else if (elementoPadreId == 'mazo4') {
        Carta.prototype.crearCartas(Juego.mazo4, '#cartas');
    } else if (elementoPadreId == 'mazo5') {
        Carta.prototype.crearCartas(Juego.mazo5, '#cartas');
    } else {
        console.log('algo salió mal, no hemos podido crear un mazo.');
    }
    funcionesGenerales.agregar(elementoPadre, 'clicked');
    funcionesGenerales.agregarAtributo(event.target, 'disabled', 'disabled');
    Juego.mazosUtilizados++;
    if (Juego.mazosUtilizados == 4) {
        var todosLosMazos = elementoPadre.parentNode.children;
        todosLosMazos = Array.prototype.slice.call(todosLosMazos);
        var ultimoMazo = todosLosMazos.find(function (mazo) {
            return mazo.className !== 'mazo-principal clicked';
        });
        funcionesGenerales.agregarAtributo(ultimoMazo.firstElementChild, 'disabled', 'disabled');
        funcionesGenerales.agregar(ultimoMazo, 'last');
    }
    escucharCartas();
    }
}
function escucharCartas() {
    var cartas = document.querySelectorAll('.carta');
    var selected = [];
    //creamos un for loop
    for (var i = 0; i < cartas.length; i++) {
        cartas[i].addEventListener('click', function () {
            //verificamos que el click sea sobre un BUTTON.
            if (event.target.nodeName == 'BUTTON') {
                selected.push(Carta.prototype.obtenerCarta(this));
                if (selected.length == 2) {
                    Carta.prototype.compararCartas(selected);
                } else if (selected.length >= 3) {
                    funcionesGenerales.vaciarArray(selected);
                }
                if (Juego.mazosUtilizados == 4) {
                    if (Carta.prototype.verificarPares() == true) {
                        mostrarCartelUltimaOportunidad();
                    }
                } else if (Juego.mazosUtilizados == 5) {
                    if (Carta.prototype.verificarPares() == true) {
                        mostrarCartelFinal();
                    }
                }
            }
        });
    }
} 

// TODO: aquí debe ir la función mostrarCartelUltimaOportunidad

function mostrarCartelFinal() {
    var cartasSinUsar = document.querySelectorAll('.carta');
    var puntaje = Carta.prototype.contarCartas(cartasSinUsar);
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



