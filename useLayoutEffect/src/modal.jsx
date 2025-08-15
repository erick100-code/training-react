import { useLayoutEffect, useRef, useState } from "react"

function Modal() {
    const [show, setShow] = useState(false)
    const button = useRef()
    const popup = useRef()

    useLayoutEffect(() => {// executa antes do DOM ser montado
        if (!button.current || !popup.current) return

        popup.current.style.top = '150px'
    }, [show])// ou seja, quando iniciar já vai ter o top 150px

    return (
        <div style={{position: 'relative'}}>
            <h1><button ref={button} onClick={() => setShow(prevState => !prevState)}>modal</button></h1>
            
            {show && (
                <div ref={popup} style={{fontSize: '35px', position: "absolute", top: '0px'}}>
                    modal aberto
                </div>
            )}
        </div>
    )
}

export default Modal