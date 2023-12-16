class Personas {
    constructor() {
      this.array1 = [];
      this.array2 = [];
    }
  
    array1Push(nombre, apellido) {
      this.array1.push({ nombre, apellido });
    }
  
    array2Push(personas) {
      this.array2.push(...personas);
      this.mostrarEnInterfaz();
    }
  
    verificarArrays() {
      const apellidosMasSeis = this.array1.every(persona => persona.apellido.length > 6);
  
      if (apellidosMasSeis) {
        const apellidosLargos = this.array1.filter(persona => persona.apellido.length > 6);
        this.array2Push(apellidosLargos);
        this.array2.sort((a, b) => a.apellido.localeCompare(b.apellido));
        this.array1 = []; // Limpiar array1 si se transfieren elementos al array2
      } else {
        this.mostrarEnInterfaz(this.array2);
      }
    }
  
    limpiarTodo() {
      this.array1 = [];
      this.array2 = [];
      this.mostrarEnInterfaz();
    }
  
    mostrarEnInterfaz(personas = this.array2) {
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = personas.map(persona => `<p>${persona.nombre} ${persona.apellido}</p>`).join('');
    }
  }
  
  const personas = new Personas();
  
  const array1Push = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    personas.array1Push(nombre, apellido);
  };
  
  const array2Push = () => {
    personas.array2Push(personas.array2);
  };
  
  const verificarArrays = () => {
    personas.verificarArrays();
  };
  
  const limpiarTodo = () => {
    personas.limpiarTodo();
  };
  