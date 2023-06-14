import React from 'react'
import { useRecoilValue } from 'recoil'
import SearchBar from '../SearchBar'
import {MdNotifications,MdMessage} from "react-icons/md"
import { UserState } from '../../recoil/globalState'

export default function Header() {
    const user =useRecoilValue(UserState)
  return (
      <div className='bg-blue-600 h-full w-full'>
          <div className='flex items-center'>
              <div className='w-1/2'>
                 <SearchBar />

              </div>
               <div className='w-1/2'>
                    <div className='flex items-center justify-end space-x-4'>
                       <MdNotifications 
                         className='text-white font-semibold text-xl'
                        />
                      <MdMessage 
                        className='text-white font-semibold text-xl'
                      />

                      <img 
                         src={user?.data?.profile_picture}
                         className="w-7 h-7 rounded-full"
                      />


                    </div>

               </div>

          </div>

       </div>
   )
}
