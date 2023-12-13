import { Model } from "mongoose";
import { User } from "./Users-domain";
import { CreateUserDto } from "./User-dto/Create-user-dto";
import { IUserRepository } from "./User-repository-Interface/User-repository-Interface";


export class UserRepository implements IUserRepository {
    constructor(private userModel:Model<User>){}

    async findByEmail(email:string){
        const findEamil = await this.userModel.findOne({email})
        if(!findEamil){
            throw new Error('Email não encontrado')
        }
        return findEamil
    }
    async create(dataUser:CreateUserDto): Promise<User>{
        const userCreated = await this.userModel.create(dataUser)
        if(!userCreated){
            throw new Error('Não foi possível criar um usuario')
        }
        return userCreated 
    }
}