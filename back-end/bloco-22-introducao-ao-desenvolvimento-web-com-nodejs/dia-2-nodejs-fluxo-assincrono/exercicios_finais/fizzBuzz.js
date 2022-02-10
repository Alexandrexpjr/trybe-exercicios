function fizzBuzz(int) {
  return new Promise((resolve, reject) => {
    if (int % 3 === 0 && int % 5 === 0) {
      return resolve('FizzBuzz')
    }
    if (int % 3 === 0) {
      return resolve('Fizz')
    }
    if (int % 5 === 0) {
      return resolve('Buzz')
    }
    reject(int)
  })
}

function fizzBuzzTests() {
  const numbers = [1, 3, 5, 15];
  for (let number of numbers) {
    fizzBuzz(number)
      .then((r) => console.log(r))
      .catch((e) => console.log(e))
  }
}

fizzBuzzTests()