import { Router } from 'express';
import userController from '../controllers/user'
const router = Router()

router 
   .post("/",userController.createUser)
   .get("/",userController.getUsers)
   .get("/:id",userController.getOneUser)
   .put("/:id",userController.updateUser)
   .delete("/:id",userController.deleteUser)

export {router}