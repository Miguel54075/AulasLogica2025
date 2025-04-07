const prompt = require('prompt-sync')();
let somapar = 0;
let par = 0
let somaImpar = 0;
let impar = 0

for (let i = 0; i < 5; i++) {
    num = Number(prompt("Me de um numero: "))
    if (i % 2 == 0){
        somapar += num
        par++
}else {
    if (i % 2 == 1){
        somaImpar += num
        impar++ 
        console.log(`A quantidade dos pares é ${par}, e a quantidade da soma dos pares são ${somapar}`);
        console.log(`A quantidade dos pares é ${impar}, e a quantidade da soma dos pares são ${somaImpar}`);

}
}
}
