// Crie uma classe cujo objeto represente um Cachorro.

class Dog {
  _name: string;
  _breed: string;
  _age: number;

  constructor(name: string, breed: string, birthDay: Date) {
    this._name = name;
    this._breed = breed;
    this._age = new Date(Date.now() - birthDay.getTime()).getFullYear() -1970;
  }

  getAge(): void {
    console.log(`${this._name} has ${this._age} years old!`);
  }
}

const erick = new Dog('Erick', 'Yorkshire', new Date('2010-10-25'));
erick.getAge();

// Crie uma classe cujo objeto represente uma Casa.

class House {
  _owner: string;
  _area: number;
  _color: string;

  constructor(owner:string, area:number, color:string) {
    this._owner = owner;
    this._area = area;
    this._color = color;
  }

  getArea(): void {
    console.log(`The ${this._owner}'s ${this._color} house has ${this._area} m².`);
  }
}

const myHouse = new House('Alexandre', 100, 'white');
myHouse.getArea();

// Crie uma classe cujo objeto represente um Voo.

class Flight {
  _passengers: number;
  _origin: string;
  _destination: string;

  constructor(passengers: number, origin: string, destination: string) {
    this._destination = destination;
    this._origin = origin;
    this._passengers = passengers;
  }
}
