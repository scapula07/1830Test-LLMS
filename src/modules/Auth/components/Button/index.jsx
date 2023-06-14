import React from 'react'
import { BeatLoader } from 'react-spinners';


export default function Button({action,name,loading}) {
    
  return (
    <button 
     className='bg-blue-600 w-full rounded-lg py-2 text-white'
     style={{background:"#0471ef"}}
     onClick={action}
    >
    {loading&&<BeatLoader color="white" loading={loading}/>}
                
    {!loading&&  <span> {name}</span>}
       
    </button>
  )
}
