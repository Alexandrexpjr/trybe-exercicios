// Crie um type para um objeto que represente um pássaro.

type Bird = {
  species: string,
  size: string,
  color: string,
  extinctionRisk: boolean,
}

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.

type Sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço.

type Address = {
  country: string,
  city: string,
  street: string,
  number: number,
  postCode: string,
}