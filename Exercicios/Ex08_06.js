const prompt = require('prompt-sync')();

function calcular(numero1, numero2, operador) {  
    let resultado;  
    for (let i = 0; i < 1; i++) {  
        switch (operador) {  
            case '+':  
                resultado = numero1 + numero2;  
                break;  
            case '-':  
                resultado = numero1 - numero2;  
                break;  
            case '*':  
                resultado = numero1 * numero2;  
                break;  
            case '/':  
                if (numero2 !== 0) {  
                    resultado = numero1 / numero2;  
                } else {  
                    return "Ei Cara não tem como dividir por 0 😶";  
                }  
                break;  
            case '**':  
                resultado = numero1 ** numero2;  
                break;  
            default:  
                return "Usa um operador que seja valido😑";  
        }  
    }  

    return resultado;  
}  

console.log(calcular(2, 5, '*'));   
console.log(calcular(10, 2, '/')); 
console.log(calcular(3, 3, '**')); 
console.log(calcular(5, 0, '/'));   
console.log(calcular(5, 2, '%')); 