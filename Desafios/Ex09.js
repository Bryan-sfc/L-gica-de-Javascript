console.log("<9. Verificar Palíndromo com Funções>");
// Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
// e join().

var prompt = require('prompt-sync')();

function palindromo(){
    const original = frase.toLowerCase();
    
    const invertida = original.split('').reverse('').join('');
    
    return original === invertida;
}

let frase = prompt("Escreva uma frase qualquer: ");

if (palindromo(frase)) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}