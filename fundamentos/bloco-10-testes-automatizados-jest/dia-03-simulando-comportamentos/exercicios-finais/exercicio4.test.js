const { upperCase, startsWith, concatString } = require("./exercicio4");

// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las. 

jest.mock('./exercicio4');

describe('Testando implementaçoes nas funções', () => {
  it('primeira função', () => {
    upperCase.mockImplementation((string) => string.toLowerCase());

    expect(upperCase).toHaveBeenCalledTimes(0);
    expect(upperCase('OLA TudO bEm')).toBe('ola tudo bem');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
  })
  it('segunda função', () => {
    startsWith.mockImplementation((string) => string[string.length - 1]);

    expect(startsWith).toHaveBeenCalledTimes(0);
    expect(startsWith('OLA TudO bEm')).toBe('m');
    expect(startsWith).toHaveBeenCalled();
    expect(startsWith).toHaveBeenCalledTimes(1);
  });
  it('terceira função', () => {
    concatString.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(concatString).toHaveBeenCalledTimes(0);
    expect(concatString('Ola, ', 'tudo ', 'bem')).toBe('Ola, tudo bem');
    expect(concatString).toHaveBeenCalled();
    expect(concatString).toHaveBeenCalledTimes(1);
  })
})


