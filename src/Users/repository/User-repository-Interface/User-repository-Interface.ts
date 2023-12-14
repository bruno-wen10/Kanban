import { CreateUserDto } from "../../Model/User-dto/Create-user-dto"
import { User } from "../../Model/Users-domain"

export interface IUserRepository {
    findByEmail(email:string):Promise<User>
    create(dataUser:CreateUserDto):Promise<User>
    getAll():Promise<Array<User>>
}