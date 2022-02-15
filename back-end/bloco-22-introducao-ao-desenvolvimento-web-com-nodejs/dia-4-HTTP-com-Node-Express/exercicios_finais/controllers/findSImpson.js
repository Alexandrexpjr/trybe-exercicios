const { getSimpsons } = require("./fs-utils");

async function findSimpson(id) {
  const simpsons = await getSimpsons();
  return simpsons.find((s) => s.id === id);
}

module.exports = findSimpson;