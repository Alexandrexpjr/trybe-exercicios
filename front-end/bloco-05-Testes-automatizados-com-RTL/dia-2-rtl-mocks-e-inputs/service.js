function randomNumber() {
  return Math.round(Math.random() * 100);
}

function toUpperCase(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function concatStrings(string1, string2) {
  return string1 + string2;
}

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { randomNumber, toUpperCase, firstLetter, concatStrings, fetchDog };

// Crie uma função que faça requisição para a api dog pictures .
'https://dog.ceo/dog-api/' 
