import axios from "axios"

export const api = axios.create({
  withCredentials: false,
  baseURL: "http://ec2-52-54-242-159.compute-1.amazonaws.com/api/",
})


const errorHandler = (error) => {
  const statusCode = error.response?.status


  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})
