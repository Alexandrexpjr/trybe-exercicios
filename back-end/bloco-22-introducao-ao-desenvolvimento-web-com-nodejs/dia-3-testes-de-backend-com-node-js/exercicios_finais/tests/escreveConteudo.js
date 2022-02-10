const { expect } = require('chai');
const escreveConteudo = require('../escreveConteudo');
const sinon = require('sinon');
const fs = require('fs');

describe('Executa a função escreveConteudo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore()
  });

  describe('a resposta', () => {
    it('é uma string ', () => {
      const resposta = escreveConteudo('arquivo1', 'conteúdo');
      expect(resposta).to.be.a('string');
    });
    it('é igual a "ok"', () => {
      const resposta = escreveConteudo('arquivo1', 'conteúdo');
      expect(resposta).to.be.equals('ok');
    })

  })
});