import React from 'react'
import Header from '../components/Header'
import SideNavs from '../components/SideNavs'
import Footer from '../components/Footer'


export default function Layout({children}) {
  return (
      <div className="relative w-screen overflow-x-hidden h-screen overflow-y-hidden" >
            <div className='fixed w-full py-6 px-10 z-20 bg-blue-600' style={{background:"#0471ef"}} >
                <Header />
            </div>

           <div className="flex" >
                 <SideNavs />
                 <div className='w-full py-20'>
                   {children}
                 </div>
              
            </div>
            {/* <div className='w-full py-4'>
               <Footer />

            </div> */}

       </div>
    )
}
