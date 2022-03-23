// ./exercises.ts

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

// Crie uma nova função para calcular a área do losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) com a diagonal menor (d) dividido por dois. (D * d) / 2

export function losangle(shortDiagonal: number, longDiagonal: number): number {
  return shortDiagonal * longDiagonal / 2
}

// Crie uma nova função para calcular a área do trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2

export function trapeze(shortBase: number, longBase: number, height: number): number {
  return (shortBase + longBase) * height / 2
}

// Crie uma nova função para calcular a área do círculo. A área do círculo de raio r é dada pelo produto do raio ao quadrado com o número irracional ℼ (em geral utilizamos o valor ℼ = 3,14). PI * r²

export function circle(radius: number): number {
  return (Math.PI * (radius ** 2))
}