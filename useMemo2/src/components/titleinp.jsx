import { memo } from "react"

const Inpleng = ({ valueINP }) => {
        console.log('componente renderizou')
    return (
        <div>
            <h1>
                {valueINP}               
            </h1>
        </div>
    )
}

export default memo(Inpleng)