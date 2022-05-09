// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

type examGrade = [number, number, number, number];
type homeworkGrade = [number, number];

class Student {
  public name: string;
  private matriculationNumber: string;
  private examGrades: examGrade;
  private homeworkGrades: homeworkGrade;

  constructor(name: string, matriculationNumber: string, examGrades: examGrade, homeworkGrades: homeworkGrade) {
    this.name = name;
    this.matriculationNumber = matriculationNumber;
    this.examGrades = examGrades;
    this.homeworkGrades = homeworkGrades;
  }

  getSum(): number {
    return [...this.examGrades, ...this.homeworkGrades].reduce((prev, curr) => curr + prev, 0); 
  }

  getAverage(): number {
    return (this.getSum() / 6)
  }
}

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

const Eu = new Student('Alexandre', '123321', [10, 9, 8, 9], [10, 10]);
console.log(Eu.getAverage());