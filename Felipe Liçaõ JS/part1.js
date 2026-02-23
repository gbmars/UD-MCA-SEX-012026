let objetos = ['Relógio de parede','Guarda-chuva','Xícara de café','Cadeira de madeira','Chave de fenda',
    'Travesseiro','Garrafa de vidro','Mochila','Grampeador','Escova de dentes','Lanterna','Caderno de anotações',
    'Pneu de carro','Tesoura','Vaso de plantas','Teclado de computador','Panela','Sabonete','Óculos de sol','Controle remoto'
];

//Elementos de posição 0, 7, 11, 15, 18 e 20
    console.log(objetos[0],','
        ,objetos[7],',',objetos[11],',', objetos[15],',', objetos[18],',', objetos[20]);

//Qual elemento está na última posição?
    console.log(objetos[18]);

//Quantos elementos existem no array?
    console.log(objetos.length);

//Adicionar um novo objeto no array

objetos.push('Hamburguer');

//Mostrar todos os objetos do array usando um for

for (let i  = -1; i < objetos.length; i++) {
    console.log(objetos[i]);
}
