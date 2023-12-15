class Persona {
  constructor(apellido, nombre, edad) {
    this.apellido = apellido;
    this.nombre = nombre;
    this.edad = edad;
  }
}

const personas = [];

const agregar = () => {
  const apellido = document.getElementById('apellido').value;
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;

  personas.push(new Persona(apellido, nombre, edad));
  mostrarTabla();
  limpiarFormulario();
};

const mostrarTabla = () => {
  const cuerpoTabla = document.getElementById('cuerpoTabla');
  cuerpoTabla.innerHTML = personas.map((persona, index) =>
    `<tr>
      <td>${persona.apellido}</td>
      <td>${persona.nombre}</td>
      <td>${persona.edad}</td>
      <td><button onclick="eliminar(${index})">Eliminar</button></td>
    </tr>`
  ).join('');
};

const limpiarFormulario = () => {
  document.getElementById('miFormulario').reset();
};

const ordenar = columna => {
  const criterio = columna === 'apellido'
    ? (a, b) => a.apellido.localeCompare(b.apellido)
    : columna === 'nombre'
    ? (a, b) => a.nombre.localeCompare(b.nombre)
    : (a, b) => a.edad - b.edad;

  personas.sort(criterio);
  mostrarTabla();
};

const eliminar = index => {
  personas.splice(index, 1);
  mostrarTabla();
};
