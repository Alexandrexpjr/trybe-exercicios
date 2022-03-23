// Exercício 5 : Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

enum MedidasVolume {
  "Quilometro cúbico" = 'km³',
  "Hectometro cúbico" = 'hm³',
  "Decametro cúbico" = 'dam³',
  "Metro cúbico" = 'm³',
  "Decimetro cúbico" = 'dm³',
  "Centimetro cúbico" = 'cm³',
  "Milimetro cúbico" = 'mm³',
}

export function convert(valor: number, fromUnity: MedidasVolume, toUnity: MedidasVolume): string {
  const medidas: string[] = Object.values(MedidasVolume);
  let exponent: number = (medidas.indexOf(toUnity) - medidas.indexOf(fromUnity)) * 3;
  return `${valor* Math.pow(10, exponent)}${toUnity}`
}

console.log(convert(33, MedidasVolume['Metro cúbico'], MedidasVolume['Centimetro cúbico']));