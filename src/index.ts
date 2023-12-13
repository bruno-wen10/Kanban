import { env } from "./Config/env";
import { app } from "./server";
import {userRouter} from './Users/User-Router'
import dotenv from 'dotenv'

dotenv.config()

app.listen(env.PORT, ()=>console.log("🌝 Server is running"))