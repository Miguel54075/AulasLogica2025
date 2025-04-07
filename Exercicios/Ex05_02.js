const prompt = require('prompt-sync')();
 
let times = [  
    "Palmeiras", 
    "Bota-Fogo",  
    "Fluminense",  
    "Flamengo",  
    "São Paulo",  
    "Atlético Mineiro",  
    "Internacional",  
    "Corinthians",  
    "Athletico Paranaense",  
    "Santos",  
    "Ceará",  
    "Fortaleza",  
    "Bragantino",  
    "Goiás",  
    "Bahia",  
    "Vasco",  
    "Cruzeiro", 
    "Cuiabá",  
    "Coritiba",  
    "América Mineiro"  
];   
console.log("Campeão: " + times[0]);  
console.log("Times que vão jogar a Libertadores: ");  
for (let i = 1; i <= 4; i++) {  
    console.log("- " + times[i]);  
}  
console.log("Times rebaixados para a Série B: ");  
for (let i = 16; i < 20; i++) {  
    console.log("- " + times[i]);  
}  