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
            //setPokemons(response.data.results)
          })
          .catch((err) => {
            console.error(err)
          })

    }, [])

    useEffect(() => {
      if(isByType && searchValue.length > 0){
        getPokemonByType(searchValue)
          .then((response) => {
            setPokemons(response.data.pokemon)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }, [isByType, searchValue])


    const list = pokemons.map((pokemon) => {
      if(isByType && searchValue.length > 0 ){
        //pokemon.pokemon.name
        return <Pokemon name={pokemon.pokemon.name} key={pokemon.pokemon.name} /> 
      } 
      return <Pokemon name={pokemon.name} key={pokemon.name} />
    })



    return (
        <div className="App">
            <header className="App-header">
              <Search handlerSearch={setSearchValue} handlerIsAType={setIsByType} />
              { list }
            </header>
        </div>
    );
}

export default App;
