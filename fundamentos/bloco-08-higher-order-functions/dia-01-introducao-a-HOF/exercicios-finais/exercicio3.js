// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const check = (grade1, grade2) => {
    let grade = 0;
    for (let i = 0; i < grade2.length; i += 1) {
        if (grade1[i] === grade2[i]) {
            grade += 1;
        } else if (grade2[i] === "N.A") {
            grade = grade;
        } else {
            grade -= 0.5;
        }
    }
    return grade;
}

const HOF = (template, student, check) => check(template, student);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(HOF(RIGHT_ANSWERS, STUDENT_ANSWERS, check));

