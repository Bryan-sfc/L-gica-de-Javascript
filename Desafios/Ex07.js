console.log("<7. Contador de Dígitos em uma String>");
// Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
// filter() com isNaN().

var prompt = require('prompt-sync')();

let frase = prompt("Escreva uma frase qualquer: ");

const numeros = frase
    .split('')
    .filter(c => !isNaN(c) && c.trim() !== '');


console.log(`Número total de caracteres desta frase: ${numeros.length}`);


