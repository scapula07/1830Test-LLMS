import React from 'react'

export default function Course({course}) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-3'>
          <h5 className='bg-blue-100 text-blue-600 rounded-lg p-2 font-semibold'>{course?.symbol}</h5>
          <div className='flex flex-col'>
            <h5 className='font-semibold text-slate-500'>{course?.name}</h5>
            <h5 className='font-light text-xs text-slate-500'>{course?.code}</h5>

          </div>
      </div>  
     <h5 className='text-blue-600 text-sm underline'>View</h5>
         

    </div>
  )
}
