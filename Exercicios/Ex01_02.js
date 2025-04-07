const prompt = require('prompt-sync')();

n1 = parseFloat(prompt('qual o numero inteiro?: '))
let antecessor = n1 - 1
let sucessor = n1 + 1
console.log(`O resultado do seu sucessor é ${sucessor}`);
console.log(`O resultado do seu antecessor é ${antecessor}`);