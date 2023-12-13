import { Router } from "express";
import {userModule} from './User-factory'

export const userRouter = Router()

userRouter.post('/user', userModule.create.bind(userModule))
