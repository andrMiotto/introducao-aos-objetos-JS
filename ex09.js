/*Exercício 9: Lista de Compras
Crie um array chamado carrinhoDeCompras. Cada item do array deve ser um objeto com
duas propriedades: produto e quantidade. A propriedade produto, por sua vez, deve ser um
objeto com nome e preco.
1. Crie o array com pelo menos dois itens.
2. Acesse e imprima o nome do primeiro produto no carrinho.
3. Acesse e imprima o preço do segundo produto no carrinho.*/


carrinhoDeCompras = [
    {
        produto: {
            nome: "A",
            preco: 10.10
        }, quantidade: 3
    },
    {
        produto: {
            nome: "B",
            preco: 11.11
        },
        quantidade: 30
    }
];

console.log(carrinhoDeCompras[0].produto.nome);
console.log(carrinhoDeCompras[1].produto.preco);
