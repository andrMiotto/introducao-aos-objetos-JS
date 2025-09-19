/*Exercício 10 (Desafio): Catálogo da Loja
Considere a estrutura de objeto loja abaixo. Sua tarefa é acessar e imprimir no console o
nome do "MacBook Air".
let loja = {
nome: "Tech Store",
categorias: {
celulares: {
produto1: { nome: "iPhone 14", preco: 7000 },
produto2: { nome: "Samsung Galaxy S23", preco: 5000 }
},
notebooks: {
produto1: { nome: "MacBook Air", preco: 9500 },
produto2: { nome: "Dell XPS 13", preco: 8500 }
}

}
};*/


let loja = {
    nome: "Tech Store",
    categorias: {
        celulares: {
            produto1: { nome: "iPhone 14", preco: 7000 },
            produto2: { nome: "Samsung Galaxy S23", preco: 5000 }
        },
        notebooks: {
            produto1: { nome: "MacBook Air", preco: 9500 },
            produto2: { nome: "Dell XPS 13", preco: 8500 }
        }

    }
};


console.log(loja.categorias.notebooks.produto1.nome);