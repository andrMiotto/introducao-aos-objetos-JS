/*Exercício 5: Atualizando um Contato
Você tem um objeto contato. Inicialmente, o telefone está incorreto e falta o email. Siga os
passos:
1. Crie o objeto contato conforme abaixo.
2. Altere o valor da propriedade telefone para "12345-6789".
3. Adicione uma nova propriedade chamada email com o valor "contato@exemplo.com".
4. Imprima o objeto contato final no console para verificar as alterações.
let contato = {
nome: "Ana Silva",
telefone: "98765-4321",
cidade: "São Paulo"
};*/


let contato = {
nome: "Ana Silva",
telefone: "98765-4321",
cidade: "São Paulo"
};

contato.telefone="12345-6789"
contato.email="contato@exemplo.com"
console.log(contato)
