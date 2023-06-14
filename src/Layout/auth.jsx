import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div className="h-screen bg-blue-600 w-full flex justify-center overflow-y-hidden" style={{background:"#0471ef"}}>
        <div className='h-full flex items-center px-20 w-4/5'>
            <div className='text-white w-1/2'>
               <p className='w-4/5 font-light text-lg'>A safe place for students to connect with each other,engage in transactions and succeed durinh their college career.</p>
            </div>
            <div className='w-1/2'>
                {children}
            </div>

        </div>
    </div>
  )
}
