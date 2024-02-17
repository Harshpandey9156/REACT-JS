import React, { useEffect, useState } from 'react'

function Github(){
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/harshpandey9156')
        .then(response=> {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          }
          )
        .then(data=>{
            console.log(data)
            setData(data)

        })
        .catch(error => console.error('Error fetching data:', error));
       
    }, [])
  return (
     
    <div className='text-center m-4 bg-gray-600 text-white p-4 '>Github follower :{data.followers}
    <img src={data.avatar_url} alt="Git picture"width={300} />

    
    </div>
    
  )
  }
export default Github; 

export const githubInfo=async()=>{
        const response=await fetch('https://api.github.com/users/harshpandey9156')
        
}
