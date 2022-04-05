// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e 
//       preencher a matrícula automaticamente
//     - sumNotes: retorna a soma das notas da pessoa estudante
//     - sumAverageNotes: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada 
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos

import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    return Math.random().toString(16);
  }

  sumNotes(): Number {
    return [...this._examsGrades, ...this._worksGrades].reduce((acc, curr) => 
      acc + curr,
      0
    )
  }

  sumAverageNotes(): Number {
    const grades = [...this._examsGrades, ...this._worksGrades];
    const sum = grades.reduce((acc, curr) => 
      acc + curr,
      0
    );
    return sum / parseFloat((sum / grades.length).toFixed(2));
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set examGrades(grades: number[]) {
    if (grades.length > 4) {
      console.log('Student only have 4 exam grades!')
    } else {
      this._examsGrades = grades;
    }
  }

  set workGrades(grades: number[]) {
    if (grades.length > 2) {
      console.log('Student only have 2 work grades!')
    } else {
      this._worksGrades = grades;
    }
  }
}