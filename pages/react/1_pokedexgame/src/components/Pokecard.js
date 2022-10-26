import React, { Component } from "react";

export class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience, img } = this.props.card;
    return (
      <div className="Pokemon">
        <div className="Pokemon-banner">
          <h2>Name: {name}</h2>
          <p>Type: {type} </p>
          <p>Pokemon ID: {id} </p>
          <p>Base Experience: {base_experience} </p>
        </div>
        <img src={img} alt="pokemon showcase" />
      </div>
    );
  }
}

export default Pokecard;
