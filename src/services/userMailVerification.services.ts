import { UserModel } from "../models/user.model";
import redisClient from '../databases/redis'


export const findByVerificationToken = async(userGivenToken: string) => {

    try {
        const user = await UserModel.findOne({verification_token: userGivenToken});
        if(!user){
            return null;
        }
        return user;
    } catch (error) {
        console.error("error--------",error);
    }

}

export const findTokenInRedis = async(email: string) => {
    const redisToken = await redisClient.get(`${email}`)
    if(redisToken){
        return redisToken
    }
    return null;
}

export const compareTokens = async(userToken: string, redisToken: string, email: string) => {
    if(userToken === redisToken){
        let user =await UserModel.findOne({email:email});
        // let result = user.is_verified
        if(!user.is_verified){
            await UserModel.updateOne({verification_token: userToken},{$set:{is_verified: true}});
            // redisClient.del(`${email}`);
            return 1
        }
        else if(user.is_verified){
            redisClient.del(`${email}`);
            return 2;
        }

    }
    redisClient.del(`${email}`);
    return 3
}