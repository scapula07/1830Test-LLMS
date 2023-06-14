import React from 'react'
import {BsDot} from "react-icons/bs"

export default function SharedPost({sharedPost}) {
  return (
    <div className='flex flex-col'>
         <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-4'>
                    {sharedPost?.profile_picture?
                        <img 
                        src={sharedPost?.profile_picture}
                        className="h-6 w-6 rounded-full"
                    />
                    :
                    <h5 className='rounded-full p-2 bg-blue-600 text-sm text-white flex items-center justify-center w-8 h-8 '>
                        {sharedPost?.name.slice(0,1)}

                    </h5>

                    }
                        
                        <div className='flex flex-col'>
                            <div className='flex items-center space-x-1'>
                            <h5 className='font-semibold  text-slate-700 '>{sharedPost?.name}</h5>
                            <BsDot className='text-xl text-slate-500'/>
                            <h5 className='text-xs text-slate-500'>11m</h5>

                            </div>
                        
                            <h5 className='text-xs  text-slate-400'>
                                {sharedPost?.course_of_study}
                            </h5>

                        </div>


                    </div>

                    
                 </div>

                 <div className='flex flex-col'> 
                        {/* <img src= {post?.user?.course_of_study}/> */}
                        <p> 

                        </p>
                    </div>



    </div>
  )
}
