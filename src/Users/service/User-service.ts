import { CreateUserDto } from "../Model/User-dto/Create-user-dto";
import { IUserRepository } from "../repository/User-repository-Interface/User-repository-Interface";
import { CreateUserResponse, IUserService } from "./User-service-interface/User-service-interface";
import { User } from "../Model/Users-domain";
import bcrypt from 'bcrypt'
import { LoginDto } from "../Model/User-dto/Login-Dto";
import jwt from 'jsonwebtoken'


export class UserService implements IUserService {
    constructor(private userRepository:IUserRepository){}

    async create(dataUser: CreateUserDto):Promise<User | CreateUserResponse>{
      
       /*  const userAlreadyExist = await this.userRepository.findByEmail(dataUser.email)
        if(userAlreadyExist){
            throw new Error("Usuário já existe")
        } */
        dataUser.password = await this.hashPassword(dataUser.password)
        const result = await this.userRepository.create(dataUser)
        return result
    }

    async findByEmail(email: string){
        const findEmail = await this.userRepository.findByEmail(email)
        if(!findEmail){
            console.log(findEmail)
            throw new Error("Usuário não encontrado com esse email")
        }
        return findEmail
    }
    async getAll(){
        const allget = await this.userRepository.getAll()
        if(!allget){
            throw new Error("Nenhum usuário encontrado")
        }
        return allget
    }
    private async hashPassword(password:string):Promise<string>{
        const jumps = 10
        const hashedPassword = bcrypt.hashSync(password, jumps)
        return hashedPassword
    }
    private async verifyPassword (password:string,truePassword:string):Promise<boolean>{
        const result = bcrypt.compareSync(password,truePassword)
        return result 
    }
    async login(dataLogin:LoginDto):Promise<string>{
        const user = await this.userRepository.findByEmail(dataLogin.email)
        if(!user){
            throw new Error("Usuário ou senha inválido")
        }
        const isPasswordValid = await this.verifyPassword(dataLogin.password, user.password)
        if(!isPasswordValid){
            throw new Error("Usuário ou senha inválido")
        }
        const payload = {
            ...user,
        }
        const secretKey = process.env.JWT_SECRET_KEY as string
        const options = {
            expiresIn: '1d'
        }
        const token = jwt.sign(payload, secretKey, options)
        return token
    }
    
    
}
