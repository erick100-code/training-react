import { memo } from "react"

const Item = ({ dados }) => {
    return (
        <div>
            {dados.title}
        </div>
    )
}

export default memo(Item)