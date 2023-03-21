import { Request, Response } from "express"
import userServices from "../services/user"
import { handleHttp } from "../utils/error.handle"

const createUser=async(req:Request,res:Response)=>{
  try {

    const userCreated =  await userServices.createUser(req)
    res.send(userCreated)

  } catch (e) {
    handleHttp(res,"ERRROR_USER")
  }
 
}

const getUsers =async(req:Request,res:Response) =>{
 try {
   const users= await userServices.getUsers();
   res.send(users)
 } catch (error) {
  
 }
};

const getOneUser =async(req:Request,res:Response) =>{
  try {
    const user = await userServices.getOneUser(req.params.id);
   res.send(user)
  } catch (e) {
    
  }

}

const deleteUser = async (req:Request, res:Response) => {
  try {
    const userDeleted =await userServices.deleteUser(req.params.id) 
    res.send(userDeleted)
  } catch (e) {
    
  }
}

const updateUser =async (req:Request, res:Response)=>{
 try {
  const userUpdated = await userServices.updateUser(req.params.id,req.body)
  res.send(userUpdated)
 } catch (e) {
  
 }
}

export default {
createUser,
getUsers,
getOneUser,
deleteUser,
updateUser
}
