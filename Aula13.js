const prompt = require('prompt-sync')();
//Iteração sobre nossos vetores (arrays / listas)

//Vetor     0       1       2       3
let frutas =['maçã', 'banana', 'abacaxi', 'uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length - 1; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('Fim');

//Iterando sobre uma lista usando o for of
let listadeJogadores = ['Pelé','Maradona','Messi','Ronaldo']
for (let jogador of listadeJogadores) {
    console.log(`O jogador é ${jogador}`);
}
let Num1 = ['1','2','3','4']
for (let numeros of Num1) {
    console.log(`O jogador é ${numeros}`);""
}

//Verificando se um element existe em um array
let vogais = ['a','e','i','o','u'];
let consoante = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m'];
let numeros = ['0','1','2','3','4','5','6','7','8','9'];

let letraParaVerificar = prompt('Digite uma letra: ')
if (vogais.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma vogal`);
} else if ((consoante.includes(letraParaVerificar.toLowerCase()))) {
    console.log(`A letra ${letraParaVerificar} é uma consoante`);
} else if (numeros.includes(letraParaVerificar)) {
    console.log(`${letraParaVerificar} não é uma letra, ele é um numero`);
}

//
let listaFrutas = ['maçã', 'banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(fruta);
    console.log(`A fruta da posição ${pos} é ${fruta}`);
}

let produtos = 'Celular,Notebook,TV,Tablet,Monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//Strings são lista (vetores / arrays) de caracteres
//              1234
let escola = 'SENAI';
console.log(escola[0]);
// Utilizando o for of exibir a palavra da seguinte dorma
for (const letra of escola) {
    console.log(letra);
}
























