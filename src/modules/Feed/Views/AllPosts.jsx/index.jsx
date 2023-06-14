import React,{useEffect,useState} from 'react'
import CreatePost from '../../components/CreatePost'
import PostCard from '../../components/PostCard'
import { FeedAPI } from '../../_api'


export default function AllPosts({user}) {
    const [posts,setPost]=useState([])
    useEffect(()=>{
        const getAllPosts=async()=>{
           const res=await  FeedAPI.getPosts(user?.token)
           console.log(res)
           setPost(res?.data?.posts)
        }
        getAllPosts()
    },[])
  return (
        <div className='w-full h-full'>
            <CreatePost 
               user={user}
             />
            <div className='flex flex-col space-y-6 overflow-y-scroll py-8 h-full'>
                {posts?.map((post)=>{
                     return(
                       <PostCard 
                          user={user}
                          post={post}
                        
                        />
                      )
                })

                }

            </div>

        </div>
  )
}
