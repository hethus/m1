const prompt = require("prompt-sync")();

/*while:

let numero = 0

while (true) {
    numero = numero + 1; // posso colocar: numero += 1 (ou seja, util para simplificar desde que seja a mesma variavel) ou numero++ (desde que seja de um em um e a mesma variavel)
    console.log(numero);
}

---

let numero = 0

while (numero < 10) {
    numero = numero++;
    console.log(numero);
}

---

const tabuada = +prompt("tabuada de qual numero? ")
let numero = 0

while (numero < 10) {
    numero++
    const resul = tabuada * numero
    console.log(`o resultado de ${numero} x ${tabuada} é ${resul}`)

---

let senha = ""

while (senha !== "senha_forte") {
    senha = prompt("digite uma senha: ")
    if (senha !== "senha_forte") {
        console.log("senha fraca")
    }
}

console.log(`a senha digita é valida! ${senha}`)}

-----

// do while: vai executar a condição pelo menos uma vez antes de verificar a condição, lembrando q declarar o let dentro dele fara a variavel n ser reconhecida quando for verificada no final do "do while", pq a verificação é FORA DO ESCOPO LOCAL DO "DO WHILE"!!!

senha = ""

do {
    
    senha = prompt("digite uma senha: ")

    if (senha !== "senha_forte") {
        console.log("senha fraca!")
    }
} while (senha !== "senha_forte");

---------

//IMPORTANTE: comando break para o codigo independente do que estiver a sua frente! utilizado principalmente no while(true):

let numero = 0

while (true) {
    numero++
    console.log(numero)

    if (numero >= 10) {
        break
    }
}

---- meu exemplo:

let numero = 0
let numero2 = 0
let condi = ""

while (true) {

    numero = +prompt("digite um numero: ")
    numero2 = +prompt("digite o segundo numero: ")

    console.log(numero + numero2)

    condi = prompt("continuar? (s/n): ")
    console.log(condi)

    if (condi === "n") {
        break
    }
}

---- mesmo programa do while, so que agora tira a condição duplicada do while e so deixa a condição no if!

let senha = ""

while (true) {
    senha = prompt("digite uma senha: ")
    if (senha === "senha_forte") {
        break
    }

    console.log("senha fraca")
}

---- continue: ele faz o progama não ler as linhas de baixo, encerrando a repetição atual!

numero = 0

while (numero < 5) {
    numero++

    if (numero === 3) {
        continue
    }
    console.log(numero)
}

-------- label: usado para nomear um laço(loop), serve para n se perder e para criar interações, igual essa:

let num1 = 0;
let num2 = 0;

loopExterno: while (num1 <= 3) {
    console.log("Laço externo:", num1);

    num1++;

    loopInterno: while (num2 <= 5) {
        if (num2 === 3) {
            break loopExterno;
        }

        console.log("Laço interno:", num2);
 
        num2++;
    }
}

Aqui o codigo começa entrando no while loopexterno ate completar 3, aparece no console, adiciona mais um no num1, SO QUE, antes de terminar
o que era pedido no loopexterno, ele entra no while loopinterno, onde ele vai ficar preso ate completar 5, mas quando ele chega a 3
o comando break é rodado no loopexterno, matando o while externo e como o loopinterno faz parte do externo, os dois sao finalizados
finalizando assim o programa

------------isNaN:

let num = 0

do {
    num = +prompt("digite um numero: ")

}while (isNaN(num) || typeof num !== "number" || num == '') // MUITO IMPORTANTE, posso usar o typeof para verificar informação, aqui se a variavel for diferente de number ele repete o while, tem a condição de ser diferente de nan com a função isnan e tbm tem a função de não ser '' ou seja, n ser um numero vazio!
// no caso o isnan ja faz o trabalho do typeof, ja que o texto sempre retorna nan, mas deixarei marcado para n esquecer que é possivel fazer isso
console.log(num + 2)

------------exercicios:

1-

const usua = prompt("digite o nome de usuario: ")
let senha = ''

do {
    senha = prompt(`digite a senha ${usua}: `)
    
    if (senha === usua) {
        console.log("\nsenha igual o nome de usuario! erro!!\n")
    }else if (senha === '') {
        console.log("\nsenha invalida!!!\n")
    }

} while (senha === usua || senha === '');

2-

let nome = ''
let estado = ''
let idade = 0
let salario = 0


while (nome.length <= 3) {
    nome = prompt("digite um nome valido: ")
}
while (estado != 's' && estado !== 'd' && estado !== 'c' && estado !== 'v') {
    estado = prompt("digite um estado civil valido: ")
}
while (idade > 150 || idade <= 0) {
    idade = +prompt("digite uma idade valida: ")
}
while (salario <= 0) {
        salario = +prompt("digite um salario valido: ")
    }

console.log(`nome: ${nome}
idade: ${idade}
estado civil: ${estado}
salario: ${salario}`)

3-

let par = 0
let cal = 0

do {
    par = +prompt("digite um numero par: ")
    cal = par % 2
    
} while (cal != 0);

4-
*/
let pensar = 0
let usua = 0
let pontos = 0

do {
    if (pensar === 0) {
        pensar = Math.floor(Math.random() * 10) + 1
    }
    usua = +prompt("tente adivinhar o numero que o pc pensou: ")

    pontos++
    if (usua != pensar) {
        console.log("o numero digitado é diferente do numero que o pc pensou!")
        
        if (usua < pensar) {
            console.log("\no numero digitado é menor que o numero pensado!")
        }else if (usua > pensar) {
            console.log("\no numero digitado é maior que o numero pensado!")
        }
    }
    if (usua === pensar) {
        console.log(`parabens, você acertou o numero pensado pelo computador!, o numero pensado é: ${pensar}, você levou ${pontos} rodadas para acertar!`)
        break
    }
} while (true);