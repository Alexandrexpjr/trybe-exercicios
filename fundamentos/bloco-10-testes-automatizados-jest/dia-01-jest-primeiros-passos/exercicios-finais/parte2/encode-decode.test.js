const { encode, decode } = require('./encode-decode');

// Para as funções encode e decode crie os seguintes testes:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('testes', () => {
  it('Encode/Decode are functions?', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Todas as vogais são convertidas corretamente', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });
  it('Todas os números são convertidos corretamente', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });
  it('Demais letras e números não são convertidos', () => {
    expect(encode('q w r t y p s')).toBe('q w r t y p s');
    expect(decode('6 7 8 9 0')).toBe('6 7 8 9 0');
  });
  it('Tamanho continua o mesmo', () => {
    expect(encode('hi there')).toHaveLength(8);
    expect(decode('h3 th2r2')).toHaveLength(8);
  })
});