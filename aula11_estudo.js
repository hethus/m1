const prompt = require("prompt-sync")();

// function pode ter parâmetros infinitos, mas não pode ter parâmetros com nomes iguais
// parâmetros podem ser usados na função, é como se fosse uma variável dentro da função, ou seja, quando se precisa de um valor DE FORA da função para ser usado dentro da função

    // quando executa uma função sem return, ele retorna undefined, mas mesmo assim ELE EXECUTA TODOS OS CÓDIGOS QUE ESTÃO DENTRO DA FUNÇÃO.
    // Se executar uma função com return no final, ele executa todos os códigos da função e retorna o que estiver na frente do return.
    // se a função com return tiver sido executado depois do = de uma variável, ele retorna o resultado para a variável em questão, sendo possível utiliza-la depois fora da função.

// parâmetro é o que é definido no () da construção da função, ou seja, na declaração da função nos temos os parâmetros
// argumento é o que é definido no () quando a função é chamada, ou seja, na execução da função nos temos os argumentos.
// ou seja, parâmetro só acontece uma vez, argumento pode acontecer várias vezes.
// não esquecendo que temos um argumento para cada parâmetro.
// a cada execução da função, cada argumento se transforma no parâmetro correspondente! 

// É POSSÍVEL DECLARAR UMA FUNÇÃO EM QUALQUER LUGAR, SEJA DENTRO DE OUTRA FUNÇÃO, SEJA DENTRO DE UM IF, FOR, WHILE, ETC, mas tem q fazer sentido, no caso acho que é bem ruim fazer isso.

// PODE CRIAR UM PARÂMETRO PREDEFINIDO QUE SERÁ USADO SE O ARGUMENTO N FOR ENTREGUE! EX:

    // function soma(a, b = 0){} // ou seja, se não tiver argumento b, ele assume o valor 0.

    // ou:

    // function nome(a, b = 'não tem b'){} // ou seja, se não tiver argumento b, ele assume o valor 'não tem b'.

//

// LEMBRANDO O RETURN PUXA O VALOR PARA FORA DA FUNÇÃO, OU SEJA, PODE SER SALVO EM UMA VARIÁVEL OU PODE SER UTILIZADO NO CÓDIGO!

// ---- arrow function:

// ela é declarada igual uma variável, ou seja, (const funcaoUm = (a, b) => a + b;) o = é o que mostra que os parâmetros irão para uma variável, o => é o que inicia a arrow function e o que vem a seguir é o que será executado quando essa função ser chamada!
// a arrow function precisa de ; no final, ao contrario da function.
// se tiver um parâmetro na arrow function, não precisa de ()
// a arrow function se tiver uma linha, não precisa de {} e nem return, mas se tiver mais de uma linha, precisa de {} e return. exemplo:

    // const sub = (a, b, c) => a - b - c;

    // é a mesma coisa que:

    // const sub = (a, b, c) => {
    //     return a - b - c;
    // }

// ---- forEach:

// forEach é uma função que percorre todos os elementos de um array e executa uma função para cada um deles.
// ou seja, para cada execução do forEach, ele executa 3 parâmetros, o primeiro é o índice, o segundo é o valor do índice e o terceiro é a lista completa
// ex:
    // function funcArray(a, b, c){
    //     console.log('Valor: ',a);
    //     console.log('Índice: ',b);
    //     console.log('Array: ',c);
    //     console.log();
    //   }
  
    //   let lista = ['Blue', 'EdTech', 'Módulo 1'];
  
    //   lista.forEach(funcArray);

// ---- Spread syntax(...):

// pode ser usado para copiar e colar dados de um array em outro
// TAMBÉM SERVE COMO UM FOR OF QUANDO USADO EM ALGUMA FUNÇÃO
// OU SEJA, ele não faz nada mais do que pegar um array e separar os valores, em uma function de um array com 3 valores e usando o ... termos q usar 3 parâmetros para percorrer todos os valores.

