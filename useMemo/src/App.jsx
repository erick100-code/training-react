import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [text, setText] = useState("")
  const [number, setNumber] = useState(1)
  
  const fun = useMemo(() => {
    return mostrarMemo(number)
  }, [number])// quando utilizar o useMemo?
  // R: quando um valor estiver calsando problema de desenpenho/lentidão
  // R: quando um valor é "chamado" desnecessariamente/multiplas vezes
  
  // quando um valor é chmado desnecessariamente?
  // R: quando ele é chamado sem ter seu valor alterado

  return (
    <>
      <div>
        <h1>{number}</h1> 
        <input type="text" name="text" id="text" onChange={(event) => setText(event.target.value)} />    
        <button onClick={() => setNumber(( numbr) => numbr + 1)}>incremetar</button>  
        <p>{text}</p>
        <h1>var fun value: {fun}</h1>
      </div>        
    </>
  )
}

const mostrarMemo = (param) => {
  console.log('memo memorizada')

  return param * 2
}

export default App
