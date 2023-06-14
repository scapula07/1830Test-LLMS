import React,{useEffect, useState} from 'react'

export default function Button({name,cname}) {

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
        

  return (
    <button 
     className={cname}
     onClick={()=>setLoading(true)}
     
    >
    {isLoading ? 'Loading…' : name}
    </button>
  )
}
