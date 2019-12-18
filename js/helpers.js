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

//selecciona los elementos del dom que sean necesarios para darle funcionalidad al contenedor reglas
//luego haz lo que sea necesario para escuchar al usuario y actuar en consecuencia