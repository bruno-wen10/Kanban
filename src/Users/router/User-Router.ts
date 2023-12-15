import { Router } from "express";
import {userModule} from '../factory/User-factory'
import { authMiddleware } from "../middleware/auth-middleware";

export const userRouter = Router()

userRouter.post('/user', userModule.create.bind(userModule)) // não precisa de autorização
userRouter.get('/user', authMiddleware, userModule.findByEmail.bind(userModule))
userRouter.get('/user/all', authMiddleware, userModule.getAll.bind(userModule))
userRouter.post('/login', userModule.login.bind(userModule))
