class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }
  
  const array1 = [];
  const array2 = [];
  
  const pushArray1 = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
  
    array1.push(new Persona(nombre, apellido));
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
  };
  
  const pushArray2 = () => {
    array1.forEach(persona => {
      if (persona.apellido.length > 6) {
        array2.push(persona);
      }
    });
  
    array2.sort((a, b) => a.apellido.localeCompare(b.apellido));
    mostrarArray2();
  };
  
  const mostrarArray2 = () => {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = array2.map(persona => `${persona.nombre} ${persona.apellido}`).join(', ');
  };

  const limpiarCampos = () => {
    document.getElementById('resultado').textContent = '';
  };  