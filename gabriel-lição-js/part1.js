let objetos = ['Smartphon','Notebook','Grampeador','pendrive',
'Calculadora','Abajur','Espelho','Relógio de parede','Almofada',
'Vaso de flores','Batedeira','Saca-rolhas',
'Frigideira','Garrafa térmica','Espátula','Guarda-chuva',
'Cadeado','Lanterna','Óculos de sol','Mochila'
];

//Elementos de posição 0, 7, 11, 15, 18 e 20
    console.log(objetos[0],','
        ,objetos[7],',',objetos[11],',', objetos[15],',', objetos[18],',', objetos[20]);

//Qual elemento está na última posição?
    console.log(objetos[19]);

//Quantos elementos existem no array?
    console.log(objetos.length);

//Adicionar um novo objeto no array

objetos.push('Bússola');

//Mostrar todos os objetos do array usando um for

for (let i  = -1; i < objetos.length; i++) {
    console.log(objetos[i]);
}
