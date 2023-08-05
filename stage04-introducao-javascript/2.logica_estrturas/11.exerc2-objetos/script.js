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
};

function verifyApproval (average) {
    if (average >= 7) {
        return "aprovado";
    } else {
        return "reprovado";
    }
};

for (const student of students) {
    const average = calculateAverage(student.gradeFirst, student.gradeSecond);
    const situation = verifyApproval(average);

    if (situation === "Aprovado") {
        const message = `A média do(a) aluno(a) ${student.name} é ${average.toFixed(2)}.\n Parabéns, ${student.name}! Você foi ${situation} no concurso.`;
        alert(message);
    } else {
        const message = `A média do(a) aluno(a) ${student.name} é ${average.toFixed(2)}.\n Não foi dessa vez, ${student.name}. Tente novamente!`;
        alert(message);
    }
}