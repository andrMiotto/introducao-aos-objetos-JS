/*Exercício 11: Combinando Arrays
Crie dois arrays: frutas com ["Maçã", "Banana"] e maisFrutas com ["Laranja", "Uva"]. Use o
operador de espalhamento para criar um novo array todasAsFrutas que seja a combinação
dos dois. Imprima todasAsFrutas.*/


frutas=["Maça","Banana"];

maisFrutas=["Laranja","Uva"];

const todasAsFrutas=[...frutas,...maisFrutas]

console.log(todasAsFrutas);