import React,{useEffect, useState} from 'react'

export default function Button({name,cname,action}) {

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
            setLoading(false);
            });
        }
        }, [isLoading]);
         
        const handleClick=()=>{
            action()
            setLoading(true)
        }
        

  return (
    <button 
     className={cname}
     onClick={handleClick}
     
    >
    {isLoading ? 'Loading…' : name}
    </button>
  )
}
