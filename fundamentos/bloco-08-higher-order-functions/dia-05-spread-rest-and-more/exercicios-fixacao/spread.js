// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'açai'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));