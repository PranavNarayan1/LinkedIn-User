import { UserSession } from "../models/sessions.model";
import { UserModel } from "../models/user.model";
import { userForgetPasswordMailGeneration } from "../utils/email.verification";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import { generateOtp } from "../utils/otp_generation";



export const resetPAsswordServices = async(token: any, req: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const userData: any = await UserModel.findOne({_id:decode.id});
        const sessionData: any = await UserSession.findOne({user_id:decode.id});
        if(!sessionData.is_active){
            return false;
        }
        const otp = await generateOtp();
        const result = await userForgetPasswordMailGeneration(userData.email,otp);
        if(!result){
            return false;
        }
        return true;

    } catch (error) {
        console.error('There is aome error in reset password services\n',error.message);
        return false;
    }
}