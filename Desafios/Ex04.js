console.log("<4. Gerador de Senhas Aleatórias>");
// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode()

function gerarSenha() {
    return Math.random() 
    .toString(36) 
    .slice(-10); 
}

var senhaGerada = Array(Array(1)).map(gerarSenha); 

console.log(`Sua Senha é:  ${senhaGerada}`);

