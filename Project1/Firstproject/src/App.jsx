import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

    // let counter=10
    const addvalue=()=>{
      // counter=counter+1
      setCounter(counter+1)
      setCounter(prevCounter=> prevCounter+1)
      setCounter(counter=>counter+1)
    }
    const removeValue=()=>{
      // counter= counter-1
      setCounter(counter-1)
    }

    const resetValue=()=>{
      
      setCounter(0)

    }
  return (
    <>
       
      <h1>First</h1>
      <h2>Couter Value : {counter}</h2>

      <button onClick={addvalue}>
       
      Add Value
      </button>
      <br />
      <br />
      
      
      <button  onClick={removeValue}>Remove value : {counter}
      </button>
      b

      <button onClick={resetValue}>
        reset
      </button>
      
       
       
    </>
  )
}

export default App
