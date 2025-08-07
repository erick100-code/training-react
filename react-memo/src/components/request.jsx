import { useEffect, useState } from "react"
import Item from "./item"

const Request = () => {

    const [data, setData] = useState([])// um estado sempre inicia com uma string ou com um array
    const [valueINP, setValueINP] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(result => {
            result.json().then(dataF => { 
                setData(dataF)
            })
        })
    }, [])// quando iniciar a aplicação pela primeira vez... faz a requisição

    console.log('renderizou')

    return (
        <div>
            <input type="text" onChange={(event) => setValueINP(event.target.value)} />
            <ul>
                {data.map(ind => {
                   return  <Item dados={ind} key={ind.id} />
                })}        
            </ul>        
        </div>    
    )
}

export default Request