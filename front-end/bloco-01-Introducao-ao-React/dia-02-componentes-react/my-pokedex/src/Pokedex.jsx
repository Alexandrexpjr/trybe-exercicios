import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      pokemons.map((poke, index) => (
        <Pokemon poke = {poke} key={index} />
      ))
    )
  }
}

export default Pokedex;