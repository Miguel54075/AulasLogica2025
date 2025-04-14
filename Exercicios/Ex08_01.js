const prompt = require('prompt-sync')();
function Saudacao(){
        nome = prompt("Qual seu nome? ")
        console.log(`tenha um bom dia ${nome}$`);
}
for (let x = 0; x<3;x++){
    Saudacao()
    
}

function CabecalhoEscola (nomeEscola) {
    linha()
    console.log(nomeEscola);
    linha()
}
CabecalhoEscola ('USP')

function Soma (x,y) {
    let resultado = (x + y);
    console.log(resultado);
}

Soma (5, 8);