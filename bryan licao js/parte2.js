
let Lanche = {
    nome:'Hot dog',
    cor:'vermelho',
    preco:'R$12,00',
    estoque:'5'
};

//Como acessar nome do objeto?

console.log(Lanche.nome);

//Como acessra o preço usando colchetes?

console.log(Lanche["preco"]);

//Atualize o estoque para 80

Lanche.estoque = 80;

//Imprima todas as propriedades no console.

console.log(Lanche);
