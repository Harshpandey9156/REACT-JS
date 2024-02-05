import { useState ,useCallback,useEffect ,useRef } from 'react'
 
import './App.css'


function App() {
  const [lenght,setLength]=useState(8)
  const [numberAllow,setNumberAllow] =useState(false)
  const [charAllow,setCharAllow]=useState(true)
  const [passward ,setPassward]=useState("")


  //use ref hook
  const passwardRef=useRef(null)


  const passwardGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@##%^&*(){}?+-*"

    for (let i = 1; i <=lenght; i++) 
    { 
      let char=(Math.floor(Math.random()*str.length+1))
      
      pass+=str.charAt(char)
    }
    setPassward(pass)


  },[lenght,numberAllow, charAllow,setPassward]) 

  

  const  copyPasswardToClipBoard=useCallback(()=>{ 
    passwardRef.current?.select()
    passwardRef.current?.setSelectionRange(0,999)
    
    window.navigator.clipboard.writeText(passward)

  },[passward]) 


useEffect(()=>{passwardGenerator()},
[lenght,numberAllow, charAllow,passwardGenerator])
// passwardGenerator()

  return (   
    <>

      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500  bg-gray-700'>
      <h1 className=' text-4xl text-center text-white margin-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={passward}
        className='outline-none, w-full py-1 px-3'
        placeholder='Password'
        ref={passwardRef}
        readOnly
        />
        
        <button  onClick={copyPasswardToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink'>copy</button>



        </div> 
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="Range"
          min={6}
          max={100} 
          value={lenght}
          className='curser-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length: {lenght}</label>
        </div>

      <div className='flex item-center gap-x-1'>
      <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={() => {
              setNumberAllow((prev) => !prev);
          }}
      />
        <label >Number</label>
      </div>



      <div className='flex item-center gap-x-1'>
      <input
          type="checkbox"
          defaultChecked={charAllow}
          // id="numberInput"
          onChange={() => {
              setCharAllow((prev) => !prev);
          }}
      />
        <label >char</label>
      </div>




      </div>
      
      </div>
    
    </>
  )
}



export default App
