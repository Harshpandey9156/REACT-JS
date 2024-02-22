import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [username,setUsename]=useState('')
    const [passward,setPassward]=useState('')

    const {setUser}=useContext(userContext)
        const handleSubmit=(e)=>{
            e.preventDefault()
            setUser({username,passward})

        }


  return (
    <div>
    <h2>Login</h2>
    <input type='text'
    value={username}
    onChange={(e) => setUsename(e.target.value) }
    placeholder='username'  />
    {" "}
    <input type='text' 
    value={passward}
    onChange={(e) => setPassward(e.target.value) }
    placeholder='password'  />
    <button onClick={handleSubmit}>Submit</button>
</div>
  )

}

export default Login