// Exercício 1 : Crie um script para converter unidades de medida de comprimento:
// Esse script deverá se chamar length.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

enum MedidasComprimento {
  Quilometro = 'km',
  Hectometro = 'hm',
  Decametro = 'dam',
  Metro = 'm',
  Decimetro = 'dm',
  Centimetro = 'cm',
  Milimetro = 'mm',
}

export function convert(valor: number, fromUnity: MedidasComprimento, toUnity: MedidasComprimento): string {
  const medidas: string[] = Object.values(MedidasComprimento);
  let exponent: number = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
  return `${valor* Math.pow(10, exponent)}${toUnity}`
}

console.log(convert(33, MedidasComprimento['Metro'], MedidasComprimento['Centimetro']));