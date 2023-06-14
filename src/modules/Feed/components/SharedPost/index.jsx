import React from 'react'
import {BsDot} from "react-icons/bs"
import { calculateTimeOfPost } from '../../util.js/calculateTimeOfPost'
export default function SharedPost({sharedPost}) {
    const time=calculateTimeOfPost(sharedPost?.shared_by?.created_at)
  return (
    <div className='flex flex-col'>
         <div className='flex items-center justify-between w-full'>
                <div className='flex items-center space-x-4'>
                    {sharedPost?.shared_by?.profile_picture?
                        <img 
                        src={sharedPost?.shared_by?.profile_picture}
                        className="h-6 w-6 rounded-full"
                    />
                    :
                    <h5 className='rounded-full p-2 bg-blue-600 text-sm text-white flex items-center justify-center w-8 h-8 '>
                        {sharedPost?.shared_by?.name.slice(0,1)}

                    </h5>

                    }
                        
                        <div className='flex flex-col'>
                            <div className='flex items-center space-x-1'>
                            <h5 className='font-semibold  text-slate-700 '>{sharedPost?.shared_by?.name}</h5>
                            <BsDot className='text-xl text-slate-500'/>
                            <h5 className='text-xs text-slate-500'>{time}</h5>

                            </div>
                        
                            <h5 className='text-xs  text-slate-400'>
                                {sharedPost?.course_of_study}
                            </h5>

                        </div>


                    </div>

                    
                 </div>

                 <div className='flex flex-col space-y-3 py-2'> 
                      {sharedPost?.image&&
                          <img src= {sharedPost?.image} className="h-44 w-full rounded-lg"/>
                        }
                       
                    <p className='text-slate-500 text-sm font-semibold px-4'> 
                        {sharedPost?.body}

                    </p>
                    </div>



    </div>
  )
}
