const prompt = require('prompt-sync')();

let somaPares = 0;  
let somaImpares = 0;  
let contPares = 0;  
let contImpares = 0;  

while (true) {  
    let numero = parseInt(prompt("Digite um número (ou 0 para sair):"));  

    if (numero === 0) {  
        break; 
    }  

    if (numero % 2 === 0) { 
        somaPares += numero;  
        contPares++;  
    } else { 
        somaImpares += numero;  
        contImpares++;  
    }  
}  
 
console.log(`Soma dos pares: ${somaPares}`);  
console.log(`Quantidade de pares: ${contPares}`);  
console.log(`Soma dos ímpares: ${somaImpares}`);  
console.log(`Quantidade de ímpares: ${contImpares}`);  