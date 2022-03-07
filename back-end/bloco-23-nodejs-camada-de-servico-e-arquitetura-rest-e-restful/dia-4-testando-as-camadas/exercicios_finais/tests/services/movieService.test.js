const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo ID no BD', () => {
  describe('quando o payload informado não é válido', () => {
    it('retorna "false"', async () => {
      const response = await MoviesService.findById('idInvalido');
      expect(response).to.be.a('boolean');
      expect(response).to.be.equal(false);
    });
  });

  describe('quando o payload informado é válido', () => {
    before(() => {
      const payloadMovie = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      sinon.stub(MoviesModel, 'getById').resolves(payloadMovie);
    });
    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.findById(1);
      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesService.findById(1);
      expect(response).to.be.not.empty;
    });
    it('tal objeto contém as chaves "id", "title", "directedBy", "releaseYear"', async () => {
      const response = await MoviesService.findById(1);
      expect(response).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
})