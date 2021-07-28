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

