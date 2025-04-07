const prompt = require('prompt-sync')();

let receber = parseFloat(prompt('Receber um numero: '))
switch(receber){
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 6:
        console.log('Sabado-feira')
        break;
    case 7:
        console.log('Domingo-feira')
        break;
}