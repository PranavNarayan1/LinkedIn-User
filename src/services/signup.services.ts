
import { Date, Number } from "mongoose";
import { UserModel } from "../models/user.model";
import { generatePasswordHash } from "../utils/passwod.hashing";
import {userVerificationMailGeneration} from '../utils/email.verification'
import { v4 as uuidv4 } from "uuid";
import redisClient from '../databases/redis'



export const isUserExist = async(email : string) => {
    let data : any;
    try {
        data = await UserModel.findOne({email:email});    
        if(data){
            return {errorCode: 404, errorMessage:"user already exist"};
        }    
        
    } catch (error) {
        console.error("some error occured", error);
    }
}

export const createNewUser = async(first_name: String, last_name: String, username: String, email: string, mobile_number: Number, password: string, dob: Date) => {
    const hashedPassword = (await generatePasswordHash(password)).toString();
    console.log(typeof hashedPassword);
    const token = uuidv4();
    await userVerificationMailGeneration(email, token);
    await redisClient.setEx(`${email}`, 60 * 10, `${token}`)
    await UserModel.create({first_name, last_name, username, email, mobile_number, password:hashedPassword, dob,verification_token:token});
    return 


}
