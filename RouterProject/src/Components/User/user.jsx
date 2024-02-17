import React from 'react'
import { useParams } from 'react-router-dom'

 function User() {
    const {userid}=useParams()
  return (
  <>
    <div className='bg-gray-200 '></div>
    <div className='bg-gray-200 '>User: id {userid}</div>
  </>
  )
}

export default User
