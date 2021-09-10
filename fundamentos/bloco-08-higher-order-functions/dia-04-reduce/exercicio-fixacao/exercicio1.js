// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Reduce e filter

const isEven = numbers.filter((number) => (number % 2 === 0));

const sumEven = isEven.reduce((acc, number) => acc + number);
console.log(sumEven);

// Outro modo de escrever

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumEven2 = numbers.filter(getEven).reduce(sumPair, 0);
console.log(sumEven2)

// Apenas reduce, uma linha

const getAndSumEven = numbers.reduce((currentValue, number) => (number % 2 === 0) ? currentValue + number : currentValue)
console.log(getAndSumEven);

// Apenas reduce, duas linhas

const sumIfEven = (currentValue, number) => (number % 2 === 0) ? currentValue + number : currentValue;

const getSum = numbers.reduce(sumIfEven, 0);
console.log(getSum);