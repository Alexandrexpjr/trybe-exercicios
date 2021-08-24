// 1)C rie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (wordToCheck) {
    const lowerWord = wordToCheck.toLowerCase();
    const revertedWord = lowerWord.split('').reverse().join('');
    return revertedWord === lowerWord;
}
console.log(verificaPalindromo('olaaloa')); 
console.log();
// 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestIndice (numberList) {
    let maximumValue = numberList[0];
    let index = 0;
    for (let i = 1; i < numberList.length; i += 1) {
        let actualNumber = numberList[i];
        if (actualNumber > maximumValue) {
            maximumValue = actualNumber;
            index = i;
        }
    }
    return index;
}

console.log(biggestIndice([1, 2, 3, 10, 22, 30, 1, 2, 3]));
console.log();

// 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestIndice (numberList) {
    let minimumValue = numberList[0];
    let index = 0;
    for (let i = 1; i < numberList.length; i += 1) {
        let actualNumber = numberList[i];
        if (actualNumber < minimumValue) {
            minimumValue = actualNumber;
            index = i;
        }
    }
    return index;
}

console.log(lowestIndice([2, -4, 6, 7, 10, 0, -3]));
console.log();

// 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(names) {
    finalName = names[0];
    for (let index = 1; index < names.length; index += 1) {
        let actualName = names[index];
        if (actualName.length > finalName.length) {
            finalName = names[index];
        }
    }
    return finalName;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisAparecido(numbers) {
    let numberOfApparitions = {};
    for (let index = 0; index < numbers.length; index += 1) {
        if (numberOfApparitions[numbers[index]]) {
            numberOfApparitions[numbers[index]] += 1
        } else {
            numberOfApparitions[numbers[index]] = 1;
        }    
    }
    let who = undefined;
    let test = 1;
    for (let index in numberOfApparitions) {
        if (numberOfApparitions[index] > test) {
            test = numberOfApparitions[index];
            who = index;
        }
    }
    return who;
}
console.log(maisAparecido([8, 3, 8, 5, 8, 2, 3]));

// 6) Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

