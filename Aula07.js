const prompt = require('prompt-sync')();

// == representa: Igualdade
// != representa: diferente
// > represente: Maior
// >= represente: Maior ou igual
// < represneta: Menor
// <= represneta: Menor ou igual

let a = 2;
let b = 3;
console.log(a > b); // False
console.log(a == b); // False
console.log(a != b); // True
console.log(a > 2); // False
console.log(a >= 2); // True

//-------------------------------------------------------------------------------------------------------------------------------//
// IF: estrutura de condição muito utilizada na programação
let Tenhoingresso = true;
if (Tenhoingresso == true ) {
    //Se a opção for verdadeira , entra nesses blocos de comando
    console.log('Posso entrar no show');
}

let idade = Number( prompt('Qual a sua idade?'))
if (idade >= 18) {
   console.log('Maior de idade');
}

let tenhoingresso = true;
if (tenhoingresso == true ) {//Se a opção for verdadeira
    console.log('Posso entrar no show');
} else {   // Sea primeira condição for false
    console.log('Estou barrado na portaria')
}
