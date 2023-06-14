import React from 'react'
import SearchConnection from '../../components/SearchConnections'
import Connection from '../../components/Connection'
import { connections } from '../../store/connections'




export default function Connections() {
  return (
    <div className="py-4 px-6 w-full">
            <div className='flex items-center justify-between w-full border-b '>
                <h5 className='text-lg font-semibold text-slate-600'>Connections</h5>
                <h5 className='text-blue-600 font-semibold text-sm'>See all</h5>
            </div>
            <div className='py-6'>
                <SearchConnection />
                
            </div> 
            <div className='flex flex-col space-y-4 overflow-y-scroll h-72'>
                {connections.map((connect)=>{
                     return(
                       <Connection connect={connect} />
                      )
                })

                }
            </div>
    
    </div>
  )
}
