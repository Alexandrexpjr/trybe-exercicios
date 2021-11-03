const service = require("./service");

test('Testando a função randomNumber', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Testando a função randomNumber como uma divisão', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b );
  expect(service.randomNumber(10, 5)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber(10, 5)).not.toBe(2);
  expect(service.randomNumber).toHaveBeenCalledTimes(2);
});

describe('Testando a função randomNumber', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it('Multiplicação de três números', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(service.randomNumber(3, 5, 10)).toBe(150);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
  it('Dobro de um número', () => {
    service.randomNumber = jest.fn().mockImplementation(a => a * 2);
    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});

// A. Faça o mock das funções para com os seguintes casos:
// Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
// Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
// Implemente, na terceira função: ela deve receber três strings e concatená-las.
// B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
// C. Após criar os testes, restaure a implementação da primeira função.
// Faça o teste necessário para garantir que a implementação da função foi restaurado.

describe('Testando as funçoes relacionadas à strings', () => {
  it('testes com o mock da primeira função', () => {
    mockUpperCase = jest
      .spyOn(service, 'toUpperCase')
      .mockImplementation(s => s.toLowerCase());

    expect(mockUpperCase('TESTE')).toBe('teste');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    service.toUpperCase.mockRestore();
    expect(service.toUpperCase('oi')).toBe('OI');
  });
  it('testes com o mock da segunda função', () => {
    service.firstLetter = jest.fn().mockImplementation(s => s[s.length - 1]);
    expect(service.firstLetter('oi')).toBe('i');
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
  });
  it('testes com o mock da terceira função', () => {
    service.concatStrings = jest.fn().mockImplementation((s1, s2, s3) => s1 + s2 + s3);
    expect(service.concatStrings('oi, ', 'tudo ', 'bem?')).toBe('oi, tudo bem?');
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
  });
})

// Mocke a requisição e crie dois testes.
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
// Crie todos os testes que achar necessário.