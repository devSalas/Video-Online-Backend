import { Request, Response } from "express";
import videoModel from "../models/videos";
import {v2 as cloudinary} from 'cloudinary';
import DataURIParser from "datauri/parser";
import path from 'path'

export const getvideos=async(req:Request,res:Response)=>{

    const videos= await videoModel.find()

    if (!videos) return res.status(200).json({status:true,message:'No hay videos'})

    res.json({status:true,videos})
}

export const postvideos=async (req:Request,res:Response)=>{
    
    const uploadVideo = req.body   
    const {buffer,originalname} = req.file!
    const parser = new DataURIParser()

    if (!uploadVideo) return res.status(400).send('Bad request')

    const video=await videoModel.findOne({_id:uploadVideo.id})

    if (video) return res.status(400).send('Bad request')

    const extName=path.extname(originalname)
    
    const {content}= parser.format(extName,buffer) 

    const upload=await cloudinary.uploader.upload(content!,{folder:'videos'})

    await videoModel.create({...uploadVideo,url_video:upload.url})

    res.json({status:true,message:'upload'})

}

export const getvideosbyid =async(req: Request, res: Response)=> {

    const id = req.params

    const video = await videoModel.findOne({_id:id})

    if (!video) return res.status(403).send('NOT FOUND')
    
    res.json({status:true,video})
}




