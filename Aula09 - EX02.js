const prompt = require('prompt-sync')();

let anoatual = parseFloat(prompt('Me de o ano atual: '))
let anodnascimento = parseFloat(prompt('Me de o ano de nascimento: '))
let idade = (anoatual - anodnascimento);

if ((idade < 10 )) {
    console.log('Criança');
} else if (idade >= 11 && idade < 17) {
    console.log('Adolescente');
} else if (idade >= 18 && idadde <= 59) {
    console.log('Adulto');
} else if (idade >= 60) {
    console.log('Idoso');
}
      

