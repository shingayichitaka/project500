import "./App.css";
import "./styles/styles.css";
import Pokedex from "./Components/Pokedex.js";

function App() {
  return (
    <>
      <h1>Welcome to the Pokedex</h1>
      <div className="App">
        <Pokedex
          className="Pokedex"
          pokemon={[
            {
              id: 4,
              name: "Charmander",
              type: "fire",
              base_experience: 62,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/charmander.png",
            },
            {
              id: 7,
              name: "Squirtle",
              type: "water",
              base_experience: 63,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/squirtle.png",
            },
            {
              id: 11,
              name: "Metapod",
              type: "bug",
              base_experience: 72,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/metapod.png",
            },
            {
              id: 12,
              name: "Butterfree",
              type: "flying",
              base_experience: 178,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/butterfree-f.png",
            },
            {
              id: 25,
              name: "Pikachu",
              type: "electric",
              base_experience: 112,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-f.png",
            },
            {
              id: 39,
              name: "Jigglypuff",
              type: "normal",
              base_experience: 95,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/jigglypuff.png",
            },
            {
              id: 94,
              name: "Gengar",
              type: "poison",
              base_experience: 225,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/gengar.png",
            },
            {
              id: 133,
              name: "Eevee",
              type: "normal",
              base_experience: 65,
              img: "https://img.pokemondb.net/sprites/home/normal/1x/eevee-f.png",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
