//  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// 1) Definir uma variável que receberá o valor de n;
// 2) Criar um array do tamanho do número n;
// 3) Fazer um loop que percorra todo o array;

let n = 5;
let square = "";
console.log("Quadrado: ");

for (let line = 1; line <= n; line += 1) {
    square += '*';   
}

for (i = 0; i < n; i += 1) {
    console.log(square);
}
console.log("");

let triangle = "";
console.log("Triângulo: ");

for (let line = 1; line <= n; line += 1) {
    triangle += '*';
    console.log(triangle);
}

let reverseTriangle = "";
console.log("Triângulo Reverso: ")

for (let line = 1; line <= n; line += 1) {
    reverseTriangle += "*";
    let spaces = '';
    for (let indexSpaces = n - line; indexSpaces > 0; indexSpaces -= 1) {
        spaces += " ";
    }
    console.log(spaces + reverseTriangle);
}                  // aqui utilizei a ideia do Braien Machado, conforme ele postou no slack

