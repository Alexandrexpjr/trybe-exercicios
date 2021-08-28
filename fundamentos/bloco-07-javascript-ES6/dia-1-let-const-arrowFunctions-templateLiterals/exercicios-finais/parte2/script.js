const fatorial = (number) => {
    let fatorial = number;
    for (let i = number - 1; i > 0; i -= 1) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5));


function fatorialRecursivo(n) {
    const isOne = (n === 1) ? 1 : n * fatorialRecursivo(n-1);
    return isOne; 
}
console.log(fatorialRecursivo(6));


const fatorialRecursivoSimplificado = n => (n === 1) ? 1 : n * fatorialRecursivoSimplificado(n-1); 

console.log(fatorialRecursivoSimplificado(7));

const longestWord = phrase => {
    const arr = phrase.split(' ');
    let word = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i].length > word.length) {
            word = arr[i];
        }
    }
    return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
