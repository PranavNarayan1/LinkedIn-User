import { decodeAccessJwtToken } from "../utils/generateJwt";
import redisClient from '../databases/redis'
import { UserModel } from "../models/user.model";
import { generatePasswordHash } from "../utils/passwod.hashing";



export const verifyOtpServices = async(token: any, otp: string, passwordToUpdate: string ) => {
    try {
        const decode:any = decodeAccessJwtToken(token);
        const userData = await UserModel.findOne({_id:decode.id})
        console.log(userData);
        const otpFromRedis = await redisClient.get(`${userData.email}`)
        if(otpFromRedis === otp){
            const hashedPassword = await generatePasswordHash(passwordToUpdate);
            await UserModel.updateOne({email:userData.email},{$set:{password:hashedPassword}});
            return true
        }
        return false;

    } catch (error) {
        console.error("There is error in verify otp services",error);
    }
}