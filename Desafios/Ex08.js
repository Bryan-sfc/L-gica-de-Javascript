console.log("<8. Remover Caracteres Especiais>");
// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando replace() com regex.

var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase com caracteres especiais: ");

const caracteres = frase.replace(/[^a-zA-Z0-9\s]/g, '');

console.log(`Nova frase sem caracteres especiais: ${caracteres}`);
