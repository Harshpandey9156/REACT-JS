import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

    // let counter=10
    const addvalue=()=>{
      // counter=counter+1
      setCounter(counter+1)
    }
  return (
    <>
       
      <h1>First</h1>
      <h2>Couter Value : {counter}</h2>

      <button onClick={addvalue}>
       
      Add Value
      </button>
      <br />
      
      <button>Remove value</button>
       
       
    </>
  )
}

export default App
