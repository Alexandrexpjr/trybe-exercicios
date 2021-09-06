const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => 15 + Math.ceil(Math.random() * (strength - 15));

const warriorDamage = (strength, weaponDmg) => strength + Math.ceil(Math.random() * (strength*weaponDmg - strength));

const mageDamage = (intelligence, mana) => {
  let mage = {};
  const damageDelt = intelligence + Math.ceil(Math.random() * intelligence);

  mage.damage = damageDelt;
  if (mana < 15) {
    mage.damage = `Não possui mana suficiente`
  } else {
    mage.mana = mana - 15;
  }
  return mage;
}

// Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDmg) => {
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  }, 
  mageTurn: (mageDmg) => {
    mage.damage = mageDmg.damage;
    mage.mana = mageDmg.mana;
    dragon.healthPoints -= mageDmg.damage;
  },
  dragonTurn: (dragonDmg) => {
    dragon.damage = dragonDmg;
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
  },
  endTurn: () => {
    gameActions.warriorTurn(warriorDamage(warrior.strength, warrior.weaponDmg));
    gameActions.mageTurn(mageDamage(mage.intelligence, mage.mana));
    gameActions.dragonTurn(dragonDamage(dragon.strength));
    return battleMembers;
  },
};

console.table(gameActions.endTurn());