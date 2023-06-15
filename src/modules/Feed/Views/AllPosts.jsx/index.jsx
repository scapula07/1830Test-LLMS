import React,{useState} from 'react'
import CreatePost from '../../components/CreatePost'
import PostCard from '../../components/PostCard'
import { FeedAPI } from '../../_api'
import { SyncLoader } from 'react-spinners'
import { useQuery,useInfiniteQuery } from 'react-query'
import { toast } from 'react-hot-toast'
import Button from '../../components/Button'


export default function AllPosts({user}) {
    const [posts,setPost]=useState([])
    const [currentCount,setCount]=useState(0)
    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery('posts',({ pageParam = 1})=> FeedAPI.getPosts(user?.token,pageParam), {
        getNextPageParam: (lastPage) => {
            return lastPage.nextPage
        }
    })
    const loadMore=()=>{
        fetchNextPage
        currentCount +4 
    }
    
  return (
        <div className='w-full h-full relative'>
            <CreatePost 
               user={user}
             />
            <div className='flex flex-col space-y-6 overflow-y-scroll py-8 h-full ' >
                {data?.pages?.map(page =>page.posts?.slice(currentCount,currentCount + 4).map((post)=>{
                     return(
                       <PostCard 
                          user={user}
                          post={post}
                        
                        />
                      )
                    }))
                 }
                 {isLoading&&(
                    <div className='flex items-center justify-center h-1/2 w-full'>
                      <SyncLoader color="#0471ef"/>
                    </div>

                 )}

                 {isError&&(
                    <div className='flex items-center justify-center h-1/2 w-full'>
                       <h5 className='font-semibold text-red-500 text-lg'>{error?.message}</h5>
                    </div>
                 )

                 }

               <div className='w-full flex justify-end py-6 absolute z-20 bottom-20   '>
                     {/* <button className="" 
                      style={{color:"#0471ef"}}
                     onClick={fetchNextPage} >Load More</button> */}
                    < Button 
                      cname="bg-blue-600 text-white rounded-lg px-4 py-2"
                      name={"Load more"}
                      action={loadMore}
                     />
               </div>

            </div>


        </div>
  )
}
