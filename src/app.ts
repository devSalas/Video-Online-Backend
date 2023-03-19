import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routers'
import './config/mongo'
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log('listo el backend junior mmgv, y con typescript' + ' ' + PORT)
})

