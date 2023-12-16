class Numeros {
    constructor(inputString) {
      this.numeros = inputString.split(',').map(Number);
    }
  
    sonPares() {
      return this.numeros.every(num => num % 2 === 0);
    }
  
    extraerUltimoPar() {
      const numerosPares = this.numeros.filter(num => num % 2 === 0);
      return numerosPares[numerosPares.length - 1] || null;
    }
  
    obtenerResultado() {
      const resultado = this.sonPares() ? 'Todos son pares' : this.extraerUltimoPar() || 'Ninguno es par';
      return `Resultado: ${resultado}`;
    }
  }
  
  const verificarNumeros = () => {
    const numerosInput = document.getElementById('numeros').value.trim();
    const numeros = new Numeros(numerosInput);
    const resultadoDiv = document.getElementById('resultado');
  
    resultadoDiv.textContent = numerosInput === '' ? 'Resultado: Campo vacío' : numeros.obtenerResultado();
  };
  
  const limpiarCampos = () => {
    document.getElementById('numeros').value = '';
    document.getElementById('resultado').textContent = 'Resultado: ';
  };
  