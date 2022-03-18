const prompt = require("prompt-sync")();

// for --------------------------------

// mais utilizado como laço de repetição para quantidades determinadas! ao contrario do while que é geralmente utilizado para indeterminadas

// for (let i = 0; i < 10; i++){
//     console.log("oi")
//  } // o FOR usa 3 parâmetros geralmente, o primeiro é a variável de controle, a segunda é a condição e a terceira é o que ele vai fazer no final da repetição!

//POSSO DECLARAR MAIS DE UMA VARIÁVEL, E POSSO USAR OUTRA EXPRESSÃO FINAL, SEPARANDO ELAS COM VIRGULA, EXEMPLO:

// for(let i = 0, a = 0; i < 2; i++, a++){
//     console.log(i, a)
// }

//ou seja:

//executa o primeiro parâmetro uma vez SÓ.
//executa o segundo parâmetro todo começo de ciclo e se for TRUE, ele executa o código
//executa o terceiro parâmetro somente no final do ciclo!

const filmes = ["a", "b", "c", "d"];

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
};