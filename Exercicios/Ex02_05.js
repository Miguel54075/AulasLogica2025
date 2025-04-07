const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('digite a data de nascimeto?'))

if ((2025-num1)>18) {
    console.log(`é maior de idade`)
} else {
    console.log(`é menor de idade`)
}