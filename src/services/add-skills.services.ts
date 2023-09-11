import { UserModel, userSchema } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";




export const addSkillsServices = async(token: any, req: any) => {

    try {
        const decode: any = decodeAccessJwtToken(token);
        const {skills} = req;
        const userData = await UserModel.findOne({_id:decode.id})
        if(!userData){
            return;
        }
        await UserModel.findOneAndUpdate({_id:decode.id},{$set:{skills:skills}});
        return true;
    } catch (e) {
        console.error('There is an error in add skills services\n',e.message);
        return false;
    }

}