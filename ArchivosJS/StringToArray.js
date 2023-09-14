
// ------------------------------- TRANSFORMAR UN STRING EN ARRAY ------------------------------- //

function transformarStringEnArrayDeNumeros(texto, separador) {
    const partes = texto.split(separador);
  
    const numeros = partes.map((parte) => Number(parte.trim())).filter((numero) => !isNaN(numero));
  
    return numeros;
  }

  module.exports = transformarStringEnArrayDeNumeros; // Exporta la función