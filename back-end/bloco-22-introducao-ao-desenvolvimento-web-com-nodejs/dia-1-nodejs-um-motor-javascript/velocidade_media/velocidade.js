const readline = require('readline-sync');

const velocidade = (distancia, tempo) => {
  return distancia / tempo
}

const distancia = readline.questionInt('Qual foi a distância percorrida? \n');
const tempo = readline.questionInt('Em quanto tempo? \n');

console.log(`A velocidade média foi de ${velocidade(distancia, tempo)} m/s!`);
