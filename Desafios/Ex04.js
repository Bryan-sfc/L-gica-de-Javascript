// <4. Gerador de Senhas Aleatórias>
// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode()

function gerarSenha() {
    return Math.random() //gera numeros aleatórios ex:0.6473487295698
    .toString(36) //adiciona letras entre os numeros gerados ex:0.3kjv5h41jb6gc
    .slice(-10); //retira os ultimos 10 numeros da senha gerada aleatóriamente
}

var senhaGerada = Array(Array(1)).map(gerarSenha); //cria um array de um espaço e seleciona apenas uma senha

console.log(`Sua Senha é:  ${senhaGerada}`);

