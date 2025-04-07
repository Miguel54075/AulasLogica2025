const prompt = require('prompt-sync')();
let comidas = [];

for (let i = 1; i <=6; i++) {
    comidas[i] = prompt('Qual a comida favorita?')
    console.log(comidas);
}
