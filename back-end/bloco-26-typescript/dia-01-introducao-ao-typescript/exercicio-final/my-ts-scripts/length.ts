// Exercício 1 : Crie um script para converter unidades de medida de comprimento:
// Esse script deverá se chamar length.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

import readLine from "readline-sync";

enum MedidasComprimento {
  'km' = 0,
  'hm' = 1,
  'dam' = 2,
  'm' = 3,
  'dm' = 4,
  'cm' = 5,
  'mm' = 6,
}


export function convert(valor: number, fromUnity: MedidasComprimento, toUnity: MedidasComprimento): string {
  let exponent: number = toUnity - fromUnity;
  return `${valor* Math.pow(10, exponent)}${MedidasComprimento[toUnity]}`
}

function exec() {
  const measures:string[] = Object.keys(MedidasComprimento).filter(key => Number.isNaN(Number(key)));
  const value: number = readLine.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnity = readLine.keyInSelect(measures, "Escolha um número para a unidade base");
  const toUnity = readLine.keyInSelect(measures, "Escolha um número para a conversão");
  const result = convert(value, fromUnity, toUnity);
  console.log(`${value}${MedidasComprimento[fromUnity]} é igual a ${result}.`)
}

// console.log(readLine);
exec();
