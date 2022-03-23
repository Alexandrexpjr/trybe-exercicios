"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Crie uma nova função para calcular a área do losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) com a diagonal menor (d) dividido por dois. (D * d) / 2
function losangle(shortDiagonal, longDiagonal) {
    return shortDiagonal * longDiagonal / 2;
}
exports.losangle = losangle;
// Crie uma nova função para calcular a área do trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
function trapeze(shortBase, longBase, height) {
    return (shortBase + longBase) * height / 2;
}
exports.trapeze = trapeze;
// Crie uma nova função para calcular a área do círculo. A área do círculo de raio r é dada pelo produto do raio ao quadrado com o número irracional ℼ (em geral utilizamos o valor ℼ = 3,14). PI * r²
function circle(radius) {
    return (Math.PI * (radius ** 2));
}
exports.circle = circle;
