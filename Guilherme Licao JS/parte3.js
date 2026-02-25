let Carros = [
    { nome: 'Porsche 911 Carrera', preco: 'R$ 920.000', estoque: '2' },
    { nome: 'BMW M3 Competition', preco: 'R$ 830.000', estoque: '4' },
    { nome: 'Audi RS6 Avant', preco: 'R$ 1.150.000', estoque: '1' },
    { nome: 'Mercedes-Benz G63 AMG', preco: 'R$ 1.950.000', estoque: '3' },
    { nome: 'Ford Mustang Mach 1', preco: 'R$ 575.000', estoque: '6' },
    { nome: 'Land Rover Defender', preco: 'R$ 720.000', estoque: '5' },
    { nome: 'Tesla Model 3 Performance', preco: 'R$ 450.000', estoque: '8' },
    { nome: 'Volvo XC90 Recharge', preco: 'R$ 580.000', estoque: '10' },
    { nome: 'Ferrari Roma', preco: 'R$ 3.800.000', estoque: '1' },
    { nome: 'Lamborghini Urus', preco: 'R$ 4.200.000', estoque: '2' },
];


 //Qual é o preço d0 2° Objeto?

 console.log(Carros[1].preco);

 //Qual o nome do 3°Objeto?

 console.log(Carros[2].nome);

 //Quantos itens existem no array?

 console.log('Existem',Carros.length,'itens no array');

 //Imprima o nome de todos os objetos.

 console.log(Carros);

 //Some todos os estoques dos Objetos

 let somaEstoque = 0;

 for (let i = 0; i < Carros.length; i ++){
    somaEstoque += parseInt(Carros[i].estoque);
 };

 console.log('Soma total:', somaEstoque);

 //Qual objeto possui maior estoque?

 let CarroMaiorEstoque = Carros.reduce((maior, carroAtual)=>{
   if (parseInt(carroAtual.estoque)> parseInt(maior.estoque)){
      return carroAtual;
   } else{
      return maior;
   }
 });

 console.log('O maior estoque é de:', CarroMaiorEstoque.nome, 'com', CarroMaiorEstoque.estoque, 'unidades');