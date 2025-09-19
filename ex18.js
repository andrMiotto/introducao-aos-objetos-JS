/*Exercício 18: Apresentação Pessoal
Crie um objeto pessoa com as propriedades nome e anoNascimento. Adicione um método
chamado apresentar que calcula a idade da pessoa (de forma simplificada, 2025 -
anoNascimento) e retorna uma string de apresentação. Exemplo: "Olá, meu nome é [nome] e
eu tenho [idade] anos." Use a palavra-chave this.*/

const pessoa={
    nome:"Miotto",
    anoNascimento:2008,
    apresentar:function(){
       const idade= 2025- this.anoNascimento;
    console.log(`Olá, meu nome é ${this.nome} e tenho ${idade} anos`)
    }
}


pessoa.apresentar();