import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col h-screen items-center space-y-6 justify-center'>
         
         <h5 className='text-blue-500 text-4xl font-bold'>Page not found</h5>
         <button className='bg-blue-500  text-white rounded-lg py-2 px-5'
           onClick={() => history.go(-1)}
         >
            Go to previous page
         </button>

    </div>
  )
}
