const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('digite um numero?'))
if (num1 > 0) {
    console.log(`O ${num1} é positivo`)
} else {
    console.log(`O ${num1} é negativo`)
}