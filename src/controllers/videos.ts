import { Request, Response } from "express";
import videoModel from "../models/videos";
import {v2 as cloudinary} from 'cloudinary';
import DataURIParser from "datauri/parser";
import path from 'path'

export const getvideos=async(req:Request,res:Response)=>{

    const videos= await videoModel.find()

    if (!videos) return res.send(403).send('No hay ningun video ')

    res.json({videos})
}

export const postvideos=async (req:Request,res:Response)=>{
    
    const user = req.body
    const {buffer,originalname} = req.file!
    const parser = new DataURIParser()

    if (!user) return res.status(400).send('Bad request')

    const video=await videoModel.findOne({_id:user.id})

    if (video) return res.status(400).send('Bad request')

    const extName=path.extname(originalname)
    
    const {content}= parser.format(extName,buffer) 

    const upload=await cloudinary.uploader.upload(content!,{folder:'videos'})

    await videoModel.create({...user,url_video:upload.url})

    res.send('upload')

}

export const getvideosbyid =async(req: Request, res: Response)=> {

    const id = req.params

    const video = await videoModel.findOne({_id:id})

    if (!video) return res.status(404).send('NOT FOUND')
    
    res.json({video})


}




