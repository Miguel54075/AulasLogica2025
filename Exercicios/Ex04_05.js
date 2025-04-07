const prompt = require('prompt-sync')();
let idadeM = 0
let idadeF = 0
let M = 0
let F = 0
for (let i = 1; i <= 10; i++) {
    idade = Number(prompt('Qual sua idade: '))
    Genero = prompt('Qual sua gênero?M/F:  ')

    if (Genero == 'M'){
        idadeM += idade
        M++
    }
    if (Genero == 'F'){
        idadeF += idade
        F++
    }
}
console.log(`A média de Homens é:${idadeM / M}
A média de Mulheres é:${idadeF / F}
E a media do grupo é: ${(idadeF + idadeM)/(M+F)}`)

