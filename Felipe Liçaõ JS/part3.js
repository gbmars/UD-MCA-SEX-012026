let Carros = [{ nome:'Fiat Pulse', preco:'R$ 105.990', estoque:'12'},
    { nome:'Chevrolet Tracker', preco:'R$ 145.500', estoque:'5'},
    { nome:'Volkswagen T-Cross', preco:'R$ 160.990', estoque:'8'},
    { nome:'Hyundai Creta', preco:'R$ 148.000', estoque:'15'},
    { nome:'Toyota Yaris', preco:'R$ 110.200', estoque:'22'},
    { nome:'Honda City', preco:'R$ 140.500', estoque:'3'},
    { nome:'BYD Yuan', preco:'R$ 229.800', estoque:'7'},
    { nome:'Renault Duster', preco:'R$ 135.900', estoque:'10'},
    { nome:'Nissan Kicks', preco:'R$ 138.400', estoque:'18'},
    { nome:'GWM Haval', preco:'R$ 214.000', estoque:'9'},
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


