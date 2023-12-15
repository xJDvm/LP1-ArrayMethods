class Palabras {
    constructor() {
      this.palabrasArray = [];
    }
  
    agregarPalabras(texto) {
      const palabrasInput = texto.trim().split(' ');
      this.palabrasArray.push(...palabrasInput);
      this.mostrarPalabrasConJ();
    }
  
    mostrarPalabrasConJ() {
      const palabrasConJ = this.palabrasArray.filter(palabra => palabra.includes('j'));
      this.mostrarPrimeraYUltimaJ(palabrasConJ);
    }
  
    mostrarPrimeraYUltimaJ(palabrasConJ) {
      const primeraPalabraConJ = palabrasConJ.find(() => true);
      const ultimaPalabraConJ = palabrasConJ.length ? palabrasConJ.reduce((_, current) => current) : '';
  
      document.getElementById('primeraJ').textContent = primeraPalabraConJ || 'No se encontró palabra con "j"';
      document.getElementById('ultimaJ').textContent = ultimaPalabraConJ || 'No se encontró palabra con "j"';
    }
  
    limpiarCampos() {
      document.getElementById('palabras').value = '';
      document.getElementById('primeraJ').textContent = '';
      document.getElementById('ultimaJ').textContent = '';
      this.palabrasArray = [];
    }
  }
  
  const palabras = new Palabras();
  
  const agregarPalabras = () => {
    const texto = document.getElementById('palabras').value;
    palabras.agregarPalabras(texto);
  };
  
  const limpiarCampos = () => {
    palabras.limpiarCampos();
  };
  