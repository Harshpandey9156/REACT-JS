import React, {useState,useEffect} from 'react'
import appwriteService from '../Appwrite/configappright'
import {Container ,PostCart} from '../components'

function Home() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])   
  if(posts.length===0){
      return (<div className='w-full py-8text-center'> 
      <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                   <div key={post.$id} className='p-2 w-1/4'>
                    <postCart {...post}/>
                   </div>
                ))}
                
            </div>
      </Container>
      
      
      </div>
      )
  }
}

export default Home