module.exports = techList;

function techList(techies, name) {
  let result = [];
  if (!techies.length) return 'Vazio!';
  techies.sort().forEach(tech => {
    const obj = {};
    obj.name = name;
    obj.tech = tech;
    result.push(obj);
  });
  return result;
}