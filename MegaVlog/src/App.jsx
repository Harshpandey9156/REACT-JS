import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import authService from './Appwrite/auth'
 import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
import './App.css'
import {login ,logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
 
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurretUser()
    .then((userData)=>{
     if(userData){
      dispatch(login({userData}))
     }
     else{
      dispatch(logout())
     
     }
    })
    .finally(()=>setLoading(false))
  },[])



   return !loading ? (
    <div className='min-h-screen flex flex-wrap context-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        TODO:<Outlet/>
        </main>
        <Footer/>   
      </div>
    </div>
   ): null
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  // return (
  //   <>
  //    <h1>vlog</h1>
  //   </>
  // )
}

export default App
