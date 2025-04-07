const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('Qual a velocidade do carro?'))
if (num1 < 80){console.log('Não tem infração');
}
else {console.log(`Cometeu Infração \n O valor da multa é ${(num1-80)*7.00}`);
}
