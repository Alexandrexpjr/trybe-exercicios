const fs = require('fs').promises;
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

function question(message) {
  // Criamos uma variável rl para inicializar
  // o módulo readline, conforme visto na documentação
  const rl = readline.createInterface({ input, output });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main () {
  const fileName = await question('Qual arquivo você deseja ler? \n')
  try {
    const fileContent = await fs.readFile(`./${fileName}.txt`, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo Inexistente');
  }
}

main();
