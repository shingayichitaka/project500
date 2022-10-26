import React, { Component } from "react";
import Pokecard from "./Pokecard.js";

export class Pokedex extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div className="Grid">
        {pokemon.map((value) => {
          return <Pokecard card={value} />;
        })}
      </div>
    );
  }
}

export default Pokedex;
