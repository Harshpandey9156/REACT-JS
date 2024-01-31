import { useState ,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght,setLength]=useState(8)
  const [numberAllow,setnumberAllow] =useState(false)
  const [charAllow,setCharAllow]=useState(true)
  const [passward ,setPassward]=useState("")

  const passwardGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@##%^&*(){}?+-*"

    for (let i = 1; i <= array.lenght; i++) 
    { 
      let char=(math.floor(math.random()*str.length+1))
      pass=str.charAt(char)
    }
    setPassward(pass)


  },[lenght,numberAllow, charAllow,setPassward])



  return (
    <>

      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500  bg-gray-700'>
      <h1 className=' text-4xl text-center text-white margin-3'>Passward Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={passward}
        className='outline-none, w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink'>copy</button>



        </div>
      
      
      </div>
    
    </>
  )
}

export default App
