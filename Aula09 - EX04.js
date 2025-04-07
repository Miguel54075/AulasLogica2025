const prompt = require('prompt-sync')();
let mês = (prompt('digite o nome do mês: '));
 if (mês == 'janeiro' ||mês == 'marco' 
    ||mês == 'maio'
    ||mês == 'julho' ||mês == 'agosto' ||mês == 'outubro' ||mês == 'dezembro' ) {
        console.log('Esses mêses tem 31 dias');
}if (mês == 'fevereiro') {
    console.log('Esses mêses tem 28 dias');
}if (mês == 'abril' ||mês == 'junho' ||mês == 'setembro'||mês == 'novembro') {
    console.log('Esses mêses tem 30 dias');
}
    

    



   























