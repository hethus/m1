const prompt = require('prompt-sync')();

// escopo:

// é o espaço de memória onde as variáveis são armazenadas, tem escopo global e escopos locais, esses ultimos sendo utilizados por funções e blocos de código.

// o this quando executado no global retorna um objeto, o this em uma função retorna um object[global] (o que ainda n sei muito sobre).

// FICAR ESPERTO: o this executado em uma arrow function retorna o escopo anterior, ou seja, se executar a arrow function no global, ele retornará o this do global.

// resumindo, this em uma function retorna o escopo da function. AGORA, this em uma function arrow retorna o escopo principal do arquivo!

// ------------------------ prototype:

//prototype existe em tudo no javascript, desde um .length ou um .splice, eles são prototype, ou seja, funções para simplificar a modificação no codígo.

// ------------------------ tipos de programação:

// imperativa:
//programação pura igual nas primeiras semanas do curso.

// funcional:
//programação que utiliza funções

// orientada a objetos:
//programação que utiliza classes e objetos.

// classes no javascript nada mais são do que funções que geram um objeto!
// serve para simplificar e diminuir a chance de algum erro acontecer referente a objetos.

    // class pessoas { // aqui a class chamada pessoas é responsável por criar um objeto em especifico!
    //     constructor(nome, idade){ // constructor é onde irá definir os parâmetros a serem repassados ao objeto.
    //         this.nome = nome; // this é o objeto que está sendo criado, o this "sabe" qual é o objeto em questão, se o objeto chamado 'joão' for criado, ele saberá que dessa vez o this é o objeto 'joão'.
    //         this.idade = idade; // depois do this temos a chave que será aplicada e depois do = o valor a ser passado, observe que são os mesmos que estão na declaração dos parâmetros.
    //     }
    
    //     exibirNome(){ // a função foi declarada fora do constructor, mas mesmo assim ele saberá qual é o objeto em questão.
    //         console.log(`o nome dessa pessoa é ${this.nome}`);
    //     }
    // }

    // const joe = new pessoas('joe', 20); // usamos o new e qual a class e depois os parâmetros, ou seja, um novo objeto da classe pessoas chamado joe, com os parâmetros nome e idade.

    // joe.exibirNome(); // aqui é onde chamamos a função exibirNome, nesse caso exibirNome do objeto joe!



// ------------------------ desconstrução de objetos e arrays:

// é possível desconstruir objetos e arrays, colocando os valores deles em uma variável para se utilizar posteriormente.
// no caso de objetos o nome declarado na variável terá q ser o mesmo do nome declarado na chave do objeto! ex:

    // const pessoa = {
    //     nome: 'joão',
    //     idade: 20,
    //     telefone: '123456789',
    // }

    // const {nome, idade, oi} = pessoa; // desconstrução de objetos, ou seja, pegar os valores de um objeto e colocar em uma variável.

    // console.log(nome, idade); // aqui estamos pegando os valores de nome e idade que foram armazenados na variável e exibindo.
    // console.log(nome) // OLHA QUE LEGAL, podemos trabalhar com um valor só daqueles que foram armazenados na variável!
    // console.log(oi) // oi irá retornar undefined, pois não foi declarado no objeto!
        // obs: o mesmo principio serve para arrays, mas nesse caso, de vez ter que colocar o nome correto da chave, para fazer isso com um array, terá que colocar em sequencia, onde cada declaração será um índice do array!

// ------------------------ keys, values e entries:

// é usado para mostrar dados de um objeto em especifico.
// keys: mostra as chaves de um objeto.
// values: mostra os valores de um objeto.
// entries: mostra as chaves e os valores de um objeto.

// object.keys(objeto); // mostra as chaves do objeto.
// object.values(objeto); // mostra os valores do objeto.
// object.entries(objeto); // mostra as chaves e os valores do objeto. esse pode ser bem utilizado em um for of. declarado da forma 'const [key, value] of object.entries(objeto)'

//