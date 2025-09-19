/*Exercício 8: Informações da Matrícula
Crie um objeto aluno com as propriedades nome e matricula. A propriedade matricula deve
ser um objeto contendo numero e curso.
1. Crie o objeto aluno.
2. O número da matrícula está desatualizado. Modifique o numero da matrícula para um
novo valor.
3. Imprima o objeto aluno completo para confirmar a alteração.*/


const aluno={
    nome:"André",
    matricula:{
        numero:10,
        curso:"Ti"
    }
}

console.log(aluno)


aluno.matricula.numero=7;

console.log(aluno)
