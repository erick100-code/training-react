import { useEffect, useState } from "react"

const List = ({ items, type }) => {
    
    const [state, setState] = useState([])

    useEffect(() => {
        items().then((result) => setState(result))
    }, [items])

    return (
        <ul>
            {type == 'comments' ? 
                state.map(ind => <p key={ind.id}>{ind.name}</p>)
                
                : state.map(ind => <p key={ind.id}>{ind.title}</p>)
            }
               
        </ul>
    )
}   

export default List