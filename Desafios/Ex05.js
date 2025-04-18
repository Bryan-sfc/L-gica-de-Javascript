console.log("<5. Limpar Espaços Dobrados>");
// Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
// → &quot;Olá mundo bonito&quot;), usando split(), filter() e join().>

var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase com espaços a mais: ");

function tirarEspacos(frase) {
    return frase
    .split(" ")
    .filter(Boolean)
    .join(" ");
}

const fraseLimpa = tirarEspacos(frase);
console.log(fraseLimpa);  
