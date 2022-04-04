// Exercício 2 : Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo ira fazer uma viagem para pegar sua nova pessoa passageira. Ele então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

import { Car } from "./Car";
import { Colors } from "../enums/Colors";
import { Directions } from "../enums/Directions";

const Gol = new Car('Volkswagen', Colors.SILVER, 4);

function getPassenger(car: Car):void {
  Gol.turnOn();
  Gol.speedUp(40);
  console.log('In 600 meters, turn left');
  Gol.turn(Directions.LEFT);
  console.log('In 200 meters at the roundabout take the second exit on the right');
  Gol.speedDown(20);
  Gol.turn(Directions.RIGHT);
  console.log('Keep straight for the next 1.2 kilometers');
  Gol.speedUp(40);
  console.log('In 300 meters, turn right');
  Gol.speedDown(20);
  console.log('Turn right');
  Gol.turn(Directions.RIGHT);
  console.log('Keep straight for the next 2 kilometers');
  Gol.speedUp(40);
  console.log('In 200 meters, turn left');
  Gol.speedDown(60);
  console.log('Turn left');
  Gol.turn(Directions.LEFT);
  Gol.speedUp(20);
  console.log('In 400 meters, turn right');
  Gol.speedDown(20);
  console.log('Turn right')
  Gol.turn(Directions.RIGHT);
  console.log('In 100 meters, you will reach the destination');
  Gol.speedDown(20);
  console.log('You arrived at your destination');
  Gol.turnOff();
}

getPassenger(Gol);





// Siga em frente;
// Em 600 metros vire a esquerda;
// Vire a esquerda;
// Em 200 metros na rotatória pegue a segunda saída a direita;
// Mantenha em frente pelos próximos 1,2 quilômetros;
// Em 300 metros vire a direita;
// Vire a direita;
// Em 400 metros você chegará ao seu destino;
// Você chegou ao seu destino.
// Pronto a pessoa motorista para a pessoa passageira entra pela porta de trás do lado do carona, e a viagem continua.
// Siga em frente;
// Em 300 metros vire a direita;
// Vire a direita;
// Mantenha em frente pelos próximos 2 quilômetros;
// Em 200 metros vire a esquerda;
// Vire a esquerda;
// Em 400 metros vire a direita;
// Vire a direita;
// Em 100 metros você chegará ao destino.
// Você chegou ao destino.