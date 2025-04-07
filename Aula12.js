const prompt = require('prompt-sync')();

let frutas = ['maçã','banana','pera','uva']
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
// Lista Vazia
let listaVazia = [];

//Declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];

//Declaração de uma lista mista
let listaMista = [4,'feijão', true,7.55];

//Declaração de uma lista com outras listas
let listadeVetores = [['coca-cola', ' hot-dog'], [5.00, 10.00]]
console.log(listadeVetores[0][1]);

console.log(frutas);
frutas[3] = 'Melancia'
console.log(frutas);

//Inserindo novo item na lista
frutas[4] = 'Laranja';
frutas.push('Laranja');
frutas = [...frutas, 'Laranja'];
frutas.splice(2,0,'Morango')
// 2 - posição
// 0 - quantidade de itens a serem removidos
frutas.shift(); // Remove o primeiro item da lista
frutas.pop(); // Remove o ultimo item da lista

console.log(frutas);
frutas = ['maçã','banana','pera','uva','Abacaxi','Melancia','Laranja'] 
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);




