import { Model } from "mongoose";
import { User } from "../Model/Users-domain";
import { CreateUserDto } from "../Model/User-dto/Create-user-dto";
import { IUserRepository } from "./User-repository-Interface/User-repository-Interface";


export class UserRepository implements IUserRepository {
    constructor(private userModel:Model<User>){}

    async findByEmail(email:string){
        console.log(email)
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
    async getAll(){
        const allUsers = await this.userModel.find()

        if(!allUsers || allUsers.length === 0){
            throw new Error("Nenhum usuário encontrado")
        }

        return allUsers
    }
}