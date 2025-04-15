const prompt = require('prompt-sync')();

function exibirCoresPrimarias() {  
    const coresPrimarias = ['Vermelho', 'Azul', 'Amarelo'];  

    coresPrimarias.forEach(cor => {  
        console.log(cor);  
    }); 
}  

exibirCoresPrimarias();  