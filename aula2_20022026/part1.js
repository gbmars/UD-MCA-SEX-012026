let elementos_array = ['Garrafa','Estojo','Fone de ouvido','Poltrona','Óculos de grau',
    'Grampeador','Camiseta','Bolsa','Maçaneta','Canetinha','Barraca','Máscara de cílios',
    'Notebook','Gravador de som','Ampulheta','Lupa','Batom','Pá','Salto alto','Brinco', 
    'Escova de cabelo', 'Esmalte', 'Shampoo', 'Condicionador', 'Perfume'
];

//Elementos de posição 0, 7, 11, 15, 18 e 20
    console.log(elementos_array[0],','
        ,elementos_array[7],',',elementos_array[11],',', elementos_array[15],',', elementos_array[18],',', elementos_array[20]);

//Qual elemento está na última posição?
    console.log(elementos_array[-1]);

//Quantos elementos existem no array?
    console.log(elementos_array.length);

//Adicionar um novo objeto no array

    elementos_array.push('Prancha de cabelo');

//Mostrar todos os objetos do array usando um for

for (let i  = 0; i < elementos_array.length; i++) {
    console.log(elementos_array[i]);
