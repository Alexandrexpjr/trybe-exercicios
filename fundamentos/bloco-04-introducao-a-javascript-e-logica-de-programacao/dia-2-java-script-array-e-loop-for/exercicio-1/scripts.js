// Testes da aula:
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da trybe');
// tasksList.unshift('Escovar os dentes');

// console.log(tasksList);

// tasksList.pop();
// tasksList.shift();

// console.log(tasksList);

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask); 

//Exercício 1);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3);

menu.push('Contato');
console.log(menu);

//baby steps: primeiro ex:
//1- adiciona o array menu;
//2- adiciona váriavel que seleciona a posição no array;
//3- imprime conteúdo da posição selecionada ;

//segundo ex:
//1- adiciona variável que diz a posição de dado conteúdo do array;
//2- imprime a posição procurada;

//terceiro ex:
//1- adiciona uma nova string ao array menu;
//2- imprime todo o array com a nova string;