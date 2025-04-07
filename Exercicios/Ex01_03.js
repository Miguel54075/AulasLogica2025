const prompt = require('prompt-sync')();

n1 = parseFloat(prompt('Qual o numero?'))
let dobro = n1 * 2
let triplo = n1 * 3
let AoCubo = n1 **3
console.log(`O resultado do seu dobro é ${dobro}`);
console.log(`O resultado do seu triplo é ${triplo}`);
console.log(`O resultado do seu Ao cubo é ${AoCubo}`);