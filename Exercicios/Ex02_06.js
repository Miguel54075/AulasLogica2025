const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('digite um numero?'))
let num2 = parseFloat (prompt('digite um numero?'))
if (num1 >= num2) {
    console.log(`é igual`)
} else {
    console.log(`é diferente`)
}