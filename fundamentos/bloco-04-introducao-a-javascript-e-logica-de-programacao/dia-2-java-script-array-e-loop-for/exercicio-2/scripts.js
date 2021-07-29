// For

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

groceryList.push('Batata', 'Cenoura', 'Rúcula') ;

for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//For/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

console.log("Segunda parte: ")
for (let nomes of names) {
    nomes += ' Pereira'; //para colocar sobrenome em todo mundo xD
    console.log(nomes);
}
