/*Exercício 13: Mesclando Objetos
Crie dois objetos: dadosPessoais com as propriedades nome e idade, e dadosProfissionais
com cargo e empresa. Use o operador de espalhamento para criar um novo objeto
funcionarioCompleto que mescle as propriedades de ambos. Imprima o resultado.*/

const dadosPessoais={
    nome:"André",
    idade:17

}

const dadosProfissionais={
        cargo:"Gestor",
        empresa:"MEG"
    }

const funcionarioCompleto ={...dadosPessoais,...dadosProfissionais}


console.log(funcionarioCompleto);