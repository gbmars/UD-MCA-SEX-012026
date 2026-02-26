let Alimentos = [
    { nome:'Maçã', preco:'R$ 3,50', estoque:'120' },
    { nome:'Arroz 5kg', preco:'R$ 32,90', estoque:'45' },
    { nome:'Feijão', preco:'R$ 8,99', estoque:'60' },
    { nome:'Leite Integral', preco:'R$ 4,79', estoque:'80' },
    { nome:'Pão Francês', preco:'R$ 0,80', estoque:'300' },
    { nome:'Queijo Mussarela', preco:'R$ 39,90', estoque:'25' },
    { nome:'Frango Congelado', preco:'R$ 18,50', estoque:'40' },
    { nome:'Carne Moída', preco:'R$ 42,00', estoque:'20' },
    { nome:'Refrigerante 2L', preco:'R$ 9,99', estoque:'55' },
    { nome:'Bolo de Chocolate', preco:'R$ 25,00', estoque:'12' }
];

 //Qual é o preço d0 2° Objeto?

 console.log(Alimentos[1].preco);

 //Qual o nome do 3°Objeto?

 console.log(Alimentos[2].nome);

 //Quantos itens existem no array?

 console.log('Existem',Alimentos.length,'itens no array');

 //Imprima o nome de todos os objetos.

 console.log(Alimentos);

 //Some todos os estoques dos Objetos

 let somaEstoque = 0;

 for (let i = 0; i < Alimentos.length; i ++){
    somaEstoque += parseInt(Alimentos[i].estoque);
 };

 console.log('Soma total:', somaEstoque);

 //Qual objeto possui maior estoque?

 let AlimentoMaiorEstoque = Alimentos.reduce((maior, AlimentoAtual)=>{
   if (parseInt(AlimentoAtual.estoque)> parseInt(maior.estoque)){
      return AlimentoAtual;
   } else{
      return maior;
   }
 });

 console.log('O maior estoque é de:', AlimentoMaiorEstoque.nome, 'com', AlimentoMaiorEstoque.estoque, 'unidades');