// 4
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    content = JSON.parse(fileContent)
    content.forEach((personagem) => {
      console.log(`${personagem.id} - ${personagem.name}`)
    })
  })

// Resolução do gabarito (Pra eu salvar opções)
// const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
// .then((strings) => {
//   strings.forEach((string) => console.log(string));
// });

async function getSimpsonById(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fc) => JSON.parse(fc))

  const choosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!choosenSimpson) {
    throw new Error('Personagem não encontrado!')
  }
  return choosenSimpson
}

getSimpsonById('3').then(r => console.log(r));

async function changeSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fc) => JSON.parse(fc))

  const newSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons))
}

changeSimpsons()

async function getSimpsonsFamily() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fc) => JSON.parse(fc))

  const simpsonsFamily = simpsons.filter((simpson) => parseInt(simpson.id) <= 4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily))
}

getSimpsonsFamily()

async function addNelson() {
  const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((fc) => JSON.parse(fc));

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fc) => JSON.parse(fc));

  const nelson = simpsons.find((simpson) => simpson.name === 'Nelson Muntz');

  simpsonsFamily.push(nelson)

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

addNelson()

async function replaceNelson() {
  const simpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((fc) => JSON.parse(fc));

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fc) => JSON.parse(fc));

  const meggie = simpsons.find((simpson) => simpson.name === 'Maggie Simpson');

  simpsonsFamily.pop()
  console.log(simpsonsFamily)
  simpsonsFamily.push(meggie)

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

replaceNelson()