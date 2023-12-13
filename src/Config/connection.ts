import { connect, connection, disconnect } from "mongoose";
import { env } from "./env";

export class MongooseConfig{
    static initiAlizeDatabase(){
        try {
            connection.on('Error', (erro)=> console.log('Falha na conexão. Erro: ', erro))
            .on('Open', (open)=>console.log('Conectado ao MongoDB'))
            .on('Close', (close)=>console.log('Desconectado do MongoDB'))
            connect(process.env.MONGO_URL as string)
        } catch (error:any) {
            console.log('Falha na conexão: ', error)            
            throw new Error(error)
        }
    }
    static finish(){
        disconnect()
    }
}
