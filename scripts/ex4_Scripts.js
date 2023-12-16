class Personas {
    constructor() {
      this.array1 = [];
      this.array2 = [];
      this.verificacionAnterior = '';
    }
  
    array1Push(nombre, apellido) {
      const existeEnArray1 = this.array1.some(persona => persona.nombre === nombre && persona.apellido === apellido);
      const existeEnArray2 = this.array2.some(persona => persona.nombre === nombre && persona.apellido === apellido);
  
      existeEnArray1 || existeEnArray2 || this.array1.push({ nombre, apellido });
    }
  
    verificarArrays() {
      const apellidosMasSeis = this.array1.every(persona => persona.apellido.length > 6);
  
      const apellidosLargos = this.array1.filter(persona => persona.apellido.length > 6);
      this.array2.push(...apellidosLargos);
  
      this.array2.sort((a, b) => a.apellido.localeCompare(b.apellido));
      this.mostrarEnInterfaz();
    }
  
    limpiarTodo() {
      this.array1 = [];
      this.array2 = [];
      this.verificacionAnterior = '';
      this.mostrarEnInterfaz();      document.getElementById('apellido').value = '';
      document.getElementById('nombre').value = '';
    }
  
    mostrarEnInterfaz() {
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = this.array2.map(persona => `<p>${persona.nombre} ${persona.apellido}</p>`).join('');
    }
  }
  
  const personas = new Personas();
  
  const array1Push = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    personas.array1Push(nombre, apellido);
  };
  
  const verificarArrays = () => {
    personas.verificarArrays();
  };
  
  const limpiarTodo = () => {
    personas.limpiarTodo();
  };
  