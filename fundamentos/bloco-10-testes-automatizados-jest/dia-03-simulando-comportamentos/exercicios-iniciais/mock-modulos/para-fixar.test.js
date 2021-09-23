const math = require('./math');
jest.mock('./math');

describe('Testes com as funções do arquivo math.js', () => {
  it('#subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(10, 5);
  
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenLastCalledWith(10, 5);
    expect(math.subtrair(7, 4)).toBe(3);
    
  })
  it('#multiplicar', () => {
    math.multiplicar.mockReturnValue(10);
    math.multiplicar();

    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar).toHaveBeenLastCalledWith();
    expect(math.multiplicar()).toBe(10);
  })
  it('#somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(10, 5);
  
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenLastCalledWith(10, 5);
    expect(math.somar(7, 4)).toBe(11);
  })
  //Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
  it('dividir', () => {
    math.dividir
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
  
    expect(math.dividir).toHaveBeenCalledTimes(0);

    expect(math.dividir()).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);

    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);

    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);

    expect(math.dividir(8, 2)).toBe(15);
  });
  // Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
  it('#subtrair c/ restore', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20); 
    mockSubtrair.mockClear();
    math.subtrair(10, 5);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair(1, 1)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair).toHaveBeenLastCalledWith(1, 1);

    // Restaurando
    math.subtrair.mockRestore();
    expect(math.subtrair(1, 1)).toBe(undefined); // Pois a função foi "mockada" no inicio do arquivo
  })
});