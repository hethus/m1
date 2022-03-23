const prompt = require("prompt-sync")();

// ---- function:

// uma maneira de automatizar uma parte da programação, onde ela pode ser chamada para outras coisas, economizando linhas e deixando o codigo mais otimizado:

// ex:


    // function verificarPadrao(){
    //     return a >= b ? 'o primeiro numero é maior ou igual ao segundo!' : 'o segundo numero é maior!'
    // };


    // let a = +prompt('numero: ');
    // let b = +prompt('numero: ');

    // console.log(verificarPadrao());

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

