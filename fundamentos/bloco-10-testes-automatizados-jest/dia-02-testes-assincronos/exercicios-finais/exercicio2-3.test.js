const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('Testes utilizando sintaxe de Promise', () => {
  it('Verificando o resultado da função getUserName para o caso em que o usuário é encontrado', () => (
    getUserName(1).then((user) => {
      expect(user).toEqual('Mark');
    })
  ));
  it('Verificando o resultado da função getUserName para o caso em que o usuário não é encontrado' ,() => (
    getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found');
    })
  ));
});

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('Testes utilizando a sintaxe de async/await', () => {
  it('Verificando o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
    const name = await getUserName(2);
    expect(name).toBe('Paul')
  });
  it('Verificando o resultado da função getUserName para o caso em que o usuário não é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch(error) {
      expect(error).toEqual(new Error ('User with 3 not found.'));
    }
  })
});
