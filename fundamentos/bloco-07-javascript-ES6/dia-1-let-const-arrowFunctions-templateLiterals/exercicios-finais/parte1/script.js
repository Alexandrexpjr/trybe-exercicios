const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
}

testingScope(true);
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function sortArray(array) {
    let sortedArray = array;
    for (let i = 0; i < sortedArray.length; i += 1) {
        for (let j = 0; j < sortedArray.length; j += 1) {
            const actualNumber = sortedArray[j];
            const nextNumber = sortedArray[j+1];
            if (actualNumber > nextNumber) {
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = actualNumber;
            }
        }
    }
    return sortedArray;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); 

console.log(`Os números ${oddsAndEvens.sort((a,b) => (a-b))} se encontram ordenados de forma crescente!`);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
