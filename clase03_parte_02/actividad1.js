// Generar un número aleatorio en un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Crear un objeto para almacenar la cantidad de repeticiones de cada número
  let repeticiones = {};

  // Generar 10,000 números aleatorios y contar las repeticiones
  for (let i = 0; i < 10000; i++) {
    let numero = generarNumeroAleatorio(1, 20);

    if (repeticiones[numero]) {
      repeticiones[numero]++;
    } else {
      repeticiones[numero] = 1;
    }
  }

  // Mostrar la cantidad de repeticiones de cada número
console.log(repeticiones)