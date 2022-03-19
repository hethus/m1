const prompt = require("prompt-sync")();

// for indexado: --------------------------------

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

// const filmes = ["a", "b", "c", "d"];

// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i]);
// };

// for of: ------------------

//esse for ele so servira quando precisamos de apenas o valor de um array:

//ele tbm pode servir para obter índice, usando indexOf!
//PROBLEMA: ele não acha valor repetido no array!

// let lista = ["oi", "a", "b", "c"]

// for (let i of lista) {
//     if(i == "oi"){
//     i = "aaaa"
//     }
//     console.log(i)
//}

// for in: -------------------

//esse for so serve quando precisamos de apenas o índice de um array:

//esse funciona para obter índice e valor, usando o lista[i]
//PROBLEMA: ele retorna o índice como string!

// let lista = ["oi", "a", "b", "c", "d"]

// for (const i in lista) {
//     console.log(i)
//     console.log(lista[i])

//} --------- 1-

// const coluna = +prompt("coluna: ")
// const linhas = +prompt("linhas: ")


// for (let linhaAtual = 0; linhaAtual < linhas; linhaAtual++) {

//     const lista = []
    
//     for(let i = linhaAtual; i < linhaAtual + coluna; i++){
//         lista.push(i)    
// }
// console.log(lista)
// console.log()
// }

// --------- 2-

// numero = +prompt("numero? ")
// resultado = numero

// for(let i = numero - 1; i > 1; i--){
//     numero *= i
// }
 
// console.log(numero)

// -------- 3-

// numero = +prompt("qual o numero? ");

// for(let i = 1; i <= 10; i++){
//     console.log(numero * (i));

//     if(numero == 1 || numero == 10){
//         console.log("mas ai estava obvio ne?...")
//     }
// };


// OUTRO EXEMPLO:

for(let numero = 0; numero < 10; numero++){
    const tabuadas = []


    for(let i = 0; i <= 10; i++){
        
        const tabuada = numero * i
    
            tabuadas.push(tabuada)
        console.log(`${numero} x ${i} = ${tabuada}`)
    
    }
    console.log(tabuadas)
}