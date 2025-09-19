/*Exercício 21 (Desafio): Objeto Imutável
1. Crie um objeto configuracao com a propriedade status definida como "ativo".
2. Use Object.freeze() para congelar o objeto.
3. Tente alterar o status para "inativo" e adicionar uma nova propriedade versao com o
valor 1.0.
4. Imprima o objeto no final para confirmar que ele não sofreu nenhuma alteração.*/


const configuracao = {
    status: "ativo"
}

Object.freeze(configuracao)

configuracao.status = "Inativo";
configuracao.versao = 1;


console.log(configuracao)
