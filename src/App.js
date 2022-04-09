import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import getPokemonByType from "./services/getPokemonByType";
import SelectType from "./components/SelectType";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [currentType, setCurrentType] = useState("normal");

    useEffect(() => {
        getPokemonByType(currentType)
            .then((response) => {
                setPokemons(response.data.pokemon);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [currentType]);

    
    const list = pokemons.map((pokemon) => <Pokemon name={pokemon.pokemon.name} key={pokemon.pokemon.name} />);

    return (
        <div className="App">
            <header className="App-header">
                <SelectType handlerOnSelect={setCurrentType} />
                {currentType}
                <Search
                    handlerSearch={setCurrentType}
                />
                {list}
            </header>
        </div>
    );
}

export default App;
