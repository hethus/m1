const prompt = require('prompt-sync')();

// lembrando que uma função pode chamar outra função!
// e que objeto não é iterável, então não é possível percorrer seus elementos com o for of!

// uma função criada dentro de um objeto é chamada de método!

// quando se declara um método no objeto, sempre que for chamar uma chave dele mesmo o mais correto é usar o this.
// sempre se deve separar os métodos com vírgula!

// posso alterar o valor de um objeto sem usar o return, só utilizar o this dentro do método!
// posso também colocar parâmetros dentro do método, mas não é obrigatório!
// é possível utilizar boolean como parâmetro para realizar alguma alteração no objeto! ex:

    // const pessoa = {
    //     nome: 'João',
    //     idade: 20,
    //     saudacao: function(isManha) {
    //         if (isManha === true) {
    //             console.log(`Bom dia, meu nome é ${this.nome}`)
    //         } else if(isManha === false) {
    //             console.log(`Boa noite, meu nome é ${this.nome}`)
    //         }
    //     }
    // }
    // pessoa.saudacao(true);
    // pessoa.saudacao(false);
//


