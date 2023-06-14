
export const validate =(e,setError)=> { 

    console.log("validating")
    console.log(e.target.name)
    if (e.target.name==="email") {
  
      console.log("validating email")
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
  

        setError({
            email:'Invalid email address'
            })
          } 
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
        setError({
            email:''
        })
        } 
        } 
        if (e.target.name==="password") {

        console.log("validating password")
        if (e.target.value.length<=6){
        console.log("top")
        setError({
            password:"Password is too short"
          })
        } 

        if (e.target.value.length>=6){
        console.log("bottom")
        setError({
           password:"Password strength is good"
        })
        } 
        } 




};
