const prompt = require("prompt-sync")();

/* 1=

const salario = parseFloat(prompt("salario atual: "))

const reajUm = (20 / 100) * salario
const reajDois = (15 / 100) * salario
const reajTres = (10 / 100) * salario
const reajQuatro = (5 / 100) * salario

let reajSala
let percentual
let novoSalario

if(salario <= 280){
    novoSalario = reajUm + salario
    percentual = "20%"
    reajSala = reajUm
}else if(salario > 280 && salario <= 700){
    novoSalario = reajDois + salario
    percentual = "15%"
    reajSala = reajDois
}else if(salario > 700 && salario <= 1500){
    novoSalario = reajTres + salario
    percentual = "10%"
    reajSala = reajTres
}else if(salario > 1500){
    novoSalario = reajQuatro + salario
    percentual = "5%"
    reajSala = reajQuatro
}

console.log(`o valor antes do reajuste era de ${(salario).toFixed(2)}, o percentual de aumento foi de ${percentual}, ou seja, o salario teve acrescimo de R$${(reajSala).toFixed(2)}. Seu novo salario depois do reajuste é de R$${(novoSalario).toFixed(2)}`)

2=

const aleatorio = Math.floor(11* Math.random());

console.log("\n\ncomputador pensou em um numero, tente adivinhar!\n")
const ver = +prompt("qual numero entre 0 e 10 o computador pensou? ")

if(ver === aleatorio){
    console.log("\n\nparabens, adivinhou o numero!")
}else{
    console.log("\n\nnão foi dessa vez! não conseguiu adivinhar o numero")
}

3=
*/
let valor = parseFloat(prompt("digite o valor a ser sacado, entre R$10.00 e R$600.00: "))
let repre = valor
let cem = 0
let cinque = 0
let dez = 0
let cinco = 0
let um = 0

if(valor >= 10 && valor <= 600){
    cem = parseInt(valor / 100)
    valor = valor % 100
    
    cinque = parseInt(valor / 50)
    valor = valor % 50

    dez = parseInt(valor / 10)
    valor = valor % 10

    cinco = parseInt(valor / 5)
    valor = valor % 5

    um = parseInt(valor / 1)
    valor = valor % 1
}else{
    console.log("valor invalido")
}

if(repre >= 100 && repre <= 600){
    console.log(`Para sacar a quantia de ${repre} reais, o caixa fornecerá ${cem} nota(s) de 100, ${cinque} nota(s) de 50, ${dez} nota(s) de 10, ${cinco} nota(s) de 5 e ${um} nota(s) de 1. `)
}