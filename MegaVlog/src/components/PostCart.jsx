import React from 'react'
import appwriteService from "../Appwrite/configappright"


function PostCart({$id ,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getfilePreview(featuredImage)} alt="" />
            </div>
            <h2
            className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
     
  )
}

export default PostCart