var funcionesGenerales = {
  quitar: function(element, clase) {
    return element.classList.remove(clase);
  },
  agregar: function(element, clase) {
    return element.classList.add(clase);
  },
  toggleState: function(element, clase) {
    return element.classList.toggle(clase);
  },
  agregarAtributo: function(element, atributo, atributoValor) {
    return element.setAttribute(atributo, atributoValor);
  },
  obtenerAtributo: function(element, atributo) {
    return element.getAttribute(atributo);
  },
  vaciarArray: function(array) {
    return array.length = 0;
  }
}

// TODO selecciona los elementos del dom que sean necesarios para darle funcionalidad al contenedor reglas

var divReglas = document.getElementById('reglas');
var divReglasButtonON = document.getElementById('reglasButton');
var divReglasButtonOFF = document.getElementsByClassName('button-cerrar')[0];

divReglasButtonON.addEventListener('click',function() {
  funcionesGenerales.quitar(divReglas, 'closed');
});
divReglasButtonOFF.addEventListener('click',function() {
  funcionesGenerales.agregar(divReglas, 'closed');
});

// TODO luego haz lo que sea necesario para escuchar al usuario y actuar en consecuencia