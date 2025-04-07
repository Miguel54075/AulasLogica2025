const prompt = require('prompt-sync')();

// Estrutura condicional composta e encadeada
// Operadores Logícos
// && - e
// || - ou
// ! - não

let a = 2;
let b = 3;
let c = 4;
console.log(a > 2 && b < 2); // False pq 2 condição é F
console.log(a > 2 && b < 2); // False pq 1 condição é V
console.log(a > 2 && b < 2); // True pq 2 condição é V
console.log(a > 2 && b < 2); // False

console.log(a > 2 && b < 2); // False Nenhum condição é V
console.log(a > 2 && b < 2); // True Pelo menos 1 condição é V
console.log(a > 2 && b < 2); // True Pelo menos 1 condição é V
console.log(a > 2 && b < 2); // True
console.log(a > 1 && b < 4); // True

height = Number(prompt('Qual é sua altura?'));
weight = Number(prompt('Qual é seu peso?'));
imc = weight / (height ** 2);
console.log(imc);
if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.6 && imc < 24.9) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso');
} else if (imc >= 29.9 && imc < 30) {
    console.log('Obesidade');
} else if (imc >= 30 && imc < 34.9) {
    console.log('Obesidade Grave');
}

let lado1 = Number(prompt('Qual o lado 1?'));
let lado2 = Number(prompt('Qual o lado 2?'));
let lado3 = Number(prompt('Qual o lado 3?'));
if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log('Equilatero');
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('Isoceles');
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log('Escaleno');
}

let salario =parseInt(prompt('Me de o valor das vendas = '))
let horas = parseInt ( prompt('horas trabalhadas ='))

if (salario > 5000||horas>40) {
    console.log('Vendedor ganha bonus')
} else {
    console.log('Vendedor nao ganhou bonus')
}

let caractere = parseFloat(prompt('Qual o caractere?'))

if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
    console.log('Vogal')
} else {
    console.log('Consoante')
}