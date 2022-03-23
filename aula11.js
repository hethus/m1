const prompt = require("prompt-sync")();

// ---- function:

// uma maneira de automatizar uma parte da programação, onde ela pode ser chamada para outras coisas, economizando linhas e deixando o código mais otimizado
// ela pode ser usada sem return e sem parâmetros(argumentos), tem vários jeitos!
    // LEMBRANDO QUE USAR VARIÁVEIS QUE NÃO ESTÃO DENTRO DELA NÃO É UMA BOA PRATICA!!!! TENTAR EVITAR:
    // o certo é se for usar variáveis dentro dela, declarar elas lá dentro!

// a diferença entre parâmetro e argumento é que parâmetro é quando se declara e quando ele é suado, ele é argumento!

// ex:


    // function verificarPadrao(){ // cria a função
    //     return a >= b ? 'o primeiro numero é maior ou igual ao segundo!' : 'o segundo numero é maior!' //retorna o valor que ele encontrou, se n tiver o return ele da undefined, pq ali na vdd so executa o teste!
    // };


    // let a = +prompt('numero: ');
    // let b = +prompt('numero: ');

    // console.log(verificarPadrao()); // chama a variável e o valor q retornar aqui ele coloca no console

    // a = 5;
    // b = 10;

    // console.log(verificarPadrao(), a, b);

// é o mesmo que:

    // let a = +prompt('numero: ');
    // let b = +prompt('numero: ');
    // let c = a >= b ? 'o primeiro numero é maior ou igual ao segundo!' : 'o segundo numero é maior!'

    // console.log(c);

    // a = 5;
    // b = 10;

    // c = a >= b ? 'o primeiro numero é maior ou igual ao segundo!' : 'o segundo numero é maior!'

    // console.log(c, a, b);

// OU SEJA, consegui automatizar uma comparação que talvez eu usaria varias vezes e isso poderia dificultar meu entendimento do meu proprio codigo!

//// outro exemplo:

/// SEM RETURN E SEM PARÂMETRO(argumento): 

    // function calculatotal(){
    //     let a = +prompt('qual o valor do item? ');
    //     let b = +prompt('quantos itens? ');
    //     let total = (a * b).toFixed(2);

    //     console.log(`O valor total é: ${total}`);
    // };

    // calculatotal(); // aqui n uso return pq na vdd o console.log ja esta na função e ele ja pede o prompt na função, O QUE ESTA TOTALMENTE ERRADO

/// COM RETURN E PARÂMETRO(argumento):

    // function calculaReturn(a, b){
    //     let total = (a * b).toFixed(2);
    //     return total; // aqui ele faz o calculo e coloca na variável total, depois retorna o valor que ficou armazenado no total!
    // };

    // let a = +prompt('produto? ');
    // let b = +prompt('quantidade? ');

    // console.log(calculaReturn(a, b)); // chama a função e depois ele coloca no console o valor retornado da variável total

/// SEM RETURN E COM PARÂMETRO(argumento):

    // function calculaLog(a, b){
    //     let total = (a * b).toFixed(2);
    //     console.log(`total: ${total}`); // aq temos duas coisas, primeiro os parâmetros estão definidos e ai eles funcionam como uma variável na função, ent na conta de vez numero fixo usa os parâmetros ja definidos para depois realizar o teste quando a função ser chamada!
    // }; // segunda coisa, aqui n tem return, mas ele executará um console.log com o resultado, ou seja n precisa retornar nenhum valor mesmo

    // let a = +prompt('produtos: ');
    // let b = +prompt('quantidade: ');

    // calculaLog(a, b); // aqui ele chama a função e pega a varinel a e b e coloca os valores dela nos PARÂMETROS DA FUNÇÃO

//// MUITO IMPORTANTE MESMO:

    // RETURN:

// o return ele pega algo de dentro da function e entrega esse algo!

// o return tbm pode retornar uma lista ex: [valor1, valor2, valor3], mas lembrando que n pode ter dois returns na mesma função

// ex:

// function testar(a, b){
//     let teste = a * b;
//     return teste // aqui nada mais é do que pegando a variável teste que já calculou o resultado e retornando no final da função!
// };

// let a = +prompt("numero: ");
// let b = +prompt("outro numero: ");
// let resultadoTeste = testar(a, b); // armazena o valor da função (ou seja, pega o valor q foi RETORNADO da função)

// console.log(resultadoTeste) // mostra o valor retornado e que foi armazenado na variável






//// ---------------------------------------- Exercicios:

//1-

// function calc(first, operador, second){
//     if(operador === '+'){
//         console.log(first + second);
//     }else if(operador === '-'){
//         console.log(first - second);
//     }else if(operador === '*'){
//         console.log(first * second);
//     }else if(operador === '/'){
//         console.log(first / second);
//     };
// };

// let a = +prompt('primeiro valor: ');
// let b = +prompt('segundo valor: ');
// let c = prompt('operação (+, -, *, /): ');

// calc(a, c, b);