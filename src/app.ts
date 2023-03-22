import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routers'
import './config/mongo'
import multer from 'multer'
import './config/cloudinary'

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(multer({storage:multer.memoryStorage()}).single('video'))
app.use(router)

app.listen(PORT, () => {
  console.log('listo el backend junior mmgv, y con typescript' + ' ' + PORT)
})

