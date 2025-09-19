/*Exercício 17 (Desafio): Compartilhando Métodos
1. Crie uma função construtora Guerreiro que aceite um nome e tenha uma propriedade
vida com valor inicial 100.
2. Adicione um método atacar ao Guerreiro.prototype que imprime "Atacando!".
3. Crie duas instâncias de Guerreiro: guerreiro1 com o nome "Arthur" e guerreiro2 com o
nome "Lancelot".
4. Verifique que ambos os guerreiros podem usar o método atacar. O objetivo aqui é
entender que ambos compartilham o mesmo método através do protótipo,
economizando memória.*/


function Guerreiro(nome){
this.nome=nome;
this.vida=100;
}

Guerreiro.prototype.atacar=function(){
    console.log(`${this.nome} está atacando`)
}


const guerreiro1=new Guerreiro("arthur");
const guerreiro2=new Guerreiro("Lancelot");

guerreiro1.atacar();
guerreiro2.atacar();




