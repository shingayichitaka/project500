import React, { Component } from "react";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.update = this.update.bind(this);
  }
  update() {
    const rand = Math.floor(Math.random() * 10);
    this.setState({ num: rand });
  }
  render() {
    return (
      <div className="Game">
        <h1>The number is {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>You win!</h2>
        ) : (
          <button onClick={this.update}>Click me</button>
        )}
      </div>
    );
  }
}

export default Game;
