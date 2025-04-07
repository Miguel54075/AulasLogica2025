const prompt = require('prompt-sync')();
let filmes = [  
    "O Senhor dos Anéis: A Sociedade do Anel",  
    "Matrix",  
    "A Espera de um Milagre",  
    "Gladiador",  
    "O Rei Leão",  
    "Interestelar",  
    "Os Vingadores"  
];  

console.log("Primeiro filme:", filmes[0]);  
 
console.log("Filme da posição 4:", filmes[3]);  
 
filmes[filmes.length - 1] = "Coringa";  
console.log("Lista após substituir o último filme:", filmes);  
filmes.push("Spider-Man: Sem Volta Para Casa");  

console.log("Lista após adicionar novo filme no final:", filmes);    
filmes.splice(5, 0, "A Origem");  

console.log("Lista após inserir filme na posição 5:", filmes);  
 
filmes.shift();  
console.log("Lista após excluir o primeiro filme:", filmes);  

filmes.pop();  
console.log("Lista após excluir o último filme:", filmes);  

console.log("Os 3 primeiros filmes:", filmes.slice(0, 3));  

console.log("Os 4 últimos filmes:", filmes.slice(-4));  

console.log("Quantidade de filmes na lista:", filmes.length);  

filmes.sort((a, b) => b.localeCompare(a));  
console.log("Filmes em ordem decrescente:", filmes);  


