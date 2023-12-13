import { Request, Response } from "express";
import { IUserService } from "./User-service-interface/User-service-interface";

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
}