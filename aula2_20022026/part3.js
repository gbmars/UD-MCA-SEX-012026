let meu_array = [{nome: 'Perfume Lilly', preco = 290.90, estoque = 123},
    {nome: 'Batom MAC Vermelho', preco = 138.90, estoque = 342},
    {nome: 'Shampoo Kérastase', preco = 218, estoque = 27},
    {nome: 'Mala de Bordo 10 Kg', preco = 319.99, estoque = 387},
    {nome: 'Projetor Epson PowerLite', preco = 3997, estoque = 352},
    {nome: 'Salto Jimmy Choo Aurelie', preco = 4859.98, estoque = 19},
    {nome: 'Condicionador Wella Professionals', preco = 198.33, estoque = 148},
    {nome: 'Lapiseira Faber-Castell', preco = 20.30, estoque = 18},
    {nome: 'Bolsa Tote Le City Balenciaga', preco = 21654, estoque = 5},
    {nome: 'Colar com Pingente Zadig&Voltaire', preco = 1829, estoque = 9}
  ];

//Qual é o preço d0 2° Objeto?
  console.log(meu_array[1].preco);

//Qual o nome do 3°Objeto?
  console.log(meu_array[2].nome);

//Quantos itens existem no array?
  console.log(meu_array.length);

//Imprima o nome de todos os objetos
  for (let i = 0; i < meu_array.lenght; i++)
        console.log(meu_array[i].nome);

//Some todos os estoques dos Objetos
  soma = 0
  for (let i = 0; i < meu_array.length; i++)
        soma += meu_array[i].estoque;

  console.log(`A soma de todo o estoque é: ${soma}`);

//Qual objeto possui maior estoque?
   let MaiorEstoque = meu_array.reduce((maior, arrayAtual)=>{
   if (arrayAtual.estoque > maior.estoque){
      return arrayAtual;
   } else{
      return maior;
   }
 });

 console.log('O maior estoque é: ', MaiorEstoque.nome, 'com ', MaiorEstoque.estoque, ' unidades');
