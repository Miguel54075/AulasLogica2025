const prompt = require('prompt-sync')();

console.log("------------------------------------------------------")
console.log("🐱‍👤              Jogo Da Adivinhação                🐱‍👤");
console.log("------------------------------------------------------")

let nrSecret = Math.floor(Math.random() * 100) + 1;
let acertou = false;
while (acertou == false) {
    let chute = Number(prompt('Digite um nº entre 1 e 100: '));
    if (chute == nrSecret ) {
    console.log(`Parabens você acertou!!`);
    acertou = true;
} else if ( chute > nrSecret) {
console.log(`Você chutou ${chute}, tente um numero menor`);
} else if ( chute < nrSecret) {
console.log(`Você chutou ${chute}, tente um numero maior`);
    }
}
console.log("FIM");






