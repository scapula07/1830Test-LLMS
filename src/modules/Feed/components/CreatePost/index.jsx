import React from 'react'
import {TfiLayoutMediaOverlayAlt} from "react-icons/tfi"
import {BsEmojiSmile} from "react-icons/bs"
import Button from '../Button'

export default function CreatePost({user}) {
  return (
    <div className='w-full flex flex-col space-y-6 py-6 px-6 rounded-lg shadow-lg bg-white'>
        <div className='flex space-x-3'>
             <img 
                src={user?.data?.profile_picture}
                className='h-7 w-7 rounded-full'
                />  
                <textarea 
                    placeholder="What's happening?"
                    className='border-0 outline-none w-1/2 text-sm text-slate-500 '
                />

          </div>
          <div className='flex items-center justify-between'> 
               <div className='flex items-center space-x-8'>
                  {[
                    { icon:<TfiLayoutMediaOverlayAlt />,
                      name:"Media"
                    },
                    { icon:<BsEmojiSmile />,
                       name:"Feeling"
                     }
                  ].map((action)=>{
                    return(
                        <div className='flex items-center space-x-3 '>
                            <h5 className='text-slate-500 hover:text-slate-800 text-lg font-semibold'>{action?.icon}</h5>
                            <h5 className='text-slate-500 hover:text-slate-800 text-sm font-light'>{action?.name}</h5>

                        </div>
                    )
                  })
                   }
               </div>

               <Button 
                name="Post"
                cname="bg-blue-600 hover:bg-blue-500 hover:text-slate-700 text-white px-6 py-1 rounded-lg shadow-lg"
               />

            
          </div>

    </div>
  )
}
