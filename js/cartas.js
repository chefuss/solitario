//creamos una entidad cartas.
function Carta(valor, palo, color) {
  this.valor = valor;
  this.palo = palo;
  this.color = color;
}

Carta.prototype.crearCartas = function (array, selector) {
  array.forEach(function(el) {
    var carta = document.createElement('button');
    funcionesGenerales.agregar(carta, 'carta');
    funcionesGenerales.agregarAtributo(carta, 'carta-numero', el.valor);
    funcionesGenerales.agregarAtributo(carta, 'carta-palo', el.palo);
    funcionesGenerales.agregarAtributo(carta, 'carta-color', el.color);
    carta.innerHTML = '<span>' + el.valor + '</span>';
    funcionesGenerales.agregar(carta, el.palo);
    funcionesGenerales.agregar(carta, el.color);
    funcionesGenerales.agregar(document.querySelector(selector), 'is-visible');
    document.querySelector(selector).append(carta);
    return;
  });
};

Carta.prototype.obtenerCarta = function(carta) {
    var numero = carta.getAttribute('carta-numero');
    var palo = carta.getAttribute('carta-palo');
    var color = carta.getAttribute('carta-color');
    var cartaSelected = [];

    cartaSelected.push(numero);
    cartaSelected.push(palo);
    cartaSelected.push(color);

    return cartaSelected;
}

Carta.prototype.eliminarCarta = function(cartauno, cartados) {
    cartauno.remove();
    cartados.remove();
    return;
}

Carta.prototype.encontrarPares = function(array) {
    //inicializamos la cantidad de pares en 0.
    var cantidadDePares = 0;
    array.forEach(function (current, index, arr) {
        //guardamos una versión de la array sin el elemento actual del loop.
        arr.splice(index, 1);
        //hacemos un loop en el que chequeamos si alguna de los otras cartas que han quedadoo en el array son pares o no.
        for (var i = 0; i < arr.length; i++) {
            if ((current[0] == arr[i][0]) && (current[2] == arr[i][2])) {
                cantidadDePares++;
            } else if (current[0] == 'jocker' || arr[i][0] == 'jocker') {
                cantidadDePares++;
            }
        }
    });
    return cantidadDePares;
}

Carta.prototype.compararCartas = function(array) {
  var cartaUno = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');
  var cartaDos = document.querySelector('[carta-numero="' + array[1][0] + '"][carta-palo="' + array[1][1] + '"]');

  var cartaUnoNombre = array[0][0];
  var cartaUnoPalo = array[0][1];
  var cartaUnoColor = array[0][2];

  var cartaDosNombre = array[1][0];
  var cartaDosPalo = array[1][1];
  var cartaDosColor = array[1][2];

  if (cartaUno == null || cartaDos == null) {
    funcionesGenerales.vaciarArray(array);
  } else if (cartaUnoNombre == 'jocker' || cartaDosNombre == 'jocker') {
    this.cartas.eliminarCarta(cartaUno, cartaDos);
  } else if (
    cartaUnoNombre != cartaDosNombre ||
    cartaUnoColor != cartaDosColor ||
    cartaUnoPalo == cartaDosPalo
  ) {
    //quitamos la clase disabled, que le habíamos agregado al seleccionarla.
    funcionesGenerales.quitar(cartaUno, 'disabled');
    funcionesGenerales.quitar(cartaDos, 'disabled');

    funcionesGenerales.agregar(cartaUno, 'shake');
    funcionesGenerales.agregar(cartaDos, 'shake');

    //utilizamos la función setTimeout para quitar la clase shake a las mismas cartas.
    setTimeout(function() {
      funcionesGenerales.quitar(cartaUno, 'shake');
      funcionesGenerales.quitar(cartaDos, 'shake');
    }, 1000);
  } else {
    this.cartas.eliminarCarta(cartaUno, cartaDos);
  }
  funcionesGenerales.vaciarArray(array);
}

Carta.prototype.verificarPares = function() {
    var cartas = document.querySelectorAll('.carta');
    var arrTemp = [];
    for (var i = 0; i < cartas.length; i++) {
        var cartaActual = cartas[i];
        arrTemp.push(this.obtenerCarta(cartaActual));
    }
    if (this.encontrarPares(arrTemp) == 0) {
        return true;
    }
    return false;
}

Carta.prototype.contarCartas = function(array) {
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

Carta.prototype.compararCartas = function(array) {
    var cartaUno = document.querySelector('[carta-numero="' + array[0][0] + '"][carta-palo="' + array[0][1] + '"]');
    var cartaDos = document.querySelector('[carta-numero="' + array[1][0] + '"][carta-palo="' + array[1][1] + '"]');

    var cartaUnoNombre = array[0][0];
    var cartaUnoPalo = array[0][1];
    var cartaUnoColor = array[0][2];

    var cartaDosNombre = array[1][0];
    var cartaDosPalo = array[1][1];
    var cartaDosColor = array[1][2];

    if (cartaUno == null || cartaDos == null) {
        funcionesGenerales.vaciarArray(array);

    } else if (cartaUnoNombre == 'jocker' || cartaDosNombre == 'jocker') {
        this.eliminarCarta(cartaUno, cartaDos);

    } else if ((cartaUnoNombre != cartaDosNombre) || (cartaUnoColor != cartaDosColor) || (cartaUnoPalo == cartaDosPalo)) {

        //quitamos la clase disabled, que le habíamos agregado al seleccionarla.
        funcionesGenerales.quitar(cartaUno, 'disabled');
        funcionesGenerales.quitar(cartaDos, 'disabled');

        funcionesGenerales.agregar(cartaUno, 'shake');
        funcionesGenerales.agregar(cartaDos, 'shake');

        //utilizamos la función setTimeout para quitar la clase shake a las mismas cartas.
        setTimeout(function () {
            funcionesGenerales.quitar(cartaUno, 'shake');
            funcionesGenerales.quitar(cartaDos, 'shake');
        }, 1000);
        //setTimeoout(); recibe dos parámetros. el primero es la función a ejecutar cuando pase el tiempo establecido. El segundo es el tiempo en milisegundos.
        //setTimeout(funcion(){}, tiempo);
    } else {
        //nuestro caso default será cuando las cartas coicidan.
        //en este caso vamos a llamar la la función eliminarCarta, para quitar las cartas seleccionadas del dom.
        this.eliminarCarta(cartaUno, cartaDos);
    }
    //al finalizar toda la lógica, vaciamos el array selected, para volver a empezar.
    funcionesGenerales.vaciarArray(array);
}