const readline = require('readline-sync');
const calcularIMC = require('./imc');
const verificaSituacao = require('./situacao');

const peso = readline.questionFloat('Qual é o seu peso?\n');
const altura = readline.questionFloat('Qual é a sua altura?\n');
const imc = calcularIMC(peso, altura);

function main() {
  return console.log(`O seu IMC é ${imc.toFixed(2)} e a sua categoria é: ${verificaSituacao(imc)}`)
};

main();