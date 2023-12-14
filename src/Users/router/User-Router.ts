import { Router } from "express";
import {userModule} from '../factory/User-factory'

export const userRouter = Router()

userRouter.post('/user', userModule.create.bind(userModule))
userRouter.get('/user', userModule.findByEmail.bind(userModule))
userRouter.get('/user/all', userModule.getAll.bind(userModule))
