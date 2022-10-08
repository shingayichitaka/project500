import logo from "./logo.svg";
import "./App.css";
import "./styles/styles.css";
import Pokedex from "./components/Pokedex.js";

function App() {
  return (
    <div className="App">
      <h1>The Pokedex Game</h1>

      <Pokedex />
    </div>
  );
}

export default App;
