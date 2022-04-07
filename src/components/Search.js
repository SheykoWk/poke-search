import { useState } from "react"

const Search = ({handlerSearch, handlerIsAType}) => {
    const [inputValue, setInputValue] = useState('')

    

    return (
        <div>
            <input type='text' onChange={(e) => {
                console.log(`Esto seria una peticion:  https://pokeapi.co/api/v2/type/${e.target.value}`)
                setInputValue(e.target.value)
            } } />

            <input type='checkbox' id="isByType" onChange={(e) => handlerIsAType(e.target.checked) } />
            <label htmlFor="isByType" >Search by type</label>
            
            <button onClick={() => console.log(`Esto seria una peticion:  https://pokeapi.co/api/v2/type/${inputValue}`)}>Buscar</button>
            
        </div>
    )
}

export default Search