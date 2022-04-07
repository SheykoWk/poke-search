import { useState } from "react"

const Search = () => {

    const [value, setValue] = useState('')    

    const [searchByType , setSearchByType] = useState(false)

    return (
        <div>

            <input type='text' onChange={(e) => setValue(e.target.value) } />

            <input type='checkbox' id="isByType" />
            
            <label htmlFor="isByType" >Search by Type</label>
            
            <button>Buscar</button>
            
        </div>
    )
}

export default Search