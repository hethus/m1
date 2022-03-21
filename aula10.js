const prompt = require("prompt-sync")();

// regrinha que pode ajudar:

// PRECISO DO VALOR: for of

// PRECISO DO ÍNDICE: for in 

// PRECISO DO VALOR E DO ÍNDICE: for in         (i [índice], lista(i) [valor])



// for of:

// só funciona se for um valor iterável, ou seja, um array, uma string, coisas assim.
// NUMBER NÃO É ITERÁVEL (number em formato de string, pq numero em uma string ai funciona!).
// booliano tbm n é iterável (true e false)

// oque o for of faz é percorrer cada parte do valor iterável:

// em uma string ele vai letra por letra (ou numero se for um numero na string)
// em um array ele vai percorrer cada valor marcado na array. (ou seja, a cada loop, aquela variável usada para a condição terá um valor da array, EM SEQUENCIA, DO PRIMEIRO PARA O ULTIMO!)

// acho que o for of tbm é legal para separar letra por letra e depois juntar algumas em outra lista ou string! tbm é util para separar valores de array quando só for necessário o valor, n o índice!

// ex:

// let letra = ['abc', 'def', 'ghi', 'jkl'];

// for (const i of letra){
//     console.log(i);
//     if (i == 'abc'){
//          console.log("apareceu um abc aq em");
//     };
// }

// -----------------------------------------------

//for in:

// oque o for in faz é percorrer cada parte do valor (ou array), mostrando o seu índice, ou seja, ao contrario do of, esse in não retorna o valor, somente O ÍNDICE!
// O legal que o for in faz a maioria das coisas do for of, so que precisa ajeitar para funcionar!

// o for in tbm é bom para pegar o índice, e a partir dele, dará para fazer alterações no valor, como remover ele da lista, copiar para outra lista e etc!

// ex:

// let letra = ['abc', 'def', 'ghi', 'jkl'];

// for (const i in letra){ // é tipo usar o .length() :)
//     console.log(i);
//     if (letra[i].includes('abc')){
//         console.log("o índice i recebeu 'abc'")
//     };
// }
// console.log(letra)

let soma = 0
const numero = []
let escolha = +prompt("números? ")
let ent = 0

for(let i = 0; i < escolha; i++){ // for clássico repetindo o push de números na lista com base em quantos números o usuário quis digitar:

    ent = +prompt("qual numero na lista? ")
    numero.push(ent)
}

for (let i of numero){ // for of repetindo a soma dos números até todos os valores terem sido somados:

    soma = soma + i
}

console.log(soma)

for (let i in numero){ // for in mostrando quais números foram digitados e seus respectivos indices:

    console.log(`o ${i}º numero digitado foi: ${numero[i]}`)
}