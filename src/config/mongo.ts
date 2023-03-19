import "dotenv/config"
import {connect} from 'mongoose'


connect(process.env.URI_MONGO!)
.then((res)=>{
  console.log("all ok")
})
