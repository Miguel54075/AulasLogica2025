const prompt = require('prompt-sync')();

let salario = parseFloat(prompt('digite o primeiro salario: '));
if (salario > 4000) {
    console.log('reajuste do valor de 8%')
    let pobre = salario * 8 / 100
    console.log(salario + pobre)
} else if (salario <= 2000 || salario <= 4000) {
    console.log('reajuste do valor de 12%')
    let pobre = salario * 12 / 100
    console.log(salario + pobre)
} else {
    console.log('reajuste do valor de 10%')
    let pobre = salario * 10 / 100
    console.log(salario + pobre)
}
