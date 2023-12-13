import { Model } from "mongoose";
import { UserRepository } from "./User-repository";
import { UserModel } from "./Users-domain";
import { UserService } from "./User-service";
import { UserController } from "./User-Controller";


export function makeUser(){
    const repository= new UserRepository(UserModel)
    const service = new UserService(repository)
    const controller = new UserController(service)
    return controller 
}

export const userModule = makeUser()

