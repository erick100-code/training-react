import { useState } from 'react'
import './App.css'
import List from './components/list'

function App() {

  const [text, setText] = useState('')
  const [resourceType, setResourceType] = useState('todos')

  const request = async ()  => {
    const response = fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    const json = await response.json()
    return json
  }

  return (
    <>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <button onClick={() => setResourceType('todos')}>todos</button>
      <List items={request} />
    </>
  )

}

export default App
