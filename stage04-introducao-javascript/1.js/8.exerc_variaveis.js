// 1. Declare uma variável de nome weight?
    //let weight = 70;

// 2. Que tipo de dado é a variável acima?
    //console.log(typeof weight);

/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean 
 * 
*/

   /* let name = "Flávio";
   let age =  40;
   let stars = 5.5;
   let isSubscribed =  true; */


/**
 * 4. A variável student abaixo é de que tipo de dados?
 * 4.1 Atribua a ela as mesmas propriedades e valores
 * do exercício 3
 * 4.2 Mostre no console a seguinte mensagem:
 * <name> de idade <age> pesa <weight>kg
 * Atençao, substitua <name> <age> e <weight> pelos
 * valores de cade propriedade do objeto. 
 */

let student = {
    name:"Flávio",
    age:  40,
    stars: 5.5,
    isSubscribed:  true,
    weight: 70,  
};

//console.log("Seu nome é " + student.name  + " e tenho " +  student.age + " anos de idade" + " e " + student.weight + "kg");

/**
 * 5 Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.  
 */

let students = [];

/**
 * 6 Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.  
 */

students = [
    student,
];

console.log(students);

/**
 * 7 Coloque no console o valor da posição zero do Array acima
 */

//console.log(students[0]);

/**
 * 8 Crie um novo student e coloque na posição 1 do array studentes
 */

const suarez = {
    name: "Suarez",
    age: 36,
    weight: 74.8,
    isSubscribed: true,
};

students[1] = suarez;
console.log(students);