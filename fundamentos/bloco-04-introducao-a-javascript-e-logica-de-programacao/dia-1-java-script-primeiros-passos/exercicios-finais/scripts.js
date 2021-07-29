// 1) Aritimética básica;

let elementA = 42;
let elementB = 13;

console.log("Resultados do Primeiro Exercício:");
console.log(elementA + elementB);
console.log(elementA - elementB);
console.log(elementA * elementB);
console.log(elementA / elementB);
console.log(elementA % elementB);

// 2) Maior de dois números;

let firstNumber = 42;
let secondNumber = 13;

console.log("Resultados do Segundo Exercício:");
if (firstNumber > secondNumber) {
    console.log("O primeiro número é maior");
} else if (firstNumber < secondNumber) {
    console.log("O segundo número é maior");
} else {
    console.log("os elementos são iguais");
}

// 3) Maior de três números;

let numberOne = 42;
let numberTwo = 13;
let numberThree = 86;

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

let number = -30;

console.log("Resultados do Quarto Exercício:");
if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// 5) Ângulos internos do triângulo;

let angleA = 60;
let angleB = 60;
let angleC = 60;
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

let piece = 'QuEEn';
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
        console.log("Moves either diagonally, vertically or horizontally, through any number of unoccupied squares.");
        break;
    case 'king':
        console.log("Moves one square for any direction, except in castling")
        break;
    default:
        console.log("error: invalid piece")        
}

// 7) Conversão de nota;

let porcentagem = 77;

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

let firstEntry = 22;
let secondEntry = 23;
let thirdEntry = -28;

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

let entry1 = 15;
let entry2 = 150;
let entry3 = 300;

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

let custo = 3000.00;
let venda = 3822.00;
let lucro = (venda - custo * 1.2) * 1000;

console.log("Resultados do Décimo Exercício:");
if(custo <0 || venda <0) {
    console.log("Valor(es) inválido(s)");
} else if (lucro >= 0) {
    console.log("O lucro foi de R$" + lucro + " reais!");
} else if (lucro < 0) {
    console.log("Sua empresa não deu lucro :(");
}

// 11) Cálculo do salário líquido;

let salarioBruto = 10000.00;
let salarioDeduzido = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
    salarioDeduzido = salarioBruto * 0.92 
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioDeduzido = salarioBruto * 0.91
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioDeduzido = salarioBruto * 0.89
} else if (salarioBruto > 5189.82) {
    salarioDeduzido = salarioBruto - 570.88 
}

if (salarioDeduzido <= 1903.98) {
    salarioLiquido = salarioDeduzido
} else if (salarioDeduzido >= 1903.99 && salarioDeduzido <= 2826.65) {
    salarioLiquido = salarioDeduzido * 0.925 + 142.80 
} else if (salarioDeduzido >= 2826.66 && salarioDeduzido <= 3751.05 ) {
    salarioLiquido = salarioDeduzido * 0.85 + 358.80
} else if (salarioDeduzido >= 3751.06 && salarioDeduzido <= 4664.68) {
    salarioLiquido = salarioDeduzido * 0.775 + 636.13
} else {
    salarioLiquido = salarioDeduzido * 0.725 + 869.36
}
console.log("Resultados do Décimo Primeiro Exercício:");
console.log("R$" + salarioLiquido)