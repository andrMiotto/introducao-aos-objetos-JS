/*Exercício 12: Copiando um Objeto
Crie um objeto configuracoes com as propriedades tema: "dark" e idioma: "pt-br". Crie um
novo objeto novasConfiguracoes que seja uma cópia de configuracoes usando o operador de
espalhamento. Em seguida, altere o tema em novasConfiguracoes para "light". Imprima
ambos os objetos para mostrar que o original não foi alterado.*/


const configuracoes={
    tema:"dark",
    idioma:"pt-br"
}

const novasConfiguracoes = { ...configuracoes };

novasConfiguracoes.tema="light";


console.log(configuracoes);
console.log(novasConfiguracoes);