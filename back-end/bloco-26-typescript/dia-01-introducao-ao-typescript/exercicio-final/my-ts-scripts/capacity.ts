// Exercício 3 : Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

import readLine from "readline-sync";

enum MedidasCapacidade {
  'kl' = 0,
  'hl' = 1,
  'dal' = 2,
  'l' = 3,
  'dl' = 4,
  'cl' = 5,
  'ml' = 6,
}


export function convert(valor: number, fromUnity: MedidasCapacidade, toUnity: MedidasCapacidade): string {
  let exponent: number = toUnity - fromUnity;
  return `${valor* Math.pow(10, exponent)}${MedidasCapacidade[toUnity]}`
}

function exec() {
  const measures:string[] = Object.keys(MedidasCapacidade).filter(key => Number.isNaN(Number(key)));
  const value: number = readLine.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnity = readLine.keyInSelect(measures, "Escolha um número para a unidade base");
  const toUnity = readLine.keyInSelect(measures, "Escolha um número para a conversão");
  const result = convert(value, fromUnity, toUnity);
  console.log(`${value}${MedidasCapacidade[fromUnity]} é igual a ${result}.`)
}

// console.log(readLine);
exec();
