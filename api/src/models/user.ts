import { Document, model, Schema } from "mongoose";


export interface Iuser extends Document{
    name: string,
    email: string,
    role: string,
    enabled: boolean,
    followeds?: string[],
    posts?:string[],
    liked?:string[],
    events?:string[],
    image?: string,
    follows?:string[]
}
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required:false
    },
    role:{
        type: String,
        required: true,
    },
    enabled:{
        type:Boolean,
        required:true
    },
    email:{
        type: String,
        required:true,
        trim: true
    },
    followeds:[],
    follows:[],
    posts:[],
    liked:[],
    events:[]
});

const User = model<Iuser>('users', userSchema);
module.exports = User



