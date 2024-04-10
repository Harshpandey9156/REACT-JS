import { useId } from "react"
import React  from 'react'

 const input =React.forwardRef(function input({
label ,
type = 'text',
className = '', 
...props  
 },ref){
   const id=useId()
    return (
      <div className="w-full">

         {label && <label className="block mb-1 pl-1" htmlFor="{id}">
            {label}
         </label>}
         <input
            id={id}
            type={type}
            className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${className}`}
            ref={ref}> </input>
      </div>
    )
 }
)

export default input