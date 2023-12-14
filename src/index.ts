import express from 'express' 

import { userRouter } from './Users/router/User-Router'
import {MongooseConfig} from './Config/connection'
import dotenv from 'dotenv'
dotenv.config()

MongooseConfig.initiAlizeDatabase()

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(process.env.PORT, ()=>console.log("🌝 Server is running"))
