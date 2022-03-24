import { Colors } from "./enums/Colors";
import { Directions } from "./enums/Directions";
import { Doors } from "./enums/Doors";

class Car {
  _brand: string;
  _color: Colors;
  _doors: number;
  _isTurnedOn: boolean;
  _speed: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
    this._isTurnedOn = false;
    this._speed = 0;
  };

  honk(): void {
    console.log('BIIIIIIIIII BIIIIIIIIIII');
  };

  openTheDoor(door: Doors): void {
    console.log(`You have opened the ${Doors[door]} door!`)
  };

  closeTheDoor(door: Doors): void {
    console.log(`You have closed the ${Doors[door]} door!`)
  };

  turnOn():void {
    if (!this._isTurnedOn) {
      this._isTurnedOn = true;
      console.log(`The car has turned on!`)
      return
    }
    console.log(`The car is already on!`)
  };

  turnOff():void {
    if (this._speed > 0) {
      console.log(`You cannot turn off a car in movement!`);
      return
    }

    if (this._isTurnedOn) {
      this._isTurnedOn = true;
      console.log(`The car has turned off!`)
      return
    }

    console.log(`The car is already off!`)
  };

  speedUp(speed: number): void {
    if (!this._isTurnedOn) {
      console.log(`You cannot speed up a turned off car!`);
      return
    };
    this._speed += speed;
    console.log(`Current speed: ${ this._speed }km/h`);
  };

  speedDown(speed: number): void {
    if (!this._isTurnedOn) {
      console.log(`You cannot speed down a turned off car!`);
      return
    };
    if (speed > this._speed) {
      this.stop();
      return
    }

    this._speed -= speed;
    console.log(`Current speed: ${ this._speed }km/h`);
  };

  stop(): void {
    this._speed = 0;
    console.log(`Current speed: 0 km/h. You stopped!`);
  };

  turn(direction: Directions):void {
    console.log(`You have turned ${direction}`);
  }
}

const Celtinha = new Car('Chevrolet', Colors.SILVER, 4);

Celtinha.speedUp(10);
Celtinha.turnOn();
Celtinha.speedUp(10);
Celtinha.turn(Directions.LEFT);
Celtinha.speedDown(12);
Celtinha.turnOff();