const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Qual a primeira nota?: '))
let nota2 = parseFloat(prompt('Qual a segunda nota?: '))
let media = nota1 + nota2 / 2
console.log(`O resultado da sua media é ${media}`);
