/**
 Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
 */

const students = [
    {
        name: "Flávio",
        gradeFirst: 9,
        gradeSecond: 7,
    },
    {
        name: "Jennifer",
        gradeFirst: 4,
        gradeSecond: 6,
    },
    {
        name: "Joana",
        gradeFirst: 7,
        gradeSecond: 8,
    },
];

function calculateAverage (gradeFirst, gradeSecond) {
    const gradeAverage = (gradeFirst + gradeSecond) / 2;
    return gradeAverage;
}

alert(calculateAverage());