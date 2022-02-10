const fs = require('fs').promises;
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

function question(message) {
  const rl = readline.createInterface({ input, output });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main () {
  const fileName = await question('Qual arquivo você deseja ler? \n');
  const originalContent = await fs.readFile(`./${fileName}.txt`, 'utf-8')
    .catch(err => {
      console.error(`Erro ao ler o arquivo ${err}`)
      return false
    })
  if (!originalContent) return;
  const oldWord = await question('Qual palavra deseja substituir? \n');
  const newWord = await question('E qual palavra deve ficar no lugar? \n');

  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);
  console.log(`Resultado da substituição: \n${newContent}`)

  const newFile = await question('Qual o nome do novo arquivo de destino? \n');
  await fs.writeFile(`./${newFile}.txt`, newContent)
}

main();