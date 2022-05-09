// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e a data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo 3 caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
  constructor(private _name: string, private _birthDate: Date) {}
  get name(): string {
    return this._name
  }

  get birthDate(): Date {
    return this._birthDate
  }

  set name(name: string) {
    if (name.length < 3) {
      console.log('Name must be longer than 3 letters!')
    } else {
      this._name = name
    }
  }

  get age(): number {
    const diff = Date.now() - this.birthDate.getTime();
    const age = Math.floor((diff / (1000 * 60 * 60 * 24)) / 365.25);
    return age
  }

  set birthDate(date: Date) {
    const diff = Date.now() - date.getTime();
    const age = Math.floor((diff / (1000 * 60 * 60 * 24)) / 365.25);
    if (diff < 0) {
      console.log('Invalid birthDate!')
    } else if (age > 120) {
      console.log('Invalid birthDate!')
    } else {
      this._birthDate = date;
    }
  }
}

const person1 = new Person('Alexandre', new Date(1994, 8, 8));
person1.name = 'Al';
person1.name = 'Alex';
person1.birthDate = new Date(1900, 8, 8);
person1.birthDate = new Date(2023, 8, 8);
console.log(person1.name);
console.log(person1.age);