import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Button from '../components/Button'
import {MdOutlineEmail,MdOutlinePerson,MdEvent} from "react-icons/md"
import {AiOutlineEye} from "react-icons/ai"
import { AuthAPI } from '../_api'

export default function RegistrationView() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading, setLoading]=useState(false)

    const signUp=async ()=>{
        setLoading(true)
        setTimeout(() => {
           setLoading(false)
         }, 500);
    }

    const fields=[
        {
         name:"email",
         label:"Enter your university email",
         sample:"example@kumail.com",
         icon1:<MdOutlineEmail 
                className='text-slate-500 font-semibold text-lg'
                />,
        value:email,
        setInputState:(e)=>{
            setEmail(e.target.value)
        }
               
       },
       {
           name:"firstName",
           label:"Enter your First name",
           sample:"Ex.John",
           icon1:<MdOutlinePerson 
                    className='text-slate-500 font-semibold text-lg'
                   />,
            
         },
         {
            name:"lastName",
           label:"Enter your Last name",
           sample:"Ex.Grant",
           icon1:<MdOutlinePerson 
                    className='text-slate-500 font-semibold text-lg'
                   />,
            
         },
         {
            name:"gradYear",
           label:"Enter your Graduation year",
           sample:"2026",
           icon1:<MdEvent 
                    className='text-slate-500 font-semibold text-lg'
                   />,
            
         },
      ]

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
                      action={signUp}
                      loading={loading}
                     
 
                    />

                    <div className='flex flex-col space-y-4 w-full items-center'>
                         <div className='flex flex-col  items-center'>
                                <h5 className='text-slate-500 text-sm font-semibold'>Already have an account?
                                  <Link to="/">
                                    <span className='text-blue-600'>Login</span>
                                  </Link>
                                  
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






