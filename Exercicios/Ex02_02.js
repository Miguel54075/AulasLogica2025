const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Qual o 1º Numero?: '))
let num2 = parseFloat(prompt('Qual o 2º Numero?: '))
if (num1 > num2) {
    console.log(`O ${num1} é menor`)
} else {
    console.log(`O ${num2} é maior`)
}