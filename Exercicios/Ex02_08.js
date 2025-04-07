const prompt = require('prompt-sync')();

let num1 = parseFloat (prompt('Quanto o vendedor vendeu no mês?'))
if (num1 > 5000){
    let chitzu = 5 / 100 * num1
    console.log(`sua comissão será ${chitzu}`);
} else {
    let chitzu2 = 3 / 100 * num1
    console.log(`sua comissão será ${chitzu2}`)
}


    
