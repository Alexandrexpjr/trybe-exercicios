const math = require('./math');
test("#somar sem async/await", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
  return expect(mockSomar(1, 2)).resolves.toBe(3);
});
test("#somar com async/await", async () => {
  // Como alternativa você pode usar async/await, nenhuma é superior a outra. Você pode combinar e apenas depende de qual estilo você acha que torna seus testes mais simples.
  const mockSomar = jest.spyOn(math, "somar");
  mockSomar.mockClear(); // Acrescentei pois estava dizendo que a funcao foi chamada 4 x, acumulando com as anteriores
  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  await expect(mockSomar(1, 2)).resolves.toBe(3);
});