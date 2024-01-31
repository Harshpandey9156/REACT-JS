import { useState } from 'react'
 

function App() {
  const [color,setColor]=useState("black")

  return (
    
       <div className="w-full  h-screen  duration-200" style={{backgroundColor:color}}
       > 
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
       <div className='flex flex-wrap justify-center gap-3 shadow-lg   bg-white px-3 py-2 rounded-2xl'>
        <button onClick={function(){setColor("red")}} className='outline-none px-4 text-white px-4 py-2 rounded-2xl ' style={{backgroundColor:'red'}}
        >Red</button>
        <button  onClick={function(){setColor("yellow")}}   className='outline-none px-4 text-white px-4 py-2 rounded-2xl ' style={{backgroundColor:'yellow'}}
        >yellow</button>
        <button onClick={function(){setColor("green")}}  className='outline-none px-4 text-white px-4 py-2 rounded-2xl ' style={{backgroundColor:'green'}}
        >green</button>
        <button onClick={function(){setColor("blue")}}  className='outline-none px-4 text-white px-4 py-2 rounded-2xl ' style={{backgroundColor:'blue'}}
        >blue</button>
        <button onClick={function(){setColor("black")}}  className='outline-none px-4 text-white px-4 py-2 rounded-2xl ' style={{backgroundColor:'black'}}
        >black</button>
       </div>
       </div>
       </div>
    
  )
}

export default App
