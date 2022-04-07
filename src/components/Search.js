import { useState } from "react"

const Search = ({handlerSearch, handlerIsAType}) => {

    const [inputValue, setInputValue] = useState('');
    const [isChecked, setIsChecked] = useState(false)    

    const handlerIsChecked = (e) => {
        console.log(e)
        handlerIsAType(e.target.checked)
        setIsChecked(e.target.checked)
    }

    return (
        <div>
            { isChecked ? 'Esta Checkeado' : 'No esta checkeado' }
            <input type='text' onChange={(e) => setInputValue(e.target.value) } />

            <input type='checkbox' id="isByType" onChange={handlerIsChecked} />
            <label htmlFor="isByType" >Search by type</label>
            
            <button>Buscar</button>
            
        </div>
    )
}

export default Search