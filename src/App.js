import { useEffect, useState } from "react";
import "./App.css";
import getAllPokemons from "./services/getAllPokemons";
import Pokemon from './components/Pokemon';
import Search from "./components/Search";
import getPokemonByType from "./services/getPokemonByType";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [isByType, setIsByType] = useState(false)

    useEffect(() => {
        getAllPokemons()
          .then((response) => {
            setPokemons(response.data.results)
          })
          .catch((err) => {
            console.error(err)
          })

    }, [])

    useEffect(() => {
      if(isByType){
        getPokemonByType(searchValue)
          .then((response) => {
            console.log(response.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }, [isByType, searchValue])


    const list = pokemons.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.name} />)



    return (
        <div className="App">
            <header className="App-header">
              <Search handlerSearch={setSearchValue} handlerIsAType={setIsByType} />
              { isByType ? `Esto es una busqueda por tipo: ${searchValue}` : `Esto es una busqueda por nombre: ${searchValue}`}     
            </header>
        </div>
    );
}

export default App;
