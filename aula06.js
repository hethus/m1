const prompt = require("prompt-sync")();

/*

UMA COISA LEGAL: posso usar o [] para trazer um elemento da string, ou seja a = 'oi', a[1] = 'i'!

IMPORTANTE: quando estiver mexendo com arquivos complexos, tentar executar e fazer aos poucos, verificar etapa por etapa, ou mesmo colocar e testar em outro arquivo limpo so a parte que necessita de teste

array:

o array é um tipo de variavel que pode armazenar qualquer tipo de informação (boolean, number, string E ATE MESMO UMA VARIAVEL OU OUTRO ARRAY, OU MESMO UMA VARIAVEL QUE É UM ARRAY, mas tomar cuidado!), e serve para economizar espaço e ajudar
o programa a ficar compacto, toda informação coloca no array vai criar um indice (é uma sequencia numerica sequencial feita para depois ser
    possivel encontrar a informação do array)

IMPORTANTE: preferencialmente declare o array como const, pq sera possivel mudar algum valor dentro dela, unica excessao é que n podera
mudar a lista, ou seja, pegar o "i = [1, 2, 3]" e depois transformar para "i = [4, 5, 6]" pq ai seria totalmente diferente, n esta mudando um valor em especifico

o tamanho do array é definido pelo tanto de informação que tem nele, agora, o ultimo indice é 1 a menos que o tamanho total da array, pelo motivo que o INDICE começa no 0, n confundir tamanho com indice!

posso escrever ela assim:

const array = [
    "oi",
    "tchau",
    "ha"
];

ou:

const array = ["oi", "tchau", "ha"];

----------------

const array = ["oi", "tchau", "ta bom"]

const informacao = array[2] // OU SEJA, essa nova variavel pega a 3 informação do array e coloca ela na nova variavel, lembrando q começa com 0
console.log(informacao, array)

array[0] = "hahaha"

console.log(array)
// tem que lembrar sempre que a variavel quando é apresentada, ela vira independente, ex:
//array = ["oi", "tchau"]
//const oi = array[0]
//oi = 3 (ou seja, o oi antes era uma variavel que puxava o valor "oi" do array, agora ele puxa o 3 que foi especificado ali, mas o array[0] continua sendo o "oi")

//---------------

// .length é um prototype. ele serve para medir quantas informações existem nesse array, ele pega o ultimo indice e soma mais um, ex: o ultimo indice do array é 10, ent o .length ira retornar 11


//o .length é sempre o ultimo indice mais um, ent para usar a informação dele é necessario subtrair 1:

const oi = ["a", "b", "c", "d", "e", "f"]
const ultimoNumero = oi.length - 1
const ultimoIndice = oi[ultimoNumero]

console.log(ultimoIndice, ultimoNumero)


//------------------ o .push() serve para inserir um novo elemento dentro de um array
const oi = ["a", "b", "c", "d"]
oi.push("e") // adiciona o "e" no array
const ultimo = oi[oi.length - 1] // ou seja, pega o ultimo indice do array e usa como indice 
console.log(oi, ultimo)*/


//------------------------ teste com while e array
/*
let numero = 0
const filme = []

console.log("adicione 5 filmes:")

while(numero < 5){
    const novo = prompt(`digite o ${filme.length + 1}º filme: `)
    filme[numero] = novo // aqui posso colocar filme.push(novo) o resultado é o mesmo
    numero++
    console.log("filme cadastrado com sucesso")
}
console.log(filme)
*/
//------------------------------ .unshift() é a mesma coisa do .push(), mas nesse caso ele adiciona o valor ao começo do array!

//------------------------------ .pop() remove o ultimo elemento do array, e tbm serve para retornar o elemento removido, ou seja, posso pegar o elemento q eu tirei do array e usar em outra variavel!

//------------------------------ .shift() mesma coisa do .pop() so que ele remove e retorna o primeiro elemento do array

//------------------------------ .splice() é o que eu ja usei, ele usa um, dois, tres ou infinitos parametros, o primeiro é de apartir de qual ele vai começar a remover, o segundo é quantos elementos ele vai remover, ou seja, .splice(2, 1) ele vai remover a partir do indice 2, e vai tirar um so elemento. a partir do terceiro elemento ele vai adicionar aquela informação no array! ex: oi.splice(2, 1, "oi", "tchau"): ele remove a partir do segundo indice, removendo um elemento e depois adiciona o elemento "oi" e "tchau" no final!
// deixando o 0 no segundo parametro ele n ira remover nada, so ira adicionar a informação no indice (primeiro parametro)

