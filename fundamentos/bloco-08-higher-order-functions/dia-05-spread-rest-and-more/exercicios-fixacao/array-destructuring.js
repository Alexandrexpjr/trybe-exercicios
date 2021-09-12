const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ saudacao, funcao ] = saudacoes;

funcao(saudacao); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const allContent = [comida, animal, bebida];
[animal, bebida, comida] = allContent;

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// const pares = numerosPares.reduce((acc, number) => (number % 2 === 0) ? `${acc},${number}` : acc, 0).split(',').slice(1);

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo