const prompt = require('prompt-sync')();

let pc1 = parseFloat(prompt('Quanto custa o produto?'))
let d1 = 5
let pd1 = pc1 * d1 / 100
let pd2 = pc1 - pd1
console.log(`O novo valor após o desconto é ${pd2}`);
