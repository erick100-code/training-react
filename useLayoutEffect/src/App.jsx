import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>increment</button>
    </>
  )
}

export default App