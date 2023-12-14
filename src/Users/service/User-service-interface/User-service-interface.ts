import { CreateUserDto } from "../../Model/User-dto/Create-user-dto";
import { LoginDto } from "../../Model/User-dto/Login-Dto";
import { User } from "../../Model/Users-domain";

export interface CreateUserResponse {
    error: boolean,
    message: string,
    status: number,
  }

  export interface IUserService {
    create(dataUser: CreateUserDto):Promise<User|CreateUserResponse>
    findByEmail(email:string):Promise<User>
    getAll():Promise<Array<User>>
    login(dataLogin:LoginDto):Promise<string>
    
    
  }