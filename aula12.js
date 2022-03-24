const prompt = require("prompt-sync")();



// ------------------------------------------------- exercícios:

// 1-

// function calc(first, second){
//     console.log('soma:', first + second);
//     console.log('subtração', first - second);
//     console.log('multiplicação', first * second);
//     console.log('divisão', first / second);
// };

// let a = +prompt('primeiro valor: ');
// let b = +prompt('segundo valor: ');

// calc(a, b);

// 2-

// function veriTres(a){
//     return a % 3 == 0 ? true : false
// }
// let numero = 0;
// do{
// numero = +prompt('qual o numero? ')
// }while(!(numero % 1 === 0))

// numero = veriTres(numero)

// console.log(numero)

// 3-

// function area(a, b){
//     return a * b
// }

// const x = +prompt('largura (m): ');
// const y = +prompt('comprimento (m): ');
// const areaTotal = area(x, y);

// console.log({areaTotal});

// 4-

// function distancia(x, y, z){
//     let i = 0
//     for( ; x < y; i++){
//         x = x + z
//     };
//     return i
// }
// const x = +prompt('distancia inicial: ');
// const y = +prompt('distancia final: ');
// const z = +prompt('distancia do passo: ');
// const total = distancia(x, y, z);

// console.log(total);

//5-

function inverte(a){
    return a.reverse();
}

const tamanho = +prompt('qual sera o tamanho da lista? ');
let lista = [];
let listaReversa = ''
while(lista.length < tamanho){
    let escreva = prompt('adicionar dado: ')
    lista.push(escreva)
}

listaReversa = inverte(lista)

console.log(listaReversa)