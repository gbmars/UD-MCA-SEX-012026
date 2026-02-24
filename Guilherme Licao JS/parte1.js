// Array com elementos diferentes

let items = [
  'notebook', 'Et de Varginha', 'Chupa-Cabra', 'Dollynho Seu Amiguinho', 'Galo Cego', 
  'Caneta Azul', 'Ednaldo Pereira', 'Bebê Dançarino', 'Azul Caneta', 'Caneta Preta', 
  'Sosco', 'Zeca Pagodinho', 'Doguinho Rebaixado', 'Calça de Shopping', 'Picolé', 
  'Capivara de Gravata', 'Pombo de Botas', 'Abacaxi com Pizza', 'Fofão da Carreta Furacão', 'Dinossauro do Acre'
];

// Elementos na posição 0, 7, 11, 15, 18 e 20
console.log(items[[0],',', items[7], ',', items[11], ','
, items[18], items[20]]);

//Qual elemento está na última posição?
console.log(items[19]);

//Quantos elementos existem no array?
console.log(items.length);

//Adicionar um novo objeto no array
items.push('Pizza');
console.log(items)

//Mostrar todos os objetos do array usando o for
for (let i = -1; i <items.length; i++){
    console.log(items[i])
}



