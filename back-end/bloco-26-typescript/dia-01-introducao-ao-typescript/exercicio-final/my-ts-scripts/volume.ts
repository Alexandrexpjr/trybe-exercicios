// Exercício 5 : Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

import readLine from "readline-sync";

enum MedidasVolume {
  'km³' = 0,
  'hm³' = 1,
  'dam³' = 2,
  'm³' = 3,
  'dm³' = 4,
  'cm³' = 5,
  'mm³' = 6,
}


export function convert(valor: number, fromUnity: MedidasVolume, toUnity: MedidasVolume): string {
  let exponent: number = (toUnity - fromUnity) * 3;
  return `${valor* Math.pow(10, exponent)}${MedidasVolume[toUnity]}`
}

function exec() {
  const measures:string[] = Object.keys(MedidasVolume).filter(key => Number.isNaN(Number(key)));
  const value: number = readLine.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnity = readLine.keyInSelect(measures, "Escolha um número para a unidade base");
  const toUnity = readLine.keyInSelect(measures, "Escolha um número para a conversão");
  const result = convert(value, fromUnity, toUnity);
  console.log(`${value}${MedidasVolume[fromUnity]} é igual a ${result}.`)
}

// console.log(readLine);
exec();
