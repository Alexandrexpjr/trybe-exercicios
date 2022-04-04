// Crie uma interface que represente uma pizza, ela deve conter:
// Uma propriedade do tipo string chamada flavor que representa o sabor.
// Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza;
// O número de fatias pode ser 4, 6 ou 8;
// Utilize um type alias para armazenar o tipo dessa propriedade
// Crie uma pizza sabor Calabresa de 8 fatias; Crie uma pizza sabor Marguerita de 6 fatias; Crie uma pizza sabor Nutela de 4 fatias;

import { Slices } from "../Types/Slices";

export interface Pizza {
  flavor: string;
  slices: Slices;
}

// Exercício 4 : Vamos agora extender nossa interface Pizza com novos tipos de pizza. São eles:
// Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
// Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
// Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
// Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizzza.
// Agora crie:
// 3 pizzas do tipo comum;
// 2 pizzas do tipo vegetariana;
// 1 pizza do tipo doce.

type Comuns = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarians = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sweets = 'Nutela' | 'Goiabada com Queijo' | 'Marshmellow';

export interface Comum extends Pizza {
  flavor: Comuns;
  slices: Slices;
}

export interface Vegetarian extends Pizza {
  flavor: Vegetarians;
  slices: Slices;
}

export interface Sweet extends Pizza {
  flavor: Sweets;
  slices: 4;
}