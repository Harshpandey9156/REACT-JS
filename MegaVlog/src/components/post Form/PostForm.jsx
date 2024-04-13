import React ,{useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Input,Button ,RTE,Select} from '../index'
import appWriteService from '../../Appwrite/configappright'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm() {
    const {register, handleSubmit, watch , setValue ,control, getValues} = useForm({
        defaultValues: {
            title:post?.title || '',
            slug: post?.slug || '',
            content:post?.content || '',
            status: post?.status || 'active',
            // category: ''
        },
    })
    const navigate = useNavigate()
    const user = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if(post){
            const file=data.image[0]?appWriteService.uploadFile(data.image[0]):null
            if(file){
                appWriteService.deleteFile(post.featuredImage)
            }
            const dbPost=await appWriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
            })
        }
        else{
            const file=await appWriteService.uploadFile(data.image[0]);
            if(file){
                const fileld =file.$id
                data.featuredImage=fileld
                await appWriteService.createPost(data)
            }
        }
    }
  return (
    <div>PostForm</div>
  )
}

export default PostForm