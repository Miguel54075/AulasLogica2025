const prompt = require('prompt-sync')();

let bag1 = parseFloat(prompt('Quanto de dinheiro você tem na carteira?'))
let dolar = bag1 / 5.79
console.log(`O valor que você tem de dolares é ${dolar}`); 