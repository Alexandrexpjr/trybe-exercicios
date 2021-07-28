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

