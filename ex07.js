/*Exercício 7: Detalhes do Usuário
Crie um objeto usuario que tenha uma propriedade nome e uma propriedade endereco. O
valor de endereco deve ser outro objeto com as propriedades rua, numero e cidade.
1. Crie o objeto usuario com dados fictícios.
2. Usando console.log, imprima a seguinte frase, acessando as propriedades aninhadas:
"O usuário mora em cidade, na rua."*/

const usuario={
    nome:"Miotto",
    endereco:{
        rua:"Gott",
        numero:"12",
        cidade:"André"
    }
}

console.log(usuario.nome+" mora em "+usuario.endereco.cidade+" na rua, "+usuario.endereco.rua);