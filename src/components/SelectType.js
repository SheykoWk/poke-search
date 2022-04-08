import { useEffect, useState } from "react"
import getAllTypes from "../services/getAllTypes"

const SelectType = () => {

    const [typeArr, setTypeArr] = useState([])
    const [urlType, setUrlType] = useState('')


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



    const list = typeArr.map((item) => <option key={item.name}>{item.name}</option>)

    return(
        <select onChange={(e) => console.log(e.target.value) }>
            {list}
        </select>
    )
}

export default SelectType