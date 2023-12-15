import { Request, Response } from "express";
import { IUserService } from "../service/User-service-interface/User-service-interface";

export class UserController {
    constructor(private service:IUserService){}

    async create(req:Request, res:Response){
        try {
            const{body}=req

            const result = await this.service.create(body) 
            res.status(201).json(result)
        } catch (error:any) {
            res.status(500).json(error)            
        }
    }
    async findByEmail(req:Request, res:Response){
        try {
            const {email} = req.query
            const result = await this.service.findByEmail(email as string)
            res.status(200).json(result)
        } catch (error:any) {
            res.status(500).json(error)                        
        }
    }
    async getAll(_req:Request, res:Response){
        try {
            const result = await this.service.getAll()
            res.status(200).json(result)
        } catch (error:any) {
            res.status(500).json(error)
        }        
    }
    async login(req: Request, res: Response){
        try {
            const {body}= req
            const result = await this.service.login(body)
            res.status(200).json(result)            
        } catch (error:any) {
            res.status(401).json(error)            
        }
    }
}