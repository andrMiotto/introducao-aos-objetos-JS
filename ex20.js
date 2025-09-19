/*Exercício 20: Chaves, Valores e Entradas
Dado o objeto livro abaixo, use os métodos Object.keys(), Object.values() e Object.entries()
para obter:
1. Um array com todas as suas chaves.
2. Um array com todos os seus valores.
3. Um array de arrays, onde cada subarray é um par [chave, valor].
Imprima cada um dos três arrays resultantes no console.
let livro = {
titulo: "1984",
autor: "George Orwell",

paginas: 328
};*/



let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

console.log(Object.keys(livro));
console.log("");

console.log(Object.values(livro));
console.log("");
console.log(Object.entries(livro));

