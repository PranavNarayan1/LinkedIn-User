import { UserModel } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt"



export const addCurrentDesignationServices = async(token: any, payload: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        await UserModel.findOneAndUpdate({_id: decode.id},{$set:{working_in:payload.working_in,designation:payload.designation,start_date:payload.start_date}});
        return true;
    } catch (error) {
        console.error('There is some error in add current designation service\n',error.message);
        return false;
    }    
}