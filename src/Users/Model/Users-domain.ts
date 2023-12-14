import { InferSchemaType, Model, Schema, model } from "mongoose";

/* User
- name -> string[Required, minLength(3)]
- email -> string[Unique, Required] */

export const userSchema =  new Schema({
    name:{type:String, required:true, minLength:3},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true, minlength:5}
}, {timestamps:true})

export type User = InferSchemaType<typeof userSchema>

export const UserModel: Model<User>= model('User', userSchema)
