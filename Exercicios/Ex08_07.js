const prompt = require('prompt-sync')();

function gerarSenha(tamanho) {  
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';  
    let senha = '';  
    for (let i = 0; i < tamanho; i++) {  
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);  
        senha += caracteres[indiceAleatorio];  
    }  
    return senha;  
}  
const tamanhoDaSenha = 50000; 
const senhaGerada = gerarSenha(tamanhoDaSenha);  
console.log(`Senha gerada: ${senhaGerada}`);  ""