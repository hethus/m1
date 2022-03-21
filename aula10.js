const prompt = require("prompt-sync")();

// for of:

// só funciona se for um valor iterável, ou seja, um array, uma string, coisas assim.
// NUMBER NÃO É ITERÁVEL (number em formato de string, pq numero em uma string ai funciona!).
// booliano tbm n é iterável (true e false)

// oque o for of faz é percorrer cada parte do valor iterável:

// em uma string ele vai letra por letra (ou numero se for um numero na string)
// em um array ele vai percorrer cada valor marcado na array. (ou seja, a cada loop, aquela variável usada para a condição terá um valor da array, EM SEQUENCIA, DO PRIMEIRO PARA O ULTIMO!)

// ex:

// let letra = ['abc', 'def', 'ghi', 'jkl'];

// for (const i of letra){
//     console.log(i);
//     if (i == 'abc'){
//          console.log("apareceu um abc aq em");
//     };
// }

