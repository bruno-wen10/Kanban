import { Model } from "mongoose";
import { UserRepository } from "../repository/User-repository";
import { UserModel } from "../Model/Users-domain";
import { UserService } from "../service/User-service";
import { UserController } from "../controller/User-Controller";


export function makeUser(){
    const repository= new UserRepository(UserModel)
    const service = new UserService(repository)
    const controller = new UserController(service)
    return controller 
}

export const userModule = makeUser()

