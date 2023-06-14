import React,{useState} from 'react'
import { validate } from '../../utils/validation'

export default function Form(props) {
   const [error,setErrors]=useState({})
   console.log(error)
  return (
      <div className='w-full flex flex-col space-y-3'>
          <label className='text-slate-500 font-semibold'>{props.field?.label}</label>
           <div className='flex items-center space-x-3  border border-slate-500 hover:border-blue-500 px-4 py-2 rounded-lg'>
             <h5>{props.field?.icon1}</h5>
             <input 
                 placeholder={props.field?.sample}
                 className="outline-none border-0 w-full text-slate-500"
                 type="text"
                 name={props?.field?.name}
                 value={props?.field?.value}
                 onChange={(e)=>props?.field?.setInputState(e)}
                 onKeyPress={(e)=> validate(e,setErrors)}
                 onKeyDown={(e)=> validate(e,setErrors)}
             
              />

             <h5>{props.field?.icon2}</h5>

           </div>
           {error.email?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{error.email}</h5>:null}
           {error.password?<h5 className='text-sm w-full items-start flex text-red-700 font-light'>{error.password}</h5>:null}
          
     </div>
  )
}
