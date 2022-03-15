const prompt = require("prompt-sync")();

// quando tu verifica uma informação, o que sera executado é um boolean, ou seja, ira verificar se é false ou true, ent:
// const tchau = "bye"
// const  tchau == "hi" (vai aparecer no console.log q é false, pq tchau é diferente e se perguntar qual o tipo da variavel ele vai dizer que é boolean)

//dica, se estiver se perdendo em qual linha ta sendo executado, coloca o numero da linha no console.log correspondente

// sao booleans:

// == (igual a algo). === (tipo igual e valor igual a algo). > (maior que algo). < (menor que algo). != (diferente de algo) !== (tipo e valor diferente de algo). <= (menor ou igual). >= (maior ou igual).
//lembrando que true e false tbm sao booleans, sempre!
//funciona pra texto, numero, variavel, qualquer coisa!
// PREFERENCIA, SE FOR USAR BOOLEAN, CRIAR VARIAVEL EM INGLES COM is NA FRENTE = isAdmin
/*
const valor = 10
const verificar = valor === 40

console.log("40 é igual a 10?", verificar, typeof verificar)

const letra = "oi"
const sera = letra === "tchau"

console.log("oi é igual a tchau?", sera, typeof sera)

const diferença = 30
const difeVer = diferença !== 20

console.log("30 é diferente de 20?", difeVer, typeof difeVer)

const maior = 10
const maiorVer = maior > 3

console.log("10 é maior que 3?", maiorVer, typeof maiorVer)
*/

// ---------------------------------------------

// if, else e else if sempre trabalha verificando se é true ou false, ou seja, usa o principio do boolean!
// if so é lido quando o resultado dos () for true, o else só é executado se o if não for lido, else if tenta ser executado se o if não rodar, mas so vai ser executado se o resultado do () for true!
/*
const isAdmin = true //boolean

console.log("checando acesso...")

if(isAdmin === true){   // statement = declaração no javascript
    console.log("acesso liberado")
}else{
    console.log("negado")
}
*/
//lembrando que, independente de quantos ifs e else ifs tenha, se o if for true, nenhum else if sera executado, se um else if for executado, o outro n será!
//tentar usar if, else e else if ao maximo se a condição for dependente ou conectada, para assim, evitar se perder

// ------------------------------------

//condiçoes que é bom usar:

// && (and): ambas informações precisam ser verdadeiras para ele executar algo
//|| (or): uma das duas informações precisa ser verdadeira para ele executar algo
//lembrando que posso ate usar eles direto, tipo: true && true ou true || false
//exemplo:
/*
const oi = 1
const tchau = 5
const bye = 10

if(oi < tchau && bye > oi){
    console.log(66, `${oi} é menor que ${tchau} e ${bye} é maior que ${oi}`)
}

if(oi > bye || tchau > oi){
    console.log(70, `algum dos numeros é maior que o outro`)
}

exercicios de fixação:

1=
const a = +prompt("digite o primeiro valor: ")
const b = +prompt("digite o segundo valor: ")

if(a > b){
    console.log(`o primeiro valor é maior! primeiro valor: ${a}`)
}else if(a === b){
    console.log(`os valores são iguais! primeiro valor: ${a}, segundo valor: ${b}`)
}else if(b > a){
    console.log(`o segundo valor é maior! segundo valor: ${b}`)
}else{
    console.log("erro")
}

2=
const nota1 = parseFloat(prompt("nota um: "))
const nota2 = parseFloat(prompt("nota dois: "))
const nota3 = parseFloat(prompt("nota três: "))
const nota4 = parseFloat(prompt("nota quatro: "))
const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)

if(media >= 7){
    console.log("Aprovado")
}else if(media >= 5 && media < 7){
    console.log("Em recuperação")
}else if(media < 5){
    console.log("Reprovado")
}else{
    console.log("erro")
}

3=
const num = +prompt("digite o numero: ")

if(num % 2 === 0){
    console.log(`o numero ${num} é par`)
}else{
    console.log(`o numero ${num} é impar`)
}

4=
const intA = +prompt("digite um numero inteiro: ")
const intB = +prompt("digite um segundo numero inteiro: ")

if(intA % intB === 0){
    console.log(`o numero ${intA} é multiplo do numero ${intB}`)
}else if(intB % intA === 0){
    console.log(`o numero ${intB} é multiplo do numero ${intA}`)
}else{
    console.log(`os numeros ${intA} e ${intB} não são multiplos entre sí!`)
}

5=
const aa = +prompt("digite uma medida: ")
const bb = +prompt("digite uma segunda medida: ")
const cc = +prompt("digite uma terceira medida: ")
let A = 0
let B = 0
let C = 0

if(aa > bb && aa > cc){
    A = aa
    if(bb > cc){
        B = bb
        C = cc
    }else{
        B = cc
        C = bb
    }
}else if(bb > aa && bb > cc){
    A = bb
    if(aa > cc){
        B = aa
        C = cc
    }else{
        B = cc
        C = aa
    }
}else{
    A = cc
    if(bb > aa){
        B = bb
        C = aa
    }else{
        B = aa
        C = bb
    }
}

if(A >= B + C){
    console.log("NAO FORMA TRIANGULO")
}else if((A*A) === (B*B) + (C*C)){
    console.log("TRIANGULO RETANGULO")
}else if((A*A) > (B*B) + (C*C)){
    console.log("TRIANGULO OBTUSANGULO")
}else if((A*A) < (B*B) + (C*C)){
    console.log("TRIANGULO ACUTANGULO")
}else if(A === B === C){
    console.log("TRIANGULO EQUILATERO")
}else if(A != B === C || A === B != C || B === A != C){
    console.log("TRIANGULO ISOSCELES")
}

*/