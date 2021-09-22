module.exports = hydrate;

function hydrate(pedido) {
  const arr = pedido.split(' ');
  let total = 0;
  arr.forEach(element => {
    if (parseInt(element)) total += parseInt(element);
  });
  return `${total} copo${(total > 1) ? 's ' : ' '}de água`;
}
console.log(hydrate('2 1 dale'));