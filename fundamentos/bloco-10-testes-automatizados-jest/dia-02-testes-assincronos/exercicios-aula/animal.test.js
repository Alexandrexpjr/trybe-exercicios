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

// Teste correto
describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
});

// Testando falsos positivos - Não passou o teste, e portanto não há falsos positivos.

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoca');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
});

// Teste passando. Esperado era não passar.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Teste deveria retornar Promise. Arrumando: 

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => ( // aqui
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  )); // e aqui
});

// Testando erro ( mas não testa se a função está implementada corretamente)

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  ));
})

// Agora levando em conta o número de asserções

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ));
  });
});

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(findAnimalsByType('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});

// ASYNC/AWAIT

describe('Testes com async/await', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });0
})

// Teste para qndo a Promise retorna reject

test('Testando com async/await, testando o reject', async () => {
  try {
    await findAnimalsByType('Lion');
  } catch (error) {
    expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
  }
});

// Agora levando em conta o número de asserções

test('Testando com async/await, testando o reject', async () => {
  expect.assertions(1);
  try {
    await findAnimalsByType('Lion');
  } catch (error) {
    expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
  }
});

// Combinando com o .rejects/.resolves

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      await expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(findAnimalsByType('Lion')).rejects
        .toEqual(new Error('Não possui esse tipo de animal.'));
    });
  });
});