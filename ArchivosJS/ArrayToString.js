
// ------------------------------- TRANSFORMAR UN ARRAY EN STRING ------------------------------- //

function transformarArrayDeNumerosAUnSoloString(array, separador) {
    const resultado = array.join(separador);
    return resultado;
  }

  module.exports = transformarArrayDeNumerosAUnSoloString; // Exporta la función