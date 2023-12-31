import axios from "axios";
import { api } from "../../../api/axios.config";
import { defineCancelApiObject } from "../../../api/axios.utils";

const baseUrl='http://ec2-52-54-242-159.compute-1.amazonaws.com/api'

// export const AuthAPI = {
//     login: async function (loginDetails) {
//       const url=`${baseUrl}/auth/login`
//       const data=loginDetails
//       const config = {
//         headers:{
//            'Content-Type': 'application/json',
//           },
//            };
      
//       try{
//        const response= await axios.post(
//           url,
//           data,
//           config
//           )
//         return response;
//        }catch(e){
//          console.log(e)
//          }
 
//      },

//      register: async function () {}
//   }
  
//   const cancelApiObject = defineCancelApiObject( AuthAPI)


export const AuthAPI = {
  
    login: async function (loginDetails) {
      const url=`${baseUrl}/auth/login`
      const data=loginDetails
        
        try{
            const response= await fetch( url,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
              },
              body: JSON.stringify(data),

          })

          if (!response.ok) {
            throw new Error('Request failed');
          }

          const responseData = await response.json();
          return responseData;

  

        }catch(e){
          console.log(e)
          }
  
      },

     register: async function () {}
  }

