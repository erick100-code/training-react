import { useState } from 'react'
import './App.css'
import Botvalue from './components/botvalue'
import { useMemo } from 'react'

function App() {
  const [inpValue, setInp] = useState(0)
  const [rend, setRend] = useState(1)

  const recebeFuncValueEChamaFunc = useMemo(() => {
    return fun(rend)
  } ,[rend])

  return (
    <>
      {inpValue == 0 ? (
        <h1>digite seu nome: </h1>
      ) : (
        <h1>{inpValue}</h1>
      ) }
      <input type="text" name="txt" id="txt" onChange={(event) => setInp(event.target.value)} />
      <br />
      <br />
      <button onClick={() => setRend(rend + 1)}>chamar função contador</button>
      <Botvalue buttonValue={recebeFuncValueEChamaFunc} />
    </>
  )
}

const fun = (valor) => {
  console.log('renderização: ' + valor)
  return valor
}

export default App
