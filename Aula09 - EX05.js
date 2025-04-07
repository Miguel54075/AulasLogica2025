const prompt = require('prompt-sync')();

let nota1 = (prompt('digite a primeira nota: '));
let nota2 = (prompt('digite a segunda nota: '));
let media = nota1 + nota2 / 2
if (media > 5 && media <= 7) {
    console.log('Recuperação');
}if (media < 5) {
    console.log('Reprovado');
}if (media > 7) {
    console.log('Aprovado');
}
    