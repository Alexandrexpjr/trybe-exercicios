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


//baby steps: Primeira parte:
//1- criar array groceryList
//2- adicionar três novas strings ao fim do array
//3- Criar um loop que percorre o array
//4- Imprime o conteúdo do array em linhas diferentes

//segunda parte:
//1- criar array nomes;
//2- Imprimir uma frase para indicar que passamos para a segunda parte do exercicio;
//3- Criar um loop que percorre o array names;
//4- adicionar o sobrenome Pereira a todos os nomes;
//5- Imprimir os nomes com sobrenome;
