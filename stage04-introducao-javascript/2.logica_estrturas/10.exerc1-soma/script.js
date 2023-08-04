/**
 Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 */

let numberOne = Number(prompt("Digite o primeiro número? "));
let numberTwo = Number(prompt("Digite o segundo numero? "));

let sum = numberOne + numberTwo;
alert("A soma dos dois números: " + sum);

let subtraction = numberOne - numberTwo;
alert("A subtração dos dois numeros: " + subtraction);

let multiplication = numberOne * numberTwo;
alert("A multiplicação dos dois números; " + multiplication);

let division = numberOne / numberTwo;
alert("A divisão dos dois números; " + division);

let restOfDivision = numberOne % numberTwo;
alert("O resto da divisão dos dois números; " + restOfDivision);