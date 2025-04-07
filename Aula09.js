const prompt = require('prompt-sync')();

// Estruturas condicionais aninhadas
// Switch case

let valorCompra = 120;
let ClienteVIP = true;

if(valorCompra >= 100) {
    if (ClienteVIP == true) {
        console.log(`Voce ganhou R$ ${valorCompra * 10 / 100}`);
} else {
    let desconto = valorCompra * 5 / 100;
    console.log(`Voce ganhou R$ ${desconto} de desconto`);
    
    }
} else {
    let restante = 100 - valorCompra;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

let idade = parseFloat(prompt('Qual é sua idade?'));
console.log(idade);
if ((idade > 16 && idade < 18) || idade > 70) {
    console.log('Voto Facultativo');
} else if (idade >= 18 && idade < 70) {
    console.log('Voto Obrigatorio');
} else if (idade < 16) {
    console.log('Não pode votar');
}

//Switch case é uma alternativa ao if else

let n1 = Number(prompt('Digite um nº: '));
let n2 = Number(prompt('Digite um nº: '));
let op = Number(prompt('Digite o operador (+ = / * **): '));
switch (op) {
    case '+':
        console.log(n1+n2);
        break;
        case '-':
            console.log(n1-n2);
        break;
        case '*':
            console.log(n1*n2);
        break;
        case '/':
            console.log(n1/n2);
        break;
        case '**':
            console.log(n1**n2);
        break;
        default:
            console.log('Operador invalido');
            
}