//Importando biblioteca para receber informação do usuario
const prompt = require('prompt-sync')();

// Declarando variavel sem dados (Undefined)
let nota;
// Declarando variavel com informação
let nome = "Miguel";

//Reatribuindo um valor a variavel nome
nome = "Vitor";
nota = 8,5;

//Entrada de dados do nosso programa
let sobrenome = prompt('Digite seu sobrenome');
let nota1 = Number(prompt('Digite a nota da 1º prova'));
let nota2 = Number(prompt('Digite a nota da 2º prova'));

//Processamento de dados
let media = (nota1 + nota2) / 2;
let nomecompleto = nome + ' ' + sobrenome;
let nomecompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('Digite sua idade: ');
let idadenumero = parseInt(idade);

//Saida de dados
console.log('---Relátorio Final---');
console.log(`o seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log(`Sua media é: ${media} `);

let n= 0; //0
n = 0 + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1; //4
n++; //5
n += 3; //8
n--; //7
n = n - 1; //6
n -= 2; //4

//Resolução Exercicio
let horasPorDia = Number(prompt('Quantas horas trabalhou por dia?'));
let DiasTrabalhados = Number(prompt('Quantas dias trabalhou?'));
let ValorHora = Number(prompt('Qual valor da hora?'));
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * ValorHora;
console.log(`O custo total é de R$ ${custoTotal}`);
