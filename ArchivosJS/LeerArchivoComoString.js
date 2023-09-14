const fs = require('fs');
// ------------------------------- LEER ARCHIVO COMO STRING ------------------------------- //

function leerArchivoComoString(ruta) {
    try {
      const contenidoBuffer = fs.readFileSync(ruta);
  
      const contenidoString = contenidoBuffer.toString();
  
      return contenidoString;
    } catch (error) {
      throw new Error('No se pudo leer el archivo: ' + error.message);
    }
  }
  
  module.exports = leerArchivoComoString; // Exporta la función