// 1) Aritimética básica;

let elementA = 20;
let elementB = 7;

console.log("Resultados do Primeiro Exercício:");
console.log(elementA + elementB);
console.log(elementA - elementB);
console.log(elementA * elementB);
console.log(elementA / elementB);
console.log(elementA % elementB);

// 2) Maior de dois números;

let firstNumber = 12;
let secondNumber = 11;

console.log("Resultados do Segundo Exercício:");
if (firstNumber > secondNumber) {
    console.log("O primeiro número é maior");
} else if (firstNumber < secondNumber) {
    console.log("O segundo número é maior");
} else {
    console.log("os elementos são iguais");
}

// 3) Maior de três números;

let numberOne = 12;
let numberTwo = 10;
let numberThree = 80;

console.log("Resultados do Terceiro Exercício:");
if (numberOne > numberTwo && numberOne > numberThree) {
    console.log("O primeiro número é maior");
} else if (numberOne < numberTwo && numberThree < numberTwo) {
    console.log("O segundo número é maior");
} else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log("O terceiro número é o maior")
} else {
    console.log("Dois ou mais elementos são iguais");
}

// 4) Positivo, negativo ou nulo;

let number = -1;

console.log("Resultados do Quarto Exercício:");
if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// 5) Ângulos internos do triângulo;

let angleA = 79;
let angleB = 60;
let angleC = 41;
let sum = angleA + angleB + angleC;

console.log("Resultados do Quinto Exercício:");
if (angleA <=0 || angleB <=0 || angleC <=0) {
    console.log("Ângulo inválido");
} else if (sum == 180) {
    console.log("true");
} else {
    console.log("false");
}

// 6) Peças de xadrez e seus movimentos;

let piece = 'kniGHT';
let pieceLower = piece.toLowerCase()

console.log("Resultados do Sexto Exercício:");

switch (pieceLower) {
    case 'pawn':
        console.log("Moves only forward, one square at time, excepts for its first move, which moves two squares. Eat diagonally.");
        break;
    case 'knight':
        console.log("Moves in L-shape, two squares for any direction, then one perpendicular square . Can move over pieces");
        break;
    case 'bishop':
        console.log("Moves diagonally, through any number of unoccupied squares.");
        break;
    case 'rook':
        console.log("Moves vertically or horizontally, through any number of unoccupied squares");
        break;
    case 'queen':
        console.log("Moves either diagonally,vertically or horizontally, through any number of unoccupied squares.");
        break;
    case 'king':
        console.log("Moves one square for any direction, except in castling")
        break;
    default:
        console.log("error: invalid piece")        
}

// 7) Conversão de nota;

let porcentagem = 30;

console.log("Resultados do Sétimo Exercício:");

if (porcentagem >= 90 && porcentagem < 100) {
    console.log("A");
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B");
} else if (porcentagem >= 70 && porcentagem < 80){
    console.log("C");
} else if (porcentagem >= 60 && porcentagem < 70){
    console.log("D");   
} else if (porcentagem >= 50 && porcentagem < 60){
    console.log("E");
} else if (porcentagem >= 0 && porcentagem < 50){
    console.log("F");
} else {
    console.log("nota inválida");
}
    
// 8) 3 variáveis, uma par;

let firstEntry = 1;
let secondEntry = 1;
let thirdEntry = -4;

let firstEntryModule = firstEntry % 2;
let secondEntryModule = secondEntry % 2;
let thirdEntryModule = thirdEntry % 2;

console.log("Resultados do Oitavo Exercício:");

if (firstEntryModule == 0 || secondEntryModule == 0 || thirdEntryModule == 0) {
    console.log("true");
} else {
    console.log("false")
}

// 9) 3 variáveis, uma ímpar; 

let entry1 = -201;
let entry2 = 100;
let entry3 = -2;

let entry1Module = entry1 % 2;
let entry2Module = entry2 % 2;
let entry3Module = entry3 % 2;

console.log("Resultados do Nono Exercício:");

if (entry1Module !== 0 || entry2Module !== 0 || entry3Module !== 0) {
    console.log("true");
} else {
    console.log("false")
}

// 10) Lucro ao vender mil produtos;