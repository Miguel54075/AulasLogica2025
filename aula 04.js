const prompt = require('prompt-sync')();

// criando nossa primeira variavel
// Uma variavel serve para armazenar uma informação/valor
// O memoria crie um espaço com o nome curso e receba o valor 'Desenvolvimento de Sistemas'
var curso = 'Desenvolvimento de Sistemas';

// Exibindo o conteudo da variavel
console.log('curso') // Para imprimir uma variavel, não se coloca entre ''
console.log(curso); // Jeito correto de usar uma variavel
console.log('curso',curso)

// criando e atribuindo valores a uma variavel
var idade = 15; // inteira // integer
var temperatura = 24.5; //real // float
var nome = 'Miguel'; //string

// Templeates String
// Utilizo a crase ` ` para criar uma string
// para colocar as variaveis dentro da string, utilizo ${variavel}

console.log('Olá '+  nome+ ' você tem ' + idade + ' anos ' + ' está cursando ' + curso+ ' hoje faz ' + temperatura + ' ºC');
console.log('Olá, ${nome} você tem {idade} anos está cursando ${curso} hoje faz ${temperatura}ºC')
var podeDirigir = true;
var estáchovendo = false;
// Declarando uma variavel nula
var escola;

// Quais nomes de variaveis são validos?
// Nota1 = correto
// Nomecompleto = Correto
// Nome completo = Incorreto
// Medía = incorreto
// Console = incorreto
// _salario = correto
// 9dade = incorreto
// Minha_Variavel = Correto
// Var = incorreto
// valor$ = incorreto
// nome-completo = incorreto
// escola_ = correto
// TELEFONE = correto
// true = incorreto

// Exercicio
// Nota1 Invalido

let cidade = 'Andradina'
var turma = '2ºB'
const ano = 2025

console.log(turma);
turma = '3ºB'
console.log(turma);
// ano = 2026; //Não podemos reatribuir valor a uma constante



let _nome = 'Ayrton Senna'
let _idade = 36;
let _peso = 76.5;
console.log(_nome, _idade, _peso) 

// mostrando no console quais são os tipos dos dados

console.log(typeof _nome, typeof _idade, typeof _peso );
// No prompt o computador espera o usuario digitar uma informação
// Sempre quando recebemos uma informação de entrada ela vem em string

_nome = prompt('Qual é o nome?'); // string
_idade = prompt('Qual é sua idade?'); // string
_peso = prompt('Qual é seu peso?'); // string
console.log(_nome, _idade, _peso)
console.log(typeof _nome, typeof _idade, typeof _peso );

// criem duas variaveis num1 e num2 e recebam informaçoes pelo prompt

num3=prompt('Digite o numéro 1')
num4=prompt('Digite o numéro 2')

num3=Number(num3) 
num4=Number(num4) 

console.log(num3 + num4)

nr1 = Number(prompt('Digite o primeiro numéro'))
nr2 = Number(prompt('Digite o segundo numéro'))

console.log(nr1 + nr2)

nr1 = "100.2000" // string
nr1 = Number("100.2000") // convertendo String para Number
nr1 = parseInt("100.2000") // convertndo String para integer
nr1 = parseFloat("100") // convertendo String para float 100.0
nr1 = String("100.2000"); // convetendo Number para String

_nome = prompt('Qual é o nome?'); // string
_idade = parseInt(prompt('Qual é sua idade?')); // int
_peso = ParseFloat(prompt('Qual é seu peso?')); // float
console.log(_nome, _idade, _peso);

let _nomedoaluno = 'Miguel'
let _altura = 178;
let _escola = SESI;
let _ano = 2025;
console.log(_nomedoaluno, _altura, _escola, _ano)

_nomedoaluno = prompt('Qual é o nome do aluno?');
_altura = prompt('Qual sua altura?');
_escola = prompt('Qual a escola que você estuda?');
_ano = prompt('Qual ano atual?');

