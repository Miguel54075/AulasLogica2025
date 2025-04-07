const prompt = require('prompt-sync')();

let prova1 = parseFloat(prompt('Qual sua nota?'))
let prova2 = parseFloat(prompt('Qual sua nota?'))
let soma = (prova1 + prova2) 
let media = soma / 2
if (media >= 7) {
    console.log(`se a ${media}  voce foi aprovado`)
} else {
    console.log(`se a ${media}  voce foi reprovado`)
}