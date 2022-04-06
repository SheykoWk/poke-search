import { useEffect, useState } from "react";
import "./App.css";
import getAllPokemons from "./services/getAllPokemons";
import Pokemon from './components/Pokemon';

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getAllPokemons()
          .then((response) => {
            setPokemons(response.data.results)
          })
          .catch((err) => {
            console.error(err)
          })
    }, [])

    const list = pokemons.map((pokemon) => <Pokemon name={pokemon.name} />)

    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
