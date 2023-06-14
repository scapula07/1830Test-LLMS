import React from 'react'

export default function Button({action,name}) {
  return (
    <button 
     className='bg-blue-600 w-full rounded-lg py-2 text-white'
     onClick={action}
    >
        {name}
    </button>
  )
}
