let Comida = {
    nome:'Pimentão',
    cor:'vermelho',
    preco:'R$2,0',
    estoque:'50'
};

//Como acessar nome do objeto?

console.log(Comida.nome);

//Como acessra o preço usando colchetes?

console.log(Comida["preco"]);

//Atualize o estoque para 80

Comida.estoque = 80;

//Imprima todas as propriedades no console.

console.log(Comida);

