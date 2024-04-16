import React from 'react'
import { useEffect,useState } from 'react'
import appwriteService from '../Appwrite/configappright'
import { Container,PostCart } from '../components'

function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 '>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>{
                return <PostCart key={post.$id} post={post}/>
            })}
            </div>
            
            
        </Container> 
        
    </div>
  )

}

export default AllPost