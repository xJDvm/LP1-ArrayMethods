class GestionArray {
  constructor() {
      this.array1 = [];
      this.array2 = [];
  }

  pushToArray(arrayName, nombre, apellido) {
    const camposVacios = [nombre, apellido].some(value => !value.trim());
    camposVacios ? alert('Por favor, completa ambos campos de texto.') : this[arrayName].push({ nombre, apellido });
    console.log(`Array 1:`, this.array1);
    console.log(`Array 2:`, this.array2);
  }

  limpiarArrays() {
      this.array1 = [];
      this.array2 = [];
      console.log('Arrays limpiados:', this.array1, this.array2);
  }

  verificarApellidos() {
    const longApellidos = this.array1.every(persona => persona.apellido.length > 6);

    const moverOrdenarArray2 = () => {
        const filtered = this.array1.filter(persona => persona.apellido.length > 6);
        this.array2.push(...filtered);
        this.array2.sort((a, b) => a.apellido.localeCompare(b.apellido));
        this.array1 = this.array1.filter(persona => persona.apellido.length <= 6);
        document.getElementById('resultado').innerText = this.array2.map(persona => `${persona.nombre} ${persona.apellido}`).join(', ');
    };

    const ordenarArray2 = () => {
        this.array2.sort((a, b) => a.apellido.localeCompare(b.apellido));
        document.getElementById('resultado').innerText = this.array2.map(persona => `${persona.nombre} ${persona.apellido}`).join(', ');
    };

    longApellidos ? moverOrdenarArray2() : ordenarArray2();
  }
}

const gestorArrays = new GestionArray();

function array1Push() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  gestorArrays.pushToArray('array1', nombre, apellido);
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
}

function array2Push() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  gestorArrays.pushToArray('array2', nombre, apellido);
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
}

function limpiarCampos() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('resultado').innerText = '';
  console.log('Campos de texto limpiados');
}

function limpiarTodo() {
  gestorArrays.limpiarArrays();
  limpiarCampos();
}

function verificarArrays() {
  gestorArrays.verificarApellidos();
}
