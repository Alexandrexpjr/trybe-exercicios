let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

console.log(numbers);
console.log();

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

console.log("A soma de todos os números é de " + soma);
console.log();

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = soma / numbers.length;
console.log("A média aritmética dos valores contidos no array é de " + media);
console.log();

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

console.log();

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

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
