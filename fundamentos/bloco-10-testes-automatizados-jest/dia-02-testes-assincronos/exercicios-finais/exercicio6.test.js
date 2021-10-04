const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

// Código do exercício

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find(animal => animal.name === name);

      if (findAnimal) {
        return resolve(findAnimal);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.age === age);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Nenhum animal com essa idade'));
    }, 100);
  })
);

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe animais com a idade especificada', () => {
    it('Retorne um array de objectos dos animais', () => (
      findAnimalsByAge(1).then((animal) => {
        expect(animal[0]).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });
  
  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalsByAge(9).catch((error) => {
        expect(error.message).toEqual('Nenhum animal com essa idade');
      });
    });
  });
});