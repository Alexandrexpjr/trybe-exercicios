const fs = require('fs');

function escreveConteudo(arquivo, conteudo) {
  fs.writeFileSync(`./${arquivo}.txt`, conteudo);
  return 'ok'
};

module.exports = escreveConteudo;