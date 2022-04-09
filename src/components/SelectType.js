import { useEffect, useState } from "react"
import getAllTypes from "../services/getAllTypes"
import getPokemonByType from "../services/getPokemonByType"

const SelectType = () => {

    const [typeArr, setTypeArr] = useState([])
    const [currentType, setCurrentType] = useState('normal')

    useEffect(() => {
        getAllTypes()
            .then((response) => {
                console.log(response.data.results)
                setTypeArr(response.data.results)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    useEffect(() => {
        getPokemonByType(currentType)
            .then((response) => {
                console.log(response.data.pokemon)
            })
            .catch((err) =>{
                console.error(err)
            })
    }, [currentType])



    const list = typeArr.map((item) => <option key={item.name}>{item.name}</option>)

    return(
        <select onChange={(e) => setCurrentType(e.target.value) }>
            {list}
        </select>
    )
}

export default SelectType