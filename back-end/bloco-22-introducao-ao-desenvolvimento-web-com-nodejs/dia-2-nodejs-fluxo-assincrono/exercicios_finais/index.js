// 1

function math(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      reject('Informe apenas números')
    }
    const resultado = (a + b) * c

    if (resultado < 50) return reject('Valor muito baixo') 

    resolve(resultado)
  })
}

math(1, 2, 3)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

math(10, 2, 30)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

math(1, 2, '3')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

// 2

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1)
}

function callMath() {
  const randomNumbers = [randomNumber(), randomNumber(), randomNumber()];
  math(...randomNumbers)
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));
}

callMath()

// 3

async function asyncCallMath() {
  const randomNumbers = [randomNumber(), randomNumber(), randomNumber()];
  const result = await math(...randomNumbers)
    .catch(error => console.error(error.message))
  console.log('3 - ' + result)
}

asyncCallMath();

//4 