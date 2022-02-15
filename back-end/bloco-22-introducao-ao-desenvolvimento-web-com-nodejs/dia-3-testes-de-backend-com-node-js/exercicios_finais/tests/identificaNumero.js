const { expect } = require('chai');
const identificaNumero = require('../identificaNumero');

describe('Verifica a resposta da função identificaNumero', () => {
  describe('Quando o parâmetro é um número: ', () => {
    it('maior que 0', () => {
      const resposta = identificaNumero(5);
      expect(resposta).to.be.equal('Positivo');
    });
    it('menor que 0', () => {
      const resposta = identificaNumero(-5);
      expect(resposta).to.be.equal('Negativo');
    });
    it('igual a 0', () => {
      const resposta = identificaNumero(0);
      expect(resposta).to.be.equal('Neutro');
    })
  });
  describe('Quando o parâmetro', () => {
    it('não é do tipo Number', () => {
      const resposta = identificaNumero('teste');
      expect(resposta).to.be.equal('o valor deve ser um número');
    })
  });
});