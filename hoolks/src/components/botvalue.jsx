import { memo } from "react"

const Botvalue = ({ buttonValue }) => {
    
    console.log('renderizou o componente do botão')

    return (
        <h1>
            {buttonValue}
        </h1>
    )
}

export default memo(Botvalue)