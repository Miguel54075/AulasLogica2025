const prompt = require('prompt-sync')();

a= parseFloat(prompt("Qual sua velocidade?"))
b= parseFloat(prompt("Qual o tempo gasto?"))
let distancia = a * b
let litros = distancia / 12
console.log(`O valor em litros utilizado é ${litros}km o litro`);
