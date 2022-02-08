const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc/index.js' },
  { name: 'Calcular velocidade média', script: './velocidade_media/velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio/sorteio.js' },
];

let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

mensagemFinal = `Escolha um número para executar o script correspondente: \n${mensagem.join('\n')}\n`

const scriptNumber = readline.questionInt(mensagemFinal) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);