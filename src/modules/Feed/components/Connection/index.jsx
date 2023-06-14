import React from 'react'

export default function Connection({connect}) {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
            <img
              src={connect?.img} 
              className="h-8 w-8 rounded-full"
              />
             <h5 className=' font-semibold text-slate-600'>{connect?.name}</h5>
        </div>

    </div>
  )
}
