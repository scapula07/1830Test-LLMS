import React,{useState} from 'react'
import SearchConnection from '../../components/SearchConnections'
import Connection from '../../components/Connection'
import { connections } from '../../store/connections'
import Fuse from "fuse.js"




export default function Connections() {
    const [searchQuery,setQuery]=useState("")
    const fuse =new Fuse([...connections],{
        keys:["name"]
      })
   const result=fuse.search(searchQuery)
  console.log(result,"result")
  return (
    <div className="py-4 px-6 w-full">
            <div className='flex items-center justify-between w-full border-b '>
                <h5 className='text-lg font-semibold text-slate-600'>Connections</h5>
                <h5 className='text-blue-600 font-semibold text-sm'>See all</h5>
            </div>
            <div className='py-6'>
                <SearchConnection
                   searchQuery={searchQuery}
                   setQuery={setQuery}
                  />
                
            </div> 
            <div className='flex flex-col space-y-4 overflow-y-scroll h-72'>
                {result.length ===0?
                   <>
                  {connections.map((connect)=>{
                    return(
                    <Connection connect={connect} />
                    )
                     })
                  }
                   </>
                   :
                   <>
                {result.map((connect)=>{
                    return(
                    <Connection connect={connect?.item} />
                    )
                     })
                    }
                   </>

                }
                
            </div>
    
    </div>
  )
}
