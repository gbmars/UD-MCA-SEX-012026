let alimentos = ['Maçã','Pão francês','Xícara de café','Prato de porcelana','Faca de cozinha','Arroz','Garrafa de suco','Sanduíche','Panela','Colher de sopa','Bolo de chocolate','Caderno de receitas','Pizza','Tesoura de cozinha','Vaso de temperos','Liquidificador','Frigideira','Sabonete líquido para mãos','Copo de vidro','Controle de fogão'];

//Elementos de posição 0, 7, 11, 15, 18 e 20
    console.log(alimentos[0],','
        ,alimentos[7],',',alimentos[11],',', alimentos[15],',', alimentos[18],',', alimentos[20]);

//Qual elemento está na última posição?
    console.log(alimentos[19]);

//Quantos elementos existem no array?
    console.log(alimentos.length);

//Adicionar um novo objeto no array

alimentos.push('Hamburguer');

//Mostrar todos os alimentos do array usando um for

for (let i  = -1; i < alimentos.length; i++) {
    console.log(alimentos[i]);
}