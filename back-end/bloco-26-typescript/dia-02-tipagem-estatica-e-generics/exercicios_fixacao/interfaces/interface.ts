// Crie uma interface cujo objeto represente um Automóvel.

interface Automobile {
  model: string;
  color: string;
  mileage: number;
  doors: number;
  turnOn(): void;
  turnOff(): void;
  //turnOn: () => void  ============= também funciona dessa forma
}

// Crie uma interface cujo objeto represente um Felino.

interface Feline {
  species: string;
  size: number;
  weight: number;
  diet: string[];
  run(): void;
  hunt(prey:string): void;
}

// Crie uma interface cujo objeto represente uma Aeronave.

interface Airplane {
  model: string;
  size: number;
  weight: number;
  capacity: number;
  maker: string;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
}