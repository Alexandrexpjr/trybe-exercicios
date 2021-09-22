const { TestWatcher } = require("@jest/core");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// Teste que passa

test('Função retorna string em letras maiúsculas', (done) => {
  uppercase('ola', (callback) => {
    try {
      expect(callback).toBe('OLA');
      done();
    } catch(error) {
      done('Não passou');
    }
  });
});

// Teste que não passa

test('Função retorna string em letras maiúsculas', (done) => {
  uppercase('ola', (callback) => {
    try {
      expect(callback).toBe('OLA1');
      done();
    } catch(error) {
      done('Não passou');
    }
  });
});