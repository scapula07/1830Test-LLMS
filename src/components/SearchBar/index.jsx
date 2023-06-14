import React from 'react'
import {BiSearch} from "react-icons/bi"

export default function SearchBar() {
  return (
    <div className='flex items-center space-x-4 px-4 py-2 border border-blue-400 rounded-lg w-3/4'>
         <BiSearch
           className='text-white text-2xl font-semibold'
         />
         <input 
            placeholder='Search'
            className='text-white outline-none w-full border-0 bg-blue-600'
            style={{background:"#0471ef",color:"white"}}
         
          />

    </div>
  )
}
