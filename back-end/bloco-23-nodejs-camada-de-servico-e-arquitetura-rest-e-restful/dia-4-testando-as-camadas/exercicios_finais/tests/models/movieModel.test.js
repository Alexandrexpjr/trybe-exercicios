const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

// Quando é encontrado um filme com o ID passado pela pessoa usuária deverá retornar um objeto com todas as propriedades do filme e o código http 200 - OK no status da response .
// Quando não é encontrado nenhum filme com o ID passado pela pessoa usuária deverá responder com código http 404 - Not Found no status da response e com a mensagem "Filme não encontrado."

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Movie like Jagger',
    directedBy: 'Friozin Tarantino',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});

describe('Busca um filme no BD pelo ID', () => {
  describe('quando não existe filme com o id informado', () => {
    before(() => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(() => {
      connection.execute.restore();
    });
    it('Retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe filme com o ID informado', () => {
    before(() => {
      const payloadMovie = {
        id: 1,
        title: 'Movie like Jagger',
        directedBy: 'Friozin Tarantino',
        releaseYear: 1999,
      }
      sinon.stub(connection, 'execute').resolves([payloadMovie]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.not.empty;
    });
    it('tal objeto contém as chaves "id", "title", "directedBy", "releaseYear"', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
});