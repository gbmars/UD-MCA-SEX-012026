let Carro = {
    nome:'Passat cc 3.6',
    cor:'vermelho sangue',
    preco:'R$70.000,00',
    estoque:'5'
};

//Como acessar nome do objeto?

console.log(Carro.nome);

//Como acessra o preço usando colchetes?

console.log(Carro["preco"]);

//Atualize o estoque para 80

Carro.estoque = 80;

//Imprima todas as propriedades no console.

console.log(Carro);

