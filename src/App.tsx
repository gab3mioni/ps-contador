import { useState } from 'react'
import CounterButton from './components/CounterButton/CounterButton'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <p>{count}</p>
      <div className="card">
      <CounterButton onClick={() => setCount(count + 1)} label="+" />
      <CounterButton onClick={() => setCount(count - 1)} label="-" />
      </div>
    </>
  )
}

export default App