//------------------------------ .fill() ele preenche todos elementos com algum valor, ou seja, array.fill("oi", 1, 4) ele vai substituir todos os valores a partir do indice um para "oi" ate um indice anterior do que o 4!

//------------------------------ .sort() ele reeorganiza os elementos em forma crescente, assim os elementos vao ter permanentemente o novo indice! lembrando que o sort pode ser configurado no () para ter uma ordenação em especifico!

//------------------------------ .reverse() ele reeorganiza os elementos deixando todos invertidos, ent array[1,2,3,4] com o array.sort() vai ficar array[4,3,2,1]

//------------------------------ .includes() retorna true se a array incluir o elemento que vc esta procurando! muito importante!

//------------------------------ .isArray() retorna se aquele objeto é uma array!!!! IMPORTANTE!




// lembrando que o CONTINUE finaliza aquele loop e reinicia, ou seja, tudo em baixo do codigo sera ignorado.



/* exer:
1-

let numero = 0
const num = []
const par = []
const impar = []

while (numero < 20) {
    num[numero] = +prompt(`digite o ${numero + 1}º valor: `)

    if (num[numero] % 2 == 0) {
        par.push(num[numero])
    }else {
        impar.push(num[numero])
    }
    numero++
}
console.log(par, impar, num)

2-

const nome = []
const altura = []
const idade = []
numero = 0
let medAlt = 0
let medIda = 0
let finalAlt = 0
let finalIda = 0


while (numero < 5) {
    nome[numero] = prompt("digite o seu nome: ")
    altura[numero] = +prompt("digite a sua altura: ")
    idade[numero] = +prompt("digite a sua idade: ")

    medAlt = medAlt + altura[numero]
    medIda = medIda + idade[numero]
    
    numero++
}

finalAlt = medAlt / altura.length
finalIda = medIda / idade.length

console.log(nome, altura, idade, finalAlt, finalIda)

3-

const nome = []
const notas = []
let notaSoma = 0
let notaMed = 0

const alunos = +prompt("quantos alunos serão cadastrados? ")

numero = 0

while (numero < alunos) {
    nome[numero] = prompt(`qual o nome do ${numero + 1}º aluno? `)
    notas[numero] = +prompt("nota do(a) mesmo(a): ")
    notaSoma = notaSoma + notas[numero]
    numero++
}

numero = numero - 1
nome.reverse()
notas.reverse()

while (numero != -1) {
    console.log(`\no(a) aluno(a) ${nome[numero]}, teve a nota de ${notas[numero]}\n`)
    numero--
}

notaMed = notaSoma / notas.length
console.log(`\nA media de todas as notas é: ${notaMed}`)

4-*/

const valores = []

let numero = 0
let numeroDois = 0

let dado1 = 0
let dado2 = 0
let dado3 = 0
let dado4 = 0
let dado5 = 0
let dado6 = 0

while (numero < 100) {
    valores[numero] = Math.floor((Math.random() * 6) + 1)
    numero++
}
while (numeroDois < 100){
    if (valores[numeroDois] === 1) {
        dado1++
    }else if (valores[numeroDois] === 2) {
        dado2++
    }else if (valores[numeroDois] === 3) {
        dado3++
    }else if (valores[numeroDois] === 4) {
        dado4++
    }else if (valores[numeroDois] === 5) {
        dado5++
    }else if (valores[numeroDois] === 6) {
        dado6++
    }
    numeroDois++
}
console.log(valores)
console.log(`o valor 1 apareceu ${dado1}
o valor 2 apareceu ${dado2}
o valor 3 apareceu ${dado3}
o valor 4 apareceu ${dado4}
o valor 5 apareceu ${dado5}
o valor 6 apareceu ${dado6}`)

/*

posso trabalhar com um array dentro do outro, ou seja:

let a = ["a","b","C",[1,2,3,4,5]]

console.log(a[3]) ira retornar [1,2,3,4,5] pq ele conta a array dentro dessa array como um valor so
console.log(a[3].length) ira retornar o tamanho dessa array que esta dentro da array
console.log(a[3][0]) ira retornar o valor 1 pq ele pega o 3 indice na array a e depois pega o indice 0 na array que estava dentro

----------------------

let a = ["a","b","C",["abc","def","ghi","jkl","mno"]]

console.log(a[3][4][0]) ira retornar o valor "m", resumindo, ele "entra" no array a, entra depois no indice 4 e finalmente ali ele encontra o valor que tem o indice 0

! ele inverte o resultado, exemplo:

isNaN = n é numero 

!isNaN = é numero!

*/