const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('digite um numero?'))
if ( num1 % 2 == 0){
    console.log(`Os ${num1} são impares`)
} else {
    console.log(`Os ${num1} são pares`)
}