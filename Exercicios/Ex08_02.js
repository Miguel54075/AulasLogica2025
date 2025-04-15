const prompt = require('prompt-sync')();

function ParImpar (nr) {
    if(nr % 2 == 0) {
        console.log(`${nr} é par`);
    } else {
        console.log(`${nr} é impar`);
    }
}
ParImpar(8)
ParImpar(9)
