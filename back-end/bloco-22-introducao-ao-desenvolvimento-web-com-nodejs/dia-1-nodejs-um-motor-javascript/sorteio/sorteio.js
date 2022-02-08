const readline = require('readline-sync');
const random = require('./random');

const verificaAcerto = (num1, num2) => {
  if (num1 === num2) return 'Parabéns! Número correto!'
  return `Opa, não foi dessa vez. O número sorteado era ${num1}.`
}

function main() {
  let querJogar = 'Y';
  while(querJogar === 'Y') {
    const numero = readline.questionInt('Escolha um número de 1 a 10 \n')
    const randomNumber = random()
    console.log(`${verificaAcerto(randomNumber, numero)}`)
    querJogar = readline.question('Deseja jogar novamente? Y/n \n')
  }
}

main();