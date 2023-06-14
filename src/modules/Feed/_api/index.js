import axios from "axios";
import { api } from "../../../api/axios.config";
import { defineCancelApiObject } from "../../../api/axios.utils";

const baseUrl='http://ec2-52-54-242-159.compute-1.amazonaws.com/api'

export const FeedAPI = {
    getPosts: async function (token) {
      const url=`${baseUrl}/posts/feed?page=1`
      const config = {
        headers:{
           'Content-Type': 'application/json',
           Authorization: `Bearer ${token}`
          },
           };
      
      try{
       const response= await axios.get(
          url,
          config
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },

     register: async function () {}
  }
  
  const cancelApiObject = defineCancelApiObject(FeedAPI)

