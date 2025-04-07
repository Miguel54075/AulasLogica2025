const prompt = require('prompt-sync')();

let resposta = 'S';

while (resposta == 'S') {
    console.log('Você está dentro do bloco');
    resposta = prompt('Deseja continuar? S/N')
}

console.log('Fim');

let senhaSecreta = 'SENAI'
let senhaDigitada
while(senhaSecreta != senhaDigitada){
    console.log('Descubra a senha secreta!');
    senhaDigitada = prompt('Qual é a senha')
}

let contador = 1;
while (contador <= 5) {
    console.log(`O contador está nº ${contador}`);
    contador++;
}

let total = 0;
let qtde = 0;

while (true) {
    let valor = Number(prompt('Digite o valor do produto (0 para encerrar): '))

    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++;

    }
}

console.log(`Foram informados ${qtde} produtos`);
console.log(`Valor total R$ ${total} produtos`);

    

    