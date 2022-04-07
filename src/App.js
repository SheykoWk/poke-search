import { useEffect, useState } from "react";
import "./App.css";
import getAllPokemons from "./services/getAllPokemons";
import Pokemon from './components/Pokemon';
import Search from "./components/Search";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [isByType, setIsByType] = useState(false)

    useEffect(() => {
        getAllPokemons()
          .then((response) => {
            console.log(response.data.results)
            setPokemons(response.data.results)
          })
          .catch((err) => {
            console.error(err)
          })

    }, [])

    const list = pokemons.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.name} />)



    return (
        <div className="App">
            <header className="App-header">
              { isByType ? 'Estoy buscando por tipo' : 'Estoy buscando por nombre' }
              <Search handlerSearch={setSearchValue} handlerIsAType={setIsByType} />
              {  } 
            </header>
        </div>
    );
}

export default App;
