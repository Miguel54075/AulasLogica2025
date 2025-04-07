const prompt = require('prompt-sync')();

let a1 = parseFloat(prompt('Quantos metros de altura tem a parede?'))
let l1 = parseFloat(prompt('Quantos metros de largura tem a parede?'))
let area = a1 * l1
let tinta = area / 2
console.log(`O valor da area é ${area}`); 
console.log(`O tanto de tinta para pintar é ${tinta}`); 