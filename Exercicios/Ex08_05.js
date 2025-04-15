const prompt = require('prompt-sync')();

function exibirTabuada(numero) {  
    console.log(`Tabuada do ${numero}:`);  
    for (let i = 1; i <= 10; i++) {  
        console.log(`${numero} x ${i} = ${numero * i}`);  
    }  
    console.log('');
}  

exibirTabuada(2); 
exibirTabuada(5);  
exibirTabuada(7);  