let Carro = {
    nome:'Civic',
    cor:'Preto',
    preco:'R$70.000,00',
    estoque:'2'
};

//Como acessar nome do objeto?

console.log(Carro.nome);

//Como acessar o preço usando colchetes?

console.log(Carro["preco"]);

//Atualize o estoque para 80

Carro.estoque = 80;

//Imprima todas as propriedades no console.

console.log(Carro);