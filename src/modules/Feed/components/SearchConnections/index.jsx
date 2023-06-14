import React from 'react'
import {BiSearch} from "react-icons/bi"


export default function SearchConnection({searchQuery,setQuery}) {
  return (
    <div className='flex items-center space-x-4 px-4 py-2 border  rounded-lg w-full'>
         <BiSearch
           className='text-slate-500 text-2xl font-semibold'
         />
         <input 
            placeholder='Search connections'
            className='text-slate-500 outline-none w-full border-0 '
            name="searchQuery"
            value={searchQuery}
            onChange={(e)=>setQuery(e.target.value)}
          />

    </div>
  )
}
