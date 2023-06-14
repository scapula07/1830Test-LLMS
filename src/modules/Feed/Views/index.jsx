import React from 'react'
import AllPosts from './AllPosts.jsx'
import Connections from './Connections/index.jsx'
import Courses from './Courses/index.jsx'
import { UserState } from '../../../recoil/globalState.js'
import { useRecoilValue } from 'recoil'

export default function Feed() {
   const user=useRecoilValue(UserState)
  return (
    <div className='h-screen py-8 w-full '>
        <div className='flex h-full '>
            <div className='h-full w-4/5 px-8'>
              <AllPosts 
                user={user}
               />

            </div>
             <div className='flex flex-col h-full bg-white shadow-xl w-1/3 '>
                 <Courses />
                 <Connections />
             </div>

         </div>

    </div>
  )
}
