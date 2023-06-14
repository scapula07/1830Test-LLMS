import React,{useState} from 'react'
import CreatePost from '../../components/CreatePost'
import PostCard from '../../components/PostCard'
import { FeedAPI } from '../../_api'
import { SyncLoader } from 'react-spinners'
import { useQuery } from 'react-query'
import { toast } from 'react-hot-toast'


export default function AllPosts({user}) {
    const [posts,setPost]=useState([])
    const [page, setPage] = useState(1);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData
      } = useQuery(['posts', page], () =>  FeedAPI.getPosts(user?.token,page), { keepPreviousData: true });

     if(isError){
        toast.error( error?.message)
     }
  return (
        <div className='w-full h-full'>
            <CreatePost 
               user={user}
             />
            <div className='flex flex-col space-y-6 overflow-y-scroll py-8 h-full'>
                {data?.posts.map((post)=>{
                     return(
                       <PostCard 
                          user={user}
                          post={post}
                        
                        />
                      )
                    })
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

            </div>

        </div>
  )
}
