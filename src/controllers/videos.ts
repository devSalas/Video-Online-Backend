import { Request, Response } from "express";
import { Router } from "express";
import videoModel from "../models/videos";

const router = Router()

router.get('/',async(req:Request,res:Response)=>{

    const videos= await videoModel.find()

    if (!videos) return res.send(403).send('No hay ningun video ')

    res.json({videos})
})

router.post('/',async(req:Request,res:Response)=>{

    const user = req.body

    if (!user) return res.status(403).send('Bad request')

    const video=await videoModel.findOne({_id:user.id})

    if (video) return res.status(403).send('Bad request')

    

    const newVideo= videoModel.create(...user)

    res.send('Video creado')

})

router.get('/:id', async (req: Request, res: Response) => {

    const id = req.params

    const video = await videoModel.findOne({_id:id})

    if (!video) return res.status(404).send('NOT FOUND')
    
    res.json({video})


})




export { router }