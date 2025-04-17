//<3.Contar Palavras com Letra Inicial>
//Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra 
// (ex:&#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();

let frase = prompt("Escreva uma frase: ");
let letra = prompt("Escreva a Inicial que você deseja Separar: ");

frase.toLocaleLowerCase();
letra.toLocaleLowerCase();

let fraseAtualizada;

fraseAtualizada = frase.split(" ");

let procurandoAPalavra = fraseAtualizada.filter(itemPalavra => itemPalavra.startsWith(letra));
// let procurandoAPalavra = fraseAtualizada.filter(function(itemPalavra){itemPalavra.startsWith(letra)});

console.log("Palavras que inciam com: " + letra + " > " + procurandoAPalavra);

// function inialSeparada(){
//     console.log(fraseAtualizada.startsWith(letra));
    
//     if (fraseAtualizada === letra){
//             fraseAtualizada.startsWith(letra)
        
//             return fraseAtualizada;
//         }
// }