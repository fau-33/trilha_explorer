/**
 Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 */

let numberOne = Number(prompt("Digite o primeiro número? "));
let numberTwo = Number(prompt("Digite o segundo numero? "));

let sum = numberOne + numberTwo;
alert("A soma dos dois números: " + sum);

if(sum  % 2 === 0) {
    alert("É um número par!")
} else {
    alert("É um numero ímpar!");
}

let subtraction = numberOne - numberTwo;
alert(`A subtração dos dois numeros: ${subtraction}`);

let multiplication = numberOne * numberTwo;
alert(`A multiplicação dos dois números; ${multiplication}`);

let division = numberOne / numberTwo;
alert(`A divisão dos dois números; ${division}`);

let restOfDivision = numberOne % numberTwo;
alert(`O resto da divisão dos dois números; ${restOfDivision}`);

if(numberOne === numberTwo) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes");
}