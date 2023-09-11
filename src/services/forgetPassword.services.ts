import { UserModel } from "../models/user.model";
import { userForgetPasswordMailGeneration } from "../utils/email.verification";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import { generateOtp } from "../utils/otp_generation";
import redisClient from '../databases/redis'




export const forgetPasswordServices = async(token: string) => {
    
    try {
        const decode: any = decodeAccessJwtToken(token);
        const userData: any = await UserModel.findOne({_id: decode.id});
        const otp: number= await generateOtp();
        await redisClient.setEx(`${userData.email}`,5*60,`${otp}`)
        const result = await userForgetPasswordMailGeneration(userData.email, otp)
        if(result){
            return true;
        }
        return false;

    } catch (error) {
        console.log("There is an error in forget password services",error.message);
    }

}