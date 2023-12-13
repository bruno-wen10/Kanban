import express from 'express' 
import { env } from './Config/env'
import { userRouter } from './Users/User-Router'
import {MongooseConfig} from './Config/connection'
import dotenv from 'dotenv'
dotenv.config()
MongooseConfig.initiAlizeDatabase()

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(env.PORT, ()=>console.log("🌝 Server is running"))
export {app}