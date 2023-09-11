import { UserModel } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";



export const addProfilePicService = async(token: any, payload: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const fileData = payload.path;
        const bufferData = Buffer.from(fileData);
        await UserModel.findOneAndUpdate({_id:decode.id},{$set:{profile_picture:bufferData}});
        return true;
    } catch (error) {
        console.error('There is some error in add profile pic service\n',error.message);
        return false;
    }
}