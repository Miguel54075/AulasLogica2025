const prompt = require('prompt-sync')();

let kp1 = parseFloat(prompt('Qauntos km foi percorrido pelo carro?'))
let d1 = parseFloat(prompt('Quantia de dias alugados?'))
let pd1 = d1 * 60
let kp2 = kp1 * 0.15
let kd1 = kp2 + pd1
console.log(`O valor dos dias a pagar é ${pd1}`);
console.log(`O valor por km a pagar é ${kp2}`);
console.log(`O valor total a pagar é ${kd1}`);