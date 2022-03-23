// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.

enum DiasDaSemana {
  SegundaFeira = 1,
  TerçaFeira = 2,
  QuartaFeira,
  QuintaFeira,
  SextaFeira,
  Sabado,
  Domingo,
}

const hoje: string = DiasDaSemana[3];

console.log(hoje);

// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.

enum CoresDoArcoIris {
  cor1 = 'vermelho',
  cor2 = 'amarelo',
  cor3 = 'verde',
  cor4 = 'azul',
  cor5 = 'anil',
  cor6 = 'violeta',
  cor7 = 'laranja',
}

const coresPreferidas:[...string[]] = [CoresDoArcoIris['cor1'], CoresDoArcoIris['cor2']];

console.log(coresPreferidas);

// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.

enum Acoes {
  salvar,
  imprimir,
  abrir,
  visualizar,
  fechar
}

console.log(Acoes[3]);

// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.

enum Cardeais {
  Norte = 'N',
  Leste = 'E',
  Sul = 'S',
  Oeste = 'W'
}