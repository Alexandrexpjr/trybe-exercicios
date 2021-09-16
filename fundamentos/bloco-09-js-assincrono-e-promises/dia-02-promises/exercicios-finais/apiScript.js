// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const getJokeContainer = document.getElementById('jokeContainer');
      getJokeContainer.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();

