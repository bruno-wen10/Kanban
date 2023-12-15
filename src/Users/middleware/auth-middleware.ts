import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
export const authMiddleware=(req:Request, res:Response, next:NextFunction)=>{
    const {headers}= req
    if(!headers.authorization){
        return res.status(401).json('Usuário não autorizado')
    }
    // "Bearer esçokhjgtwehóiwe654.fweg8wer7g"
    const [ , token] = headers.authorization.split(' ')
    //['Bearer', 'esçokhjgtwehóiwe654.fweg8wer7g']
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY as string)
                
    } catch (error:any) {
        return res.status(401).json('Usuário não autorizado')
    }
    next()
}