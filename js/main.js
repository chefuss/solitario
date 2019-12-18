var reglasButton = document.getElementById('reglasButton');
var reglasCerrar = document.getElementsByClassName('button-cerrar')[0];
var reglasContainer = document.getElementById('reglas');

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

//utilizar los métodos de nuestro objeto funcioones generales.
//1- escuchar el botón reglasbutton y si el usuario hace click quitar la clase closed de reglasContainer.

//2- escuchar el botón reglasCerrar y si el usuarioo hace click agregar la clase closed a reglasContainer.

reglasButton.onclick = function() {
  funcionesGenerales.quitar(reglasContainer, 'closed');
};
reglasCerrar.onclick = function() {
  funcionesGenerales.agregar(reglasContainer, 'closed');
}
