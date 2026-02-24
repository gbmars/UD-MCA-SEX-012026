let Eletronicos = [{ nome:'Luminária', preco:'R$ 75,00', estoque:'40'},
    { nome:'Mouse sem fio', preco:'R$ 90,00', estoque:'560'},
    { nome:'Power Bank', preco:'R$ 120,00', estoque:'8'},
    { nome:'Tripé', preco:'R$ 45,00', estoque:'15'},
    { nome:'Liquidificador', preco:'R$ 160,00', estoque:'22'},
    { nome:'Air Fryer', preco:'R$ 380,00', estoque:'3'},
    { nome:'Cafeteira', preco:'R$ 450,00', estoque:'7'},
    { nome:'Teclado', preco:'R$ 250,00', estoque:'10'},
    { nome:'Monitor', preco:'R$ 1.200,00', estoque:'18'},
    { nome:'Fone de ouvido Bluetooth', preco:'R$ 180,00', estoque:'9'},
 ];

 //Qual é o preço d0 2° Objeto?

 console.log(Eletronicos[1].preco);

 //Qual o nome do 3°Objeto?

 console.log(Eletronicos[2].nome);

 //Quantos itens existem no array?

 console.log('Existem',Eletronicos.length,'itens no array');

 //Imprima o nome de todos os objetos.

 console.log(Eletronicos);

 //Some todos os estoques dos Objetos

 let somaEstoque = 0;

 for (let i = 0; i < Eletronicos.length; i ++){
    somaEstoque += parseInt(Eletronicos[i].estoque);
 };

 console.log('Soma total:', somaEstoque);

 //Qual objeto possui maior estoque?

 let EletronicosMaiorEstoque = Eletronicos.reduce((maior, EletronicosAtual)=>{
   if (parseInt(EletronicosAtual.estoque)> parseInt(maior.estoque)){
      return EletronicosAtual;
   } else{
      return maior;
   }
 });

 console.log('O maior estoque é de:', EletronicosMaiorEstoque.nome, 'com', EletronicosMaiorEstoque.estoque, 'unidades');


