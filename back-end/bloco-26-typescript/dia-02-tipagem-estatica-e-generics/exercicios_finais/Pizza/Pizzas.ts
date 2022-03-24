import { Pizza, Comum, Vegetarian, Sweet } from "./Pizza";

const margherita: Pizza = {
  flavor: 'Margherita',
  slices: 6
};

const pepperoni: Pizza = {
  flavor: 'Pepperoni',
  slices: 8
};

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
};


// 3 pizzas do tipo comum;

const smallPepperoni:Comum = {
  flavor: 'Pepperoni',
  slices: 4
};

const largePepperoni:Comum = {
  flavor: 'Pepperoni',
  slices: 8
};

const largeCalabresa:Comum = {
  flavor: 'Calabresa',
  slices: 8
};

// 2 pizzas do tipo vegetariana;

const mediumMarguerita:Vegetarian = {
  flavor: 'Marguerita',
  slices: 6
};

const smallCogumelo:Vegetarian = {
  flavor: 'Cogumelo',
  slices: 4
};

// 1 pizza do tipo doce.

const smallNutela:Sweet = {
  flavor: 'Nutela',
  slices: 4
};