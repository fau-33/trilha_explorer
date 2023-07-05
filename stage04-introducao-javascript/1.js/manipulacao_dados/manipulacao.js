// Transforme letras mínusculas em maiúscula. Faça o contrário também:

//let word = "Programar é muito bacana!";
//console.log(word.toLowerCase());

// Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

//let phrase = 'Eu quero viver o amor';
//let myArray = phrase.split(" ");
//let phraseWithUndescore = myArray.join("_");
//console.log(phraseWithUndescore.toLowerCase());

// Verficar se o texto tem a palavra amor
let phrase = 'Eu quero viver o amor!';
//console.log(phrase.includes("amor"));

// Criar um array com construtor
//let myArray = new Array('a', 'b', 'c');
//console.log(myArray);

// Contar elementos em um array
//console.log(["a", "b", "c"].length);

// Transformar cadeia de caracteres em elementos de um array
let word = 'manipulação';
//console.log(Array.from(word));

let techs = ["html", "css", "js"];

//adicionar um item ao final do array
techs.push("nodeJs");
//adicionar no começo
techs.unshift("sql");
//remover do fim
//techs.pop();
//remover do começo
//techs.shift();
//pegar somentes alguns elementos do array
//console.log(techs.slice(1, 3));
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2);
//encontrar uma posição do array
  let index = techs.indexOf('css');
  techs.splice(index, 1);  
console.log(techs);