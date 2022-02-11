const { expect } = require('chai');
const getCatImage = require('../getCatImage');

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

      describe('Com relação às propriedades', async () => {
        const resposta = await getCatImage(1);
        it('A imagem tem a extensão jpg', () => {
          expect(resposta[0].url).to.contain('.jpg');
        });
        it('A propriedade width deve ser um número', () => {
          expect(resposta[0].width).to.be.a('number');
        });
        it('A propriedade height deve ser um número', () => {
          expect(resposta[0].height).to.be.a('number');
        });
      });
    })
  })
});