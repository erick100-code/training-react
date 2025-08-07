import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'
import { useRef } from 'react'
import Inpleng from './components/titleinp'

function App() {
  const [conso, setConso] = useState(0)
  const [inpV, setInpV] = useState([])
  const [rend, setRend] = useState(1)
  const inpRef = useRef("teste")

  const resultMemorizado = useMemo(() => {
    contador(conso)
  }, [conso])


  return (
    <>
      <Inpleng valueINP={inpV} />
      <p>numero de caracteres</p>
      <input ref={inpRef} type="text" name="inp" onChange={(event) => setInpV(event.target.value)}/>
      <button onClick={() => setConso(conso + 100)}>contar no console</button>
      <button onClick={() => setRend(rend + 1)}>renderizar</button>
    </>
  )
}



const contador = (value) => {
  for (let c = 0; c <= value; c++) {
    console.log(c)
  }

}

export default App
