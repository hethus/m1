const prompt = require('prompt-sync')();

// revisão função:

// function sub(a, b){ // criei uma função para subtrair dois números, os numeros 
//     let total = a - b
//     console.log(total)
//     as = 90     // posso alterar o valor de uma variável de fora da função estando na função!
//     return total // retorno a variável total para fora da função!

// }
// let as = 60 // variável para teste
// let a = +prompt('Digite um número: ')
// let b = +prompt('Digite outro número: ')
// let valor = sub(a, b) // chamei a função sub e passo os parâmetros a e b!

// console.log(`O resultado da subtração é ${valor}`)
// console.log(as) // mostra o valor modificado da variável sem ter usado return para ela!

// --------------------------------------------------

// síncrono:
// o código vai executando linha por linha, e só vai executar a próxima linha quando a anterior terminar!

// ------

// assíncrono:
// o código vai executando linha por linha, mas não espera a informação chegar para executar a próxima linha! ('quase isso')

// ------

// callbacks:

// é uma função que é chamada dentro de outra função.
// ex:

    // function pizzaPr(sabor){
    //     console.log(`A pizza de ${sabor} está pronta!`)
    // }
    // function pedirPizza(callback){
    //     let sabor = prompt('Qual o sabor da pizza? ')
    //     callback(sabor)
    // }
    // pedirPizza(pizzaPr)

// PERIGO DE CAIR NO CALLBACK HELL, pois o código vai ficar muito grande! ent o callback parou de ser muito usado!

// ------

// Promises:

// é um objeto que representa uma operação assíncrona, ou seja, enquanto outras coisas carregam, esse objeto carrega o seu dado, mas sem travar o código esperando para depois continuar a executar, isso corrige e melhora a performance do código! ('quase isso')
// LEMBRANDO QUE promises, são promessa que algum valor irá retornar, mas pode ser que não retorne nada!

    // function primeiraFuncao(parametro) {
    //     return new Promise((resolve, reject) => {
    //         console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
    //         resolve(parametro);
    //     });
    // }

    // function segundaFuncao(parametro) {
    //     return new Promise((resolve, reject) => {
    //         const novoParametro = parametro + 10;

    //         console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
    //         resolve(novoParametro);
    //     });
    // }

    // function terceiraFuncao(parametro) {
    //     return new Promise((resolve, reject) => {
    //         const novoParametro = parametro * 2;

    //         console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

    //         resolve(novoParametro);
    //     });
    // }

    // function quartaFuncao(parametro) {
    //     return new Promise((resolve, reject) => {
    //         const novoParametro = parametro - 15;
 
    //         console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
    //         resolve(novoParametro);
    //     });
    // }

    // primeiraFuncao(100)
    //     .then(segundaFuncao)
    //     .then(terceiraFuncao)
    //     .then(quartaFuncao); // ou seja, a primeira função é executada, depois a segunda e assim por diante! e cada promise pode terminar em resolve ou reject!

// .catch():

// é usado quando a promise não termina com sucesso, ou seja, quando ela falha!
// é definido no mesmo lugar no .then()
// ele é uma arrow function e no () pode colocar o err, que é o erro que aconteceu!