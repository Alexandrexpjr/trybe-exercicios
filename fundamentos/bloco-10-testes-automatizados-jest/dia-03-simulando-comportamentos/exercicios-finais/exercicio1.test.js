// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function randomNumber() {
  return Math.round(Math.random() * 100);
}

console.log(randomNumber());

it('Testando se a func foi chamada, seu retorno, e quantas vezes foi chamada', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);
})

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários. 

it('Testando se a func foi chamada, seu retorno, e quantas vezes foi chamada, implementada uma vez, alterando para divisão', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
  expect(randomNumber).toHaveBeenCalledTimes(0);
  
  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
})

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários. 

describe('Testando três parâmetros multiplicados, depois um só dobrado', () => {
  
  it('Testando se a func foi chamada, seu retorno, e quantas vezes foi chamada', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(10, 2, 5)).toBe(100);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    
  })
  it('Testando com um parâmetro, resetando a func', () => {
    randomNumber.mockReset();
    randomNumber = jest.fn().mockImplementation((a) => a * 2);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toHaveBeenCalledTimes(2)
  })
})
