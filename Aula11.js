const prompt = require('prompt-sync')();

for (let contador = 1; contador <= 5; contador++ ) {
    console.log(contador);
    
}
for (let contador = 1; contador <= 50000000000; contador +=10000000){
    console.log(contador);
    
}

for (let contador = 1; contador <= 500; contador++) {
    console.log(contador);
    if (contador == 50){
        break;
    }
    
}

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o nº ${nr}: `)
    let presente = prompt(`O(A) ${nome} esta presente (S ou N)? `)
    if (presente == 'S'){
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o (a) ${nome}`);
    } else {
        console.log(`Não pegar o notebook ${nr}`);
     }
}

