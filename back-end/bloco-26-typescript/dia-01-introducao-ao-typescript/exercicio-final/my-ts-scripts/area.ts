// Exercício 4 : Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

import readLine from "readline-sync";

enum MedidasArea {
  'km²' = 0,
  'hm²' = 1,
  'dam²' = 2,
  'm²' = 3,
  'dm²' = 4,
  'cm²' = 5,
  'mm²' = 6,
}


export function convert(valor: number, fromUnity: MedidasArea, toUnity: MedidasArea): string {
  let exponent: number = (toUnity - fromUnity) * 2;
  return `${valor* Math.pow(10, exponent)}${MedidasArea[toUnity]}`
}

function exec() {
  const measures:string[] = Object.keys(MedidasArea).filter(key => Number.isNaN(Number(key)));
  const value: number = readLine.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnity = readLine.keyInSelect(measures, "Escolha um número para a unidade base");
  const toUnity = readLine.keyInSelect(measures, "Escolha um número para a conversão");
  const result = convert(value, fromUnity, toUnity);
  console.log(`${value}${MedidasArea[fromUnity]} é igual a ${result}.`)
}

// console.log(readLine);
exec();
