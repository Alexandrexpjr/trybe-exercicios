// Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário. 

const exercicio6 = require("./exercicios-finais/exercicio6");

describe("testando a requisição", () => {
  exercicio6.fetchDog = jest.fn();
  afterEach(exercicio6.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    exercicio6.fetchDog.mockResolvedValue("request sucess");

    exercicio6.fetchDog();
    expect(exercicio6.fetchDog).toHaveBeenCalled();
    expect(exercicio6.fetchDog).toHaveBeenCalledTimes(1);
    await expect(exercicio6.fetchDog()).resolves.toBe("request sucess");
    expect(exercicio6.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    exercicio6.fetchDog.mockRejectedValue("request failed");

    expect(exercicio6.fetchDog).toHaveBeenCalledTimes(0);
    await expect(exercicio6.fetchDog()).rejects.toMatch("request failed");
    expect(exercicio6.fetchDog).toHaveBeenCalledTimes(1);
  });
});