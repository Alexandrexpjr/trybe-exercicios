//Parte 1
const fatorial = (number) => {
    let fatorial = number;
    for (let i = number - 1; i > 0; i -= 1) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5));

// Parte 1 - Recursivo
function fatorialRecursivo(n) {
    const isOne = (n === 1) ? 1 : n * fatorialRecursivo(n-1);
    return isOne; 
}
console.log(fatorialRecursivo(6));

// Parte 1 - Recursivo simplificado
const fatorialRecursivoSimplificado = n => (n === 1) ? 1 : n * fatorialRecursivoSimplificado(n-1); 

console.log(fatorialRecursivoSimplificado(7));

// Parte 2 
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

// Parte 3
var clickCount = 0;
const getButton = document.getElementById('counter');
const getP = document.getElementById('p-counter');
getButton.addEventListener('click', () => {
    clickCount += 1;
    getP.innerHTML = `Contador: ${clickCount}`
})

// Parte 4

function alteraString (string) {
    const stringQualquer = "Tryber x aqui!"
    let arr = stringQualquer.split(' ');
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'x') arr[i] = string;
    }
    return `${arr.join(' ')}`;
}
const saida = alteraString('Alexandre');

const skills = ['HTML', 'Javascript', 'CSS', 'Raciocínio Lógico', 'Empatia'];

function concatenar (saida) {
    return `${saida} Minhas cinco principais habilidades são:
    ${skills[0]},
    ${skills[1]},
    ${skills[2]},
    ${skills[3]},
    ${skills[4]}.
    #goTrybe`
}

console.log(concatenar(saida));
