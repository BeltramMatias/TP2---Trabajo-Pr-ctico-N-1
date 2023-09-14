
// ------------------------------- COMBINAR DOS ARRAYS ------------------------------- //

/* function combinarDosArrays(array1, array2) {
  const resultado = [];
  let indice1 = 0;
  let indice2 = 0;

  while (indice1 < array1.length && indice2 < array2.length) {
      const elemento1 = array1[indice1];
      const elemento2 = array2[indice2];

      if (elemento1 < elemento2) {
          if (!resultado.includes(elemento1)) {
              resultado.push(elemento1);
          }
          indice1++;
      } else if (elemento1 > elemento2) {
          if (!resultado.includes(elemento2)) {
              resultado.push(elemento2);
          }
          indice2++;
      } else {
          // Ambos elementos son iguales, agrega uno y avanza ambos índices
          if (!resultado.includes(elemento1)) {
              resultado.push(elemento1);
          }
          indice1++;
          indice2++;
      }
  }

  // Agrega los elementos restantes si los hay
  while (indice1 < array1.length) {
      const elemento1 = array1[indice1];
      if (!resultado.includes(elemento1)) {
          resultado.push(elemento1);
      }
      indice1++;
  }

  while (indice2 < array2.length) {
      const elemento2 = array2[indice2];
      if (!resultado.includes(elemento2)) {
          resultado.push(elemento2);
      }
      indice2++;
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
} */

 //-----------------------------------------------------------------------------//

  function combinarDosArrays(array1, array2) {
    const resultado = [];
    let indice1 = 0;
    let indice2 = 0;
  
    while (indice1 < array1.length && indice2 < array2.length) {
      if (array1[indice1] < array2[indice2]) {
        if (!resultado.includes(array1[indice1])) {
          resultado.push(array1[indice1]);
        }
        indice1++;
      } else if (array1[indice1] > array2[indice2]) {
        if (!resultado.includes(array2[indice2])) {
          resultado.push(array2[indice2]);
        }
        indice2++;
      } else {
        // Ambos elementos son iguales, agrega uno y avanza ambos índices
        if (!resultado.includes(array1[indice1])) {
          resultado.push(array1[indice1]);
        }
        indice1++;
        indice2++;
      }
    }
  
    // Agrega los elementos restantes si los hay
    while (indice1 < array1.length) {
      if (!resultado.includes(array1[indice1])) {
        resultado.push(array1[indice1]);
      }
      indice1++;
    }
  
    while (indice2 < array2.length) {
      if (!resultado.includes(array2[indice2])) {
        resultado.push(array2[indice2]);
      }
      indice2++;
    }
  
    return resultado;
}

  
  module.exports = combinarDosArrays; // Exporta la función