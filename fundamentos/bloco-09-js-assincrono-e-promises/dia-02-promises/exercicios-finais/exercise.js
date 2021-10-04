// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = [];
    for (let index = 0; index < 10; index += 1) {
      numbers.push(Math.floor(Math.random() * 51) ** 2);
    }
    const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
    (sumNumbers < 8000) ? resolve(sumNumbers) : reject();
  })
  promise
    .then(response => {
      const arr = [];
      arr.push(response / 2, response / 3, response / 5, response / 10);
      return arr;
    })
    .then(response => console.log(response.reduce((acc, curr) => acc + curr, 0)))
    .catch(response => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));;
}

fetchPromise();
// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.