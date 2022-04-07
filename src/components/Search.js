import { useState } from "react"

const Search = ({handlerSearch, handlerIsAType}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <input type='text' onChange={(e) => {
                setInputValue(e.target.value)
            } } />

            <input type='checkbox' id="isByType" onChange={(e) => handlerIsAType(e.target.checked) } />
            <label htmlFor="isByType" >Search by type</label>
            
            <button onClick={() => handlerSearch(inputValue)}>Buscar</button>
            
        </div>
    )
}

export default Search