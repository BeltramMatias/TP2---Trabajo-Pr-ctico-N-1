
// -------------------------- TEST -------------------------- //

const assert = require('assert');

const leerArchivoComoString = require('../ArchivosJS/LeerArchivoComoString');
const escribirTextoEnArchivo = require('../ArchivosJS/EscribirTextoEnArchivo');
const StringToArrayDeNumeros = require('../ArchivosJS/StringToArray');
const arrayDeNumerosToString = require('../ArchivosJS/ArrayToString');
const combinarDosArrays = require('../ArchivosJS/CombinarDosArrays');
const combinarNArrays = require('../ArchivosJS/CombinarNArrays');


console.log('-------- Leer Archivo Como String --------');

//const rutaArchivoALeerComoString = 'C:/Users/mattb/Desktop/Terciario/2023/2do Cuatrimestre/TP2 - Taller de Programación 2/UNIDAD 1/TP2 - Trabajo Práctico N°1/archivo1.txt';
const rutaArchivoALeerComoString = '../archivo1.txt';
const contenido = leerArchivoComoString(rutaArchivoALeerComoString);
console.log('Contenido del archivo:', contenido);

console.log();
console.log('-------------------------------------');

console.log('-------- Escribir Texto En Archivo --------');
//const rutaArchivo = "C:/Users/mattb/Desktop/Terciario/2023/2do Cuatrimestre/TP2 - Taller de Programación 2/UNIDAD 1/TP2 - Trabajo Práctico N°1/archivo2.txt";
const rutaArchivo = "../archivo2.txt";
const txt = 'Buenass, si se pudoo!';
const flag = true; // Cambia a false si deseas que lance un error si el archivo no existe.
escribirTextoEnArchivo(rutaArchivo, txt, flag);

console.log();
console.log('-------------------------------------');

console.log('-------- Transformar String En Array De Numeros --------');
let texto = '123 | 456 | 789 | 1bc | 10';
const separadorTexto = ' | ';
const numeros = StringToArrayDeNumeros(texto, separadorTexto);
console.log(numeros);

console.log();
console.log('-------------------------------------');

console.log('-------- Transformar Array De Numeros A Un Solo String  --------');
let arrayDeNumeros = [123, 456, 789, 10];
const separadorNum = ', ';
const resultadoString = arrayDeNumerosToString(arrayDeNumeros, separadorNum);
console.log(resultadoString);

console.log();
console.log('-------------------------------------');

console.log('-------- Combinar Dos Arrays --------');
const resultadoCombinarDosArrays = combinarDosArrays([1, 5, 6], [8, 6, 4, 1, 9, 9]);
console.log(resultadoCombinarDosArrays);

console.log();
console.log('-------------------------------------');

console.log('-------- Combinar N Arrays --------');
const arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
const resultadoCombinarNArrays = combinarNArrays(arrays);
console.log(resultadoCombinarNArrays);