import React,{useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import toast from 'react-hot-toast';
import Form from '../components/Form'
import Button from '../components/Button'
import {MdOutlineEmail,MdLockOutline} from "react-icons/md"

import {AiOutlineEye} from "react-icons/ai"
import { AuthAPI } from '../_api'

import axios from 'axios'

export default function LoginView() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading, setLoading]=useState(false)
   
   

  
    const navigate = useNavigate();
    
  

    const login=async ()=>{
        setLoading(true)
        const loginDetails={
            university_email:email,
            password
         }
        try{
         const res=await AuthAPI.login(loginDetails)
         console.log(res,"ress")
         localStorage.clear();
         localStorage.setItem('user',JSON.stringify({
                 token:res?.data?.token,
                 data:res?.data?.user?.user

                    }));
            if(res.data.status==="error"){
              res.data.response_code==400&&toast.error(res.data.response_message)

             }
            setTimeout(() => {
            res.status===200&&res?.data?.response_message==="success"&& navigate('/home');
            setLoading(false)
            }, 500);

        
    
        }catch(e){
            setLoading(false)
            console.log(e)
            if(e.data.response_code ===400) return toast(e.data.response_message)
         
        }
      


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
           name:"password",
           label:"Enter a password",
           sample:"Enter your password",
           icon1:<MdLockOutline 
                    className='text-slate-500 font-semibold text-lg'
                   />,
            icon2:<AiOutlineEye 
                      className='text-slate-500 font-semibold text-lg'
                   />,
            password:password,
            setInputState:(e)=>{
                setPassword(e.target.value)
            }
         },
      ]
  return (
    <div className='bg-white rounded-lg w-3/4 flex flex-col space-y-14 px-10 py-8'>
            <div className='flex flex-col space-y-2'>
               <h5 className='text-slate-500 font-bold text-2xl '>Hey, Welcome back!</h5>
               <h6 className='text-slate-500  font-light'>Continue enjoying amazing discoveries</h6>
             </div>
             <div className='flex flex-col space-y-10'>
                {fields.map((field)=>{
                    return(
                        <Form 
                         field={field}
                          />
                        )
                       }) }  
            </div>

              <div className='flex flex-col space-y-8'>
                    <Button 
                      name={"Login"}
                      action={login}
                      loading={loading}
                    />

                    <div className='flex flex-col space-y-6 w-full items-center'>
                         <div className='flex flex-col space-y-2 items-center'>
                                <h5 className='text-slate-500 text-sm font-semibold'>Don't have an account?
                                  <Link to="/register">
                                    <span className='text-blue-600'>Sign up</span>
                                  </Link>
                                   
                                </h5>
                                <Link to="/forget">
                                <h5 className='text-sm text-blue-600'>Forgot your password?</h5>
                                </Link>

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






