const { expect } = require('chai');
const getCatImage = require('../getCatImage');
const sinon = require('sinon');
const { default: axios } = require('axios');

describe('Testa o comportamento da função getCatImage', () => {
  describe('Quando o parâmetro N', () => {
    describe('Não é do tipo number:', () => {
      it('retorna um erro', async () => {
        const resposta = await getCatImage('string').catch(err => err);
        expect(resposta).to.contain(/inválido/);
      });
    });

    describe('é igual a 0', () => {
      it('retorna um array vazio:', () => {
        expect(getCatImage(0)).to.be.empty;
      });
    });

    describe('é maior do que 0', () => {
      it('retorna um array não vazio', async () => {
        const resposta =  await getCatImage(5);
        expect(resposta).not.to.be.empty;
      });

      it('retorna um array de tamanho n', async () => {
        const resposta =  await getCatImage(5);
        expect(resposta).to.have.length(5);
      });

      it('retorna um array de objetos', async () => {
        const resposta =  await getCatImage(5);
        resposta.forEach((result) => {
          expect(result).to.be.a('object');
        });
      });
    });
  });

  describe('Com relação ao retorno da função', () => {
    describe('é um objeto com as propriedades (url, width, length)', () => {
      const propriedades = ['url', 'width', 'height'];
      for(let propriedade of propriedades) {
        it(`tem a propriedade ${propriedade}`, async () => {
          const resposta = await getCatImage(1);
          expect(resposta[0]).to.have.property(propriedade);
        });
      };
    });

    describe('Com relação às propriedades', () => {
      it('A imagem tem a extensão jpg', async () => {
        const resposta = await getCatImage(1);
        expect(resposta[0].url).to.contain('.jpg');
      });
      it('A propriedade width deve ser um número', async () => {
        const resposta = await getCatImage(1);
        expect(resposta[0].width).to.be.a('number');
      });
      it('A propriedade height deve ser um número', async () => {
        const resposta = await getCatImage(1);
        expect(resposta[0].height).to.be.a('number');
      });
    });
  });

  describe('A API é chamada', () => {
    afterEach(() => {
      axios.get.restore();
    });
    it('zero vezes, qndo n = 0', async () => {
      const spy = sinon.spy(axios, 'get');
      const resposta = await getCatImage(0);
      expect(resposta).to.be.empty;
      expect(spy.called).to.be.false;
    });
    it('n vezes, quando n != 0', async () => {
      const spy = sinon.spy(axios, 'get');
      await getCatImage(5);
      expect(spy.called).to.be.true;
      expect(spy.callCount).to.be.equal(5);
    });
  });
  
  describe('Se a api falhar', () => {
    before(() => {
      sinon.stub(axios, 'get')
      .throws(new Error('Falhou'))
    });
    after(() => {
      axios.get.restore();
    });
    it('retorna um array vazio', async () => {
      const resposta = getCatImage(1);
      expect(resposta).to.be.empty;
    });
  });

  describe('Checando se o promise All', () => {
    afterEach(() => {
      Promise.all.restore();
    });
    it('é chamado', async () => {
      const stub = sinon.stub(Promise, 'all');
      await getCatImage(5)
      expect(stub.called).to.be.true;
    });
    it('retorna um array de objetos', async () => {
      const spy = sinon.spy(Promise, 'all');
      await getCatImage(5);
      const resposta = await spy.returnValues[0];

      expect(resposta).to.be.a('array');
      resposta.forEach(r => {
        expect(r).to.be.a('object')
      });
    })
  })
});