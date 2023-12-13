class Numeros {
    constructor(inputString) {
      this.numeros = inputString.split(',').map(Number);
    }
  
    sonMayoresA5() {
      return this.numeros.every(num => num > 5);
    }
  
    sustituirNumeros(nuevoNumero) {
      this.numeros = this.sonMayoresA5() ? this.numeros.fill(Number(nuevoNumero)) : this.numeros;
    }
  
    obtenerResultado() {
      return this.numeros;
    }
  }
  
  const verificarNumeros = () => {
    const numerosInput = document.getElementById('numeros').value;
    const numeroSustituirInput = document.getElementById('numeroSustituir').value;
  
    const numeros = new Numeros(numerosInput);
    numeros.sustituirNumeros(numeroSustituirInput);
  
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Resultado: [${numeros.obtenerResultado()}]`;
  };
  