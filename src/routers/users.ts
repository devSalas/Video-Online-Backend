import { Router } from 'express';
/* import { pool } from '../config/mysql'; */

const router = Router()

router.get("/",async(req,res)=>{
 res.json({message:"home users"})
})
export {router}