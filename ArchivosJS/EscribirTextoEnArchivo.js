const fs = require('fs');
// ------------------------------- ESCRIBIR TEXTO EN ARCHIVO ------------------------------- //

function escribirTextoEnArchivo(ruta, texto, flag) {
    try {
      if (!fs.existsSync(ruta) && !flag) {
        throw new Error('El archivo no existe');
      }
  
      // Si el archivo no existe o el flag es true, crea el archivo y lo escribe.
      fs.writeFileSync(ruta, texto);
      console.log('Archivo creado y texto escrito con éxito.');
      console.log('Texto escrito: "' + texto + '"');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  module.exports = escribirTextoEnArchivo; // Exporta la función