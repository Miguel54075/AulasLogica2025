const prompt = require('prompt-sync')();

let m1 = parseFloat(prompt('Qual a qauntidade em metros?: '))
let Centimetros = m1 * 100
let Km = m1 / 1000
let Milimetros = m1 * 1000
console.log(`O resultado em cm é ${Centimetros}`);
console.log(`O resultado em Km é ${Km}`);
console.log(`O resultado em Milimetros é ${Milimetros}`);
