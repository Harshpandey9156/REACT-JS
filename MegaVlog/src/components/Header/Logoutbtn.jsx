import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import {logout} from '../../store/authSlice'

function Logoutbtn() {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (

    <button
    className='inline-box px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
    >Logout</button>
  )
}

export default Logoutbtn