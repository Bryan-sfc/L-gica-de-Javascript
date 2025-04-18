console.log("<6. Primeira Letra Maiúscula>");
// Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
// map(), toUpperCase() e slice().

var prompt = require('prompt-sync')();

function letrasMaiusculas(frase){
    return frase 
    .split(' ')
    .map(fraseAtualizada => fraseAtualizada.charAt(0).toUpperCase() + fraseAtualizada.slice(1));
}

let frase = prompt("Escreva uma Frase: ");

const fraseFormatada = letrasMaiusculas(frase);

console.log(`Nova frase: ${fraseFormatada}`);