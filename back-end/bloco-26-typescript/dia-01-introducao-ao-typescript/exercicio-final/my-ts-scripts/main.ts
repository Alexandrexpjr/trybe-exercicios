// Exercício 11 : Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync , que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação ), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.

import Months from "./enums/months";
import Seasons from "./enums/Seasons";
import readline from 'readline-sync';

function main():void {
  const months = Object.values(Months);
  let seasons: string[] = [];
  const hemispheres = ['Norte', 'Sul'];
  const month = readline.keyInSelect(months, 'Escolha um mês do ano:\n');
  const hemisferio = readline.keyInSelect(hemispheres, 'Agora, escolha o hemisfério:\n');
  if (month <= 2 || month == 11) {
    if (hemisferio === 0) {
      seasons.push(Seasons.PRIMAVERA);
    } else {
      seasons.push(Seasons.OUTONO);
    }
  }
  if (month >= 2 && month <= 5) {
    if (hemisferio === 0) {
      seasons.push(Seasons.VERAO);
    } else {
      seasons.push(Seasons.INVERNO);
    }
  }
  if (month >= 5 && month <= 8) {
    if (hemisferio === 0) {
      seasons.push(Seasons.OUTONO);
    } else {
      seasons.push(Seasons.PRIMAVERA);
    }
  }
  if (month >= 8) {
    if (hemisferio === 0) {
      seasons.push(Seasons.INVERNO);
    } else {
      seasons.push(Seasons.VERAO);
    }
  }
  console.log(`Estações: ${ seasons }`);
}

main();