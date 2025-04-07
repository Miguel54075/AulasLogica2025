const prompt = require('prompt-sync')();
// EXERCICIO 1 ---------------------------------------
let _nomedoaluno = 'Miguel'
let _altura = 178;
let _escola = 'sesi';
let _ano = 2025;
console.log(_nomedoaluno, _altura, _escola, _ano)
//----------------------------------------------------
// EXERCICIO 2 ---------------------------------------
let _nomedoprofessor = 'Talita'
let _materia = 'geografia';
let _anodeingresso = 2014;
console.log(_nomedoprofessor, _materia, _anodeingresso)
//----------------------------------------------------
// EXERCICIO 3 ---------------------------------------
_nomedoaluno = prompt('Qual é o nome do aluno?');
_altura = parseInt(prompt('Qual é sua altura?'));
_escola = (prompt('Qual é sua escola?'));
_ano = prompt('Qual é o ano?')
console.log(_nomedoaluno, _altura, _escola, _ano);


