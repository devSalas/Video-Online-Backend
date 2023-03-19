import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER  = `${__dirname}`
const router = Router();

router.get("/",(req,res)=>{res.send("home")})

const cleanFileName = (fileName:string)=>{ 
  const file = fileName.split(".").shift()
  return file
}

//funcion que permite hacer ruta dinamica, la ruta toma el nombre del archivo
readdirSync(PATH_ROUTER).filter((fileName) =>{
  const cleanName = cleanFileName(fileName)
  if(cleanFileName(fileName) != "index"){
    console.log("se esta cargando "+cleanName)
    import(`./${cleanName}`).then((moduleRouter)=>{
      router.use(`/${cleanName}`,moduleRouter.router)
    })
  }
})



export { router };
