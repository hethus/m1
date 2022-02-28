const prompt = require("prompt-sync")();
// sempre tentar usar o maximo de const possivel ao inves do let, para deixar o codigo melhor!
// control ponto = faz aparecer opções de formatação, ate o do templade (console.log interpolado) (lembrando q concatenação é os "")
/*
`` sempre respeita a formatação q tu colocar ali, se escrever na outra linha ele salva assim
Math.ceil = vai arredondar pra cima

const idade = +prompt("qual a sua idade? "); // se colocar o + atras do prompt ele reconhece como numero o resultado, mas letra ele apresenta erro

console.log(idade, typeof idade);
1=
const a = +prompt("nota 1: ");
const b = +prompt("nota 2: ");
const nota = (((a * 4) + (b * 6)) / 10).toFixed(1);

console.log(`\nA media final é ${nota}`);

2=
const nomePeca1 = prompt("qual o nome da peça que ira querer? ");
const valorPeca1 = +prompt("valor da peça: ");
const numeroPeca1 = +prompt("quantidade dela: ");
const nomePeca2 = prompt("qual o nome da segunda peça? ");
const valorPeca2 = +prompt("valor da segunda peça: ");
const numeroPeca2 = +prompt("quantidade dela: ");
const resultado = ((numeroPeca1 * valorPeca1) + (numeroPeca2 * valorPeca2)).toFixed(2);

console.log(`valor a ser pago da peça ${nomePeca1} e da peça ${nomePeca2} é R$${resultado} reais`);

3=
const ano = +prompt("anos de vida: ");
const mes = +prompt("meses de vida: ");
const dia = +prompt("dias de vida: ");
const diasDeVida = ((ano * 12) * 30) + (mes * 30) + dia;

console.log(`viveu ${diasDeVida} dias ao total`);

4=
const tempoDeVida = +prompt("quantos dias de vida? ");
const ano = tempoDeVida % 365;
const mes = (tempoDeVida % 365) / 30;
const dia = (tempoDeVida % 365) % 30; //pelo q entendi é o completo contrario mesmo, ent ele ja contaria como o exercicio 3

console.log(`resultado: ${ano} anos, ${mes} meses, ${dia} dias`);

.toLowerCase() = coloca toda string em letra minuscula
.toUpperCase() = coloca toda string em letra maiuscula
.replace(' ', ''); = troca a primeira informação pela segunda, mas so uma vez, ou seja, 'a b c' vira 'ab c'
.replace(/ /g, ''); = igual, mas troca todas as vezes, ou seja, 'a b c' vira 'abc'
.trim() = remove os espaços em branco do começo e do final da string
.indexOf('') = retorna qual a posição de algum valor, pode se colocar assim: ('a', 3) ent ele vai começar a olhar a partir da quarta posição
.slice() = corta a string e coloca em outra string, tendo duas posiçoes no (), a primeira é onde ele começa a pegar e a ultima é onde ele 
    termina de pegar, ou seja, a nova string sera o valor entre as duas posiçoes, se o numero do final for negativo, ele começa a verificar do final
    exemplo: "giovanne" no .slice(2,-4) ficaria: "ov"
.split() = divide a string em um array, a partir de uma informação, se estiver assim (' '), a cada espaço a string gerara uma nova informação no array

exer complementar:
const vida = +prompt("digite a vida do monstro (10 a 50): ")
const atk = +prompt("digite o dano(5 a 10): ")
const turno = Math.ceil(vida / atk)
console.log(`o jogador irá derrotar o monstro em ${turno} turnos`)
*/
