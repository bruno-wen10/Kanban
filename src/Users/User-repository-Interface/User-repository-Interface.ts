import { CreateUserDto } from "../User-dto/Create-user-dto"
import { User } from "../Users-domain"

export interface IUserRepository {
    findByEmail(email:string):Promise<User>
    create(dataUser:CreateUserDto):Promise<User>
}