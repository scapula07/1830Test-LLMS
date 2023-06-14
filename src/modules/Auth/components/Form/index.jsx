import React from 'react'

export default function Form(props) {
   
   
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
             
              />
             <h5>{props.field?.icon2}</h5>

           </div>
          
     </div>
  )
}
