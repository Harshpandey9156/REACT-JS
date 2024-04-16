import React,{useState , useEffect} from 'react'
import { Container , PostForm } from '../components'
import appwriteService from '../Appwrite/configappright'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts]=useState(null)
    const{slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
            else{
                navigate('/404')
            }
        })
    },[slug])
  return post?(
    <div className='py-8'>
        <container>
            <PostForm post={post}/>
        </container>
    </div>
  ):null
}

export default EditPost