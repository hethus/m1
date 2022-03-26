const prompt = require("prompt-sync")();

// ---- arrow function:

// funciona igualzinho a function, mas posso simplificar ela em uma linha, sem return e etc, mas posso deixa-lá mais complexa igual a function tbm!

// const funcaoUm = (a, b) => a + b;

// let a = 10
// let b = 4

// console.log(funcaoUm(a, b))

// -------------------------------------

// ---- Objects:

// DAORA: objeto nada mais é que um array, mas que o índice tem nomes!

// cada elemento do objeto é formado por uma chave e um valor.
// a chave tem que ser sempre um nome, e o valor pode ser qualquer coisa (string, number, boolean, variável, array, objeto, etc)
// a chave e o valor juntos formam uma propriedade do objeto!

// para acessar a chave do objeto, basta usar o nome da chave, ou seja, o nome da chave é o índice do objeto:

    // objeto.chave

        // Em uma lista ele ficaria assim:

    // objeto.chave[índice]

// LEGAL:

// para adicionar uma nova chave no objeto, basta colocar o objeto.novaChave = valor, sendo no caso a chave que quer adicionar e o valor que irá adicionar na chave!

// um dos jeitos mais simples para adicionar uma chave a partir de uma VARIÁVEL no objeto é usando o [], ou seja:

    //let a = prompt('chave: ');
    //objeto["a"] = valor;
// OBS, TOMAR CUIDADO COM ESSE MÉTODO. Pq se a chave existir ele só mudará o valor da chave não irá criar uma nova com o mesmo nome :(
// se tiver uma lista dentro de um objeto, posso usar splice, push, pop, etc. normalmente, exemplo: objeto.lista[índice].push(valorNovo)

// IMPORTANTE, cuidado quando for tentar passar um object para um array, pq se o objeto estiver rodando em um for e ele estiver definido fora do for, ele apresentará erros!

// acessar objeto com objeto["chave"] é igual quando se acessa um array com array[índice]!

// ------- IMPORTANTE:

// se um objeto n tiver nenhum valor, ele ira procurar preencher aqueles valores com alguma variável de fora do objeto! ex:

    // const nome = 'João';
    // const pessoa = { nome }
    // console.log(pessoa); // AGORA A CHAVE NOME ESTÁ PREENCHIDO COM A VARIÁVEL NOME QUE ELE CONSEGUIU ACHAR FORA DO OBJETO! 

//ALÉM DISSO, A CHAVE PODE TER ESPAÇO, MAS AÍ TERIA QUE USAR ASPAS DUPLAS, EX:

    // const pessoa = { "nome da pessoa": 'João' };
    // console.log(pessoa["nome da pessoa"]); // QUE DAORA! a chave "nome da pessoa" me retorna o valor certinho, isso é bem legal de saber!

// todos objetos tem que ter as mesmas chaves, para evitar erros e tudo mais!

// funções que tiverem com base objetos, podem ser ser adicionadas dentro do objeto, como exemplo:
    
    // const pessoa = {nome: 'João', idade: 20, saudacao: function() { console.log(`Olá, meu nome é ${this.nome}`) } }
    // pessoa.saudacao(); // ele chama a função dentro do objeto!

// this é usado dentro de um objeto e em uma função, quando a função é executada o this ja sabe que o que tu precisa é aquele objeto!











//ex:

// const pessoaCel = {joao: '111-222', marta: '333-444'}

// console.log(pessoaCel.joao)


// ---- exercício:

const quantCad = +prompt('Quantos cadastros você quer fazer? ');
const cadastro = [];

for(let i = 0; i < quantCad; i++){
    let pessoa = {};

    console.log();
    console.log(`----${i+1}º cadastro----`);
    console.log();

    pessoa.nome = prompt('Nome: ');
    pessoa.cargo = prompt('Cargo: ');
    pessoa.salario = +prompt('Salário: ');
    cadastro.push(pessoa);
}
console.log(cadastro); // depois terminar os exercícios!