const prompt = require('prompt-sync')();

// ---------------------------------------- Operaçoes com variaveis ---------------------------------------- //
let nr1=10
let nr2=20
let soma = nr1 + nr2
console.log(nr1, nr2, soma)




// ------------------------------------------- Cauculadora extra ------------------------------------------ //
entrada1= prompt('Primeiro numero')
entrada2= prompt('Segundo numero')

nr1=parseFloat (entrada1);
nr2=parseFloat (entrada2);

console.log('Soma', nr1+nr2, 'Divisão', nr1/nr2, 'Multiplicação', nr1*nr2, 'Subtração', nr1-nr2);
// -------------------------------------------------------------------------------------------------------- //

let valor= 8000
let desconto= 1000
valor = valor - desconto

// ----- 2 Forma ----- //

valor = Number(prompt('Qual é o valor do celular?'));
desconto = Number(prompt('Qual é a % do desconto?'));
valor = valor - (valor * desconto / 100);
console.log(`Promoção Celular com R$ ${desconto} de desconto`)


// ---------------------------------------- Calculo com variaveis ---------------------------------------- //

numero= ('4 / 2')
numero= numero**2
numero= numero*(50-20)
console.log('O valor é ', numero);
console.log(`O valor é: ${numero}`);

// ----------------------------------------------------------------------------------------------------- //

numero = 4
dobro = 4*2
metade = 4/2
seguido= 4*2/2
console.log('dobro', dobro, 'Metade', metade, 'seguido', seguido)
 // ----------------------------------------------------------------------------------------------------- //

 dia = 800
 valor_cobrado= dia*15

 console.log('Valor Cobrado', valor_cobrado)









