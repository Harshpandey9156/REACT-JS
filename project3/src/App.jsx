import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App(props) {
  const [count, setCount] = useState(0)

  const myObj={
    name:"harsh ",
    age:25
  }

  return (
    <>
       <h1 className='bg-green-400 text-black  p-4 rounded-xl'>Tailwind  </h1>

       <Card  username='Harsh Pandey ' Someobj={myObj}/>
       
       <Card  username ='Haaa'  />
       <Card  />
    </>
    
  )
}

export default App
