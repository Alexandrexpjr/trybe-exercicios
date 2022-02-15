const { default: axios } = require("axios");

async function getCatImage(n) {
  if (typeof n !== 'number') throw new Error('Número inválido');
  let promises = [];
  for(let i = 0; i < n; i += 1) {
    promises.push(axios.get('https://api.thecatapi.com/v1/images/search')
      .then(r => r.data)
      .then(d => d[0]))
  }
  let resolvedPromises = Promise.all(promises)
  return await resolvedPromises;
}

getCatImage('2');
module.exports=getCatImage;