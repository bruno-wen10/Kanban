import { CreateUserDto } from "../User-dto/Create-user-dto";
import { User } from "../Users-domain";

export interface CreateUserResponse {
    error: boolean,
    message: string,
    status: number,
  }

  export interface IUserService {
    create(dataUser: CreateUserDto):Promise<User|CreateUserResponse>
  }