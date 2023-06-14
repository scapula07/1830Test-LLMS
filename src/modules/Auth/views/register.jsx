import React,{useState} from 'react'
import Form from '../components/Form'
import Button from '../components/Button'
import {MdOutlineEmail,MdOutlinePerson,MdEvent} from "react-icons/md"
import {AiOutlineEye} from "react-icons/ai"

export default function RegistrationView() {

  return (
    <div className='bg-white rounded-lg w-3/4 flex flex-col space-y-14 px-10 py-8'>
            <div className='flex flex-col '>
               <h5 className='text-slate-500 font-bold text-2xl '>Join and discover more</h5>
             
             </div>
             <div className='flex flex-col space-y-5'>
                {fields.map((field)=>{
                    return(
                        <Form field={field}/>
                        )
                    })

                    }  

              </div>

              <div className='flex flex-col space-y-4'>
                    <Button 
                      name={"Next"}
                     
 
                    />

                    <div className='flex flex-col space-y-4 w-full items-center'>
                         <div className='flex flex-col  items-center'>
                                <h5 className='text-slate-500 text-sm font-semibold'>Already have an account?
                                    <span className='text-blue-600'>Login</span>
                                </h5>
                             

                           </div>

                           <div className='flex flex-col items-center'>
                                 <h5 className='text-slate-500 text-xs'>
                                    By clicking on login you've ahreed to the 
                                  </h5>
                                <h5 className='text-xs text-blue-600'>
                                    Terms of use 
                                    <span>and</span>
                                    Privacy of policy
                                </h5>


                           </div>
                         

                       </div>
 
 

                </div>


     </div>
  )
}






const fields=[
     {
      label:"Enter your university email",
      sample:"example@kumail.com",
      icon1:<MdOutlineEmail 
             className='text-slate-500 font-semibold text-lg'
             />
    },
    {
        label:"Enter your First name",
        sample:"Ex.John",
        icon1:<MdOutlinePerson 
                 className='text-slate-500 font-semibold text-lg'
                />,
         
      },
      {
        label:"Enter your Last name",
        sample:"Ex.Grant",
        icon1:<MdOutlinePerson 
                 className='text-slate-500 font-semibold text-lg'
                />,
         
      },
      {
        label:"Enter your Graduation year",
        sample:"2026",
        icon1:<MdEvent 
                 className='text-slate-500 font-semibold text-lg'
                />,
         
      },
   ]