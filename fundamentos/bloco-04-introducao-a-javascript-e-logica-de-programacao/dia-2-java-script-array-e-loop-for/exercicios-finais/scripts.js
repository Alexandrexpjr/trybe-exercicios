// 1-Criar array numbers;
// 2-Criar um loop que percorre o array;
// 3-Imprimir os valores nele contidos;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// 1- Criar a variável soma;
// 2- Atribuir o valor 0 para ela;
// 3- Criar um loop que percorre o array numbers;
// 4- Somar todos os valores do array e armazenar na variável soma;
// 5- Imprimir o resultado;

let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

console.log("A soma de todos os números é de " + soma);
console.log();

// 1- Criar a variável media;
// 2- Atribuir o seu valor como sendo a variável soma dividido pelo tamanho do array numbers;
// 3- Imprimir o resultado;

let media = soma / numbers.length;
console.log("A média aritmética dos valores contidos no array é de " + media);
console.log();

// 1- Criar um if com a condição da variável media ser maior que 20;
// 2- Se for maior que 20, imprimir "valor maior que 20";
// 3- Caso contrário, imprimir "valor menor ou igual a 20";

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

console.log();

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// 1- Criar uma variável maiorNumero;
// 2- Atribuir o primeiro número do array numbers à ela;
// 3- Criar um loop que percorre o array;
// 4- Se o valor atual for maior que o armazenado na variavel maiorNumero, a variável assume o novo valor;
// 5- Imprime o valor do maior número encontrado.

maiorNumero = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}
console.log("O maior número encontrado foi o " + maiorNumero);
console.log();

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;
for (i = 0; i < numbers.length; i += 1){
    let numeros = numbers[i] % 2;
    if (numeros !== 0) {
        numerosImpares += 1;
    }
}

if (numerosImpares === 0) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log("Existem " + numerosImpares + " números ímpares no array");
}
console.log();

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

menorNumero = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}
console.log("o menor número é o " + menorNumero);
console.log();

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (i = 0; i < 25; i += 1) {
    array[i] = i + 1;
}
console.log(array);
console.log();


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayDividido = [];
for (i = 0; i < array.length; i += 1) {
    arrayDividido[i] = array[i] / 2;
}
console.log(arrayDividido);
