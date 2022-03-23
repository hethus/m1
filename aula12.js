const prompt = require("prompt-sync")();



// ------------------------------------------------- exercícios:

// 1-

function calc(first, second){
    console.log('soma:', first + second);
    console.log('subtração', first - second);
    console.log('multiplicação', first * second);
    console.log('divisão', first / second);
};

let a = +prompt('primeiro valor: ');
let b = +prompt('segundo valor: ');

calc(a, b);