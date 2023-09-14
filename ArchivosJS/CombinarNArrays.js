
// ------------------------------- COMBINAR N ARRAYS ------------------------------- //

  function combinarNArrays(arrays) {
    const resultado = [];
    const indices = new Array(arrays.length).fill(0);
  
    while (indices.some((index, arrayIndex) => index < arrays[arrayIndex].length)) {
      let menorValor = Infinity;
      let menorArrayIndex = -1;
  
      // Encuentra el menor valor actual en todos los arrays
      for (let arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++) {
        const index = indices[arrayIndex];
        const array = arrays[arrayIndex];
  
        if (index < array.length && array[index] < menorValor) {
          menorValor = array[index];
          menorArrayIndex = arrayIndex;
        }
      }
  
      // Verifica si el valor ya está en el resultado antes de agregarlo
      if (!resultado.includes(menorValor)) {
        resultado.push(menorValor);
      }
  
      // Avanza el índice correspondiente
      indices[menorArrayIndex]++;
    }
  
    // Algoritmo de ordenamiento
    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - i - 1; j++) {
            if (resultado[j] > resultado[j + 1]) {
                const temp = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temp;
            }
        }
    }
  
    return resultado;
}

  
  module.exports = combinarNArrays; // Exporta la función