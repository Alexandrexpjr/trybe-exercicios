// Exercício 4 : Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

enum MedidasArea {
  "Quilometro quadrado" = 'km²',
  "Hectometro quadrado" = 'hm²',
  "Decametro quadrado" = 'dam²',
  "Metro quadrado" = 'm²',
  "Decimetro quadrado" = 'dm²',
  "Centimetro quadrado" = 'cm²',
  "Milimetro quadrado" = 'mm²',
}

export function convert(valor: number, fromUnity: MedidasArea, toUnity: MedidasArea): string {
  const medidas: string[] = Object.values(MedidasArea);
  let exponent: number = (medidas.indexOf(toUnity) - medidas.indexOf(fromUnity)) * 2;
  return `${valor* Math.pow(10, exponent)}${toUnity}`
}

console.log(convert(33, MedidasArea['Metro quadrado'], MedidasArea['Centimetro quadrado']));