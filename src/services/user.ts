import { Request } from "express";
import { User } from "../models/user"
const createUser=async(req:Request)=>{

    const { name,email,password,avatar,description}=req.body
    const userCreated = new User({
        name,
        email,
        password,
        avatar,
        description
    })
    const respuesta = await userCreated.save();
    return respuesta
}

const getUsers =async()=>{

  const users = await User.find({});
  return users

}
const getOneUser =async(id:String)=>{

  const user = await User.findById(id);
  return user

}

const deleteUser =async(id:String)=>{
  const user = await User.findByIdAndDelete({_id:id});
  console.log({user,id})
  return user
}

const updateUser = async(id:String,body:Object)=>{

 const user  = await User.findByIdAndUpdate(id,body,{new:true})
 return user
}



export default {
    createUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser
}