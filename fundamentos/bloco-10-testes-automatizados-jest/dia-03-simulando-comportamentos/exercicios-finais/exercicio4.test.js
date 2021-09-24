const exercicio4 = require("./exercicio4");
jest.mock('./exercicio4');

// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las. 


describe('Testando implementaçoes nas funções', () => {
  it('primeira função', () => {
    exercicio4.upperCase.mockImplementation((string) => string.toLowerCase());

    expect(exercicio4.upperCase).toHaveBeenCalledTimes(0);
    expect(exercicio4.upperCase('OLA TudO bEm')).toBe('ola tudo bem');
    expect(exercicio4.upperCase).toHaveBeenCalled();
    expect(exercicio4.upperCase).toHaveBeenCalledTimes(1);
  })
  it('segunda função', () => {
    exercicio4.startsWith.mockImplementation((string) => string[string.length - 1]);

    expect(exercicio4.startsWith).toHaveBeenCalledTimes(0);
    expect(exercicio4.startsWith('OLA TudO bEm')).toBe('m');
    expect(exercicio4.startsWith).toHaveBeenCalled();
    expect(exercicio4.startsWith).toHaveBeenCalledTimes(1);
  });
  it('terceira função', () => {
    exercicio4.concatString.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(exercicio4.concatString).toHaveBeenCalledTimes(0);
    expect(exercicio4.concatString('Ola, ', 'tudo ', 'bem')).toBe('Ola, tudo bem');
    expect(exercicio4.concatString).toHaveBeenCalled();
    expect(exercicio4.concatString).toHaveBeenCalledTimes(1);
  })
})

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar. 

it('primeira função', () => {
  exercicio4.upperCase.mockReset();
  const mockUpperCase = jest
    .spyOn(exercicio4, 'upperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(mockUpperCase).toHaveBeenCalledTimes(0);
  expect(mockUpperCase('OLA TudO bEm')).toBe('ola tudo bem');
  expect(mockUpperCase).toHaveBeenCalled();
  expect(mockUpperCase).toHaveBeenCalledTimes(1);
  
  exercicio4.upperCase.mockRestore();

  expect(exercicio4.upperCase('Ola tudO Bem')).toBe(undefined);
  expect(exercicio4.upperCase).toHaveBeenCalledTimes(1);
})
