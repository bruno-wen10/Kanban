import { CreateUserDto } from "./User-dto/Create-user-dto";
import { IUserRepository } from "./User-repository-Interface/User-repository-Interface";
import { CreateUserResponse } from "./User-service-interface/User-service-interface";
import { User } from "./Users-domain";


export class UserService {
    constructor(private userRepository:IUserRepository){}

    async create(dataUser: CreateUserDto):Promise<User | CreateUserResponse>{
        const userAlreadyExist = await this.userRepository.findByEmail(dataUser.email)
        if(!userAlreadyExist){
            return{ error: true, message:"User already exists", status: 409}
        }

        const result = await this.userRepository.create(dataUser)
        return result
    }
    
    
}
