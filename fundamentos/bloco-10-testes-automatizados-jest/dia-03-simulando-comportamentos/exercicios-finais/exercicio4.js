// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 

function upperCase(string) {
  return string.toUpperCase();
}

function startsWith(string) {
  return string[0];
}

function concatString(string1, string2) {
  return string1 + string2;
}

console.log(upperCase('oi tudo bem'), startsWith('oi tudo bem'), concatString('oi ', 'tudo bem')); // Todas funcionando como esperado

module.exports =  { upperCase, startsWith, concatString };