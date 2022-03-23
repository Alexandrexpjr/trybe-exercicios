// Exercício 2 : Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

enum MedidasMassa {
  Quilograma = 'kg',
  Hectograma = 'hg',
  Decagrama = 'dag',
  Grama = 'g',
  Decigrama = 'dg',
  Centigrama = 'cg',
  Miligrama = 'mg',
}

export function convert(valor: number, fromUnity: MedidasMassa, toUnity: MedidasMassa): string {
  const medidas: string[] = Object.values(MedidasMassa);
  let exponent: number = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
  return `${valor* Math.pow(10, exponent)}${toUnity}`
}

console.log(convert(111, MedidasMassa['Grama'], MedidasMassa['Decigrama']));