const prompt = require('prompt-sync')();
function divisao (a,b){
    let c = a/b
    console.log(`O resultado da divisão é ${c}`);   
}
let a =Number(prompt('Qual o primeiro divisor?: '))
let b = Number(prompt("Qual o segundo divisor?: "))
divisao (a,b)