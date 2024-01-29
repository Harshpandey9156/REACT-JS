import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
function MyApp(){
  return(
    <div>
      <h1>Harsh Pandey</h1>
    </div>
  )
}

// const reactElement= {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }


const reactElement=React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to google'

)


const anotherElement=(
  <a href="https://google.com" ytarget='_blank'>Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
   
    
    <App/>
   
)
