const fs = require('fs/promises');

async function setSimpsons(newSimpsons) {
  return fs.writeFile('./database/simpsons.json', JSON.stringify(newSimpsons))
};

async function getSimpsons() {
  return fs.readFile('./database/simpsons.json', 'utf-8')
    .then(fc => JSON.parse(fc))
};

module.exports = {
  setSimpsons,
  getSimpsons
};