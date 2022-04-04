// Exercício 2 : Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

import readLine from "readline-sync";

enum MedidasMassa {
  'kg' = 0,
  'hg' = 1,
  'dag' = 2,
  'g' = 3,
  'dg' = 4,
  'cg' = 5,
  'mg' = 6,
}


export function convert(valor: number, fromUnity: MedidasMassa, toUnity: MedidasMassa): string {
  let exponent: number = toUnity - fromUnity;
  return `${valor* Math.pow(10, exponent)}${MedidasMassa[toUnity]}`
}

function exec() {
  const measures:string[] = Object.keys(MedidasMassa).filter(key => Number.isNaN(Number(key)));
  const value: number = readLine.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnity = readLine.keyInSelect(measures, "Escolha um número para a unidade base");
  const toUnity = readLine.keyInSelect(measures, "Escolha um número para a conversão");
  const result = convert(value, fromUnity, toUnity);
  console.log(`${value}${MedidasMassa[fromUnity]} é igual a ${result}.`)
}

// console.log(readLine);
exec();
