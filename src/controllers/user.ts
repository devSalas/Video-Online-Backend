import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getUsers=(req:Request,res:Response)=>{
  try {
    
  } catch (e) {
    handleHttp(res,"ERRROR_USER")
  }
 
}


export {
getUsers
}