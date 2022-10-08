import React from "react";

class Pokecard extends React.Component {
  render() {
    const arr = this.props.arr;
    const pokemon = arr.map((value) => {
      return (
        <div className="Pokemon">
          <div className="Pokemon-banner">
            <h2>Name: {value.name}</h2>
            <p>Type: {value.type}</p>
            <p>Exp: {value.base_experience}</p>
          </div>
          <div>
            <img src={value.img} alt="pokemon" />
          </div>
        </div>
      );
    });

    return <>{pokemon}</>;
  }
}

export default Pokecard;
