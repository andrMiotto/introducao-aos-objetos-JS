/*Exercício 6: Cardápio do Dia
Vamos gerenciar as informações de um lanche em um cardápio.
1. Crie um objeto chamado lanche com as propriedades:
○ nome: "X-Burger"
○ preco: 15.00
○ ingredientes:"pa~o","hambuˊrguer","queijo","alface"
2. Acesse e imprima uma frase descritiva usando os dados do objeto. Exemplo: "O lanche

X-Burger custa R$ 15.00."
3. Modifique o preco do lanche para 17.50.
4. Adicione uma nova propriedade chamada vegano com o valor false.
5. Imprima o objeto lanche completo no final para ver todas as suas informações
atualizadas.*/



const lanche={
    nome:"X-Burguer",
    preco:"15.00",
    ingredientes:["pão","hamburguer","queijo","alface"]
}

console.log(lanche.nome+" custa R$ "+lanche.preco);

lanche.preco=17.50;
lanche.vegano=false;

console.log(lanche)
