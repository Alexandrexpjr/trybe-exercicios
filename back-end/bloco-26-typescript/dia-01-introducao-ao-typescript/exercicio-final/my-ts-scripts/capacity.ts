// Exercício 3 : Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

enum MedidasCapacidade {
  Quilolitro = 'kl',
  Hectolitro = 'hl',
  Decalitro = 'dal',
  Litro = 'l',
  Decilitro = 'dl',
  Centilitro = 'cl',
  Mililitro = 'ml',
}

export function convert(valor: number, fromUnity: MedidasCapacidade, toUnity: MedidasCapacidade): string {
  const medidas: string[] = Object.values(MedidasCapacidade);
  let exponent: number = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
  return `${valor* Math.pow(10, exponent)}${toUnity}`
}

console.log(convert(2, MedidasCapacidade['Litro'], MedidasCapacidade['Mililitro']));