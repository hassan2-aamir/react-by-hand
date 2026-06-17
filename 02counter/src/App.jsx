import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const subtractValue = () => {
    if (count !== 0) {
      setCount(count - 1)  
    }
    
  }

  return (
    <>
      <h1>Counter app:</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subtractValue}>Subtract value</button> 
    </>
  )
}

export default App
