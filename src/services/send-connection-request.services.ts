import { ConnectionModel } from "../models/connections.model";
import { UserModel } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";


export const sendConnectionRequestServices = async(token: any, req: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const isReceiverExist = await UserModel.findOne({_id:req.receiverId});
        if(!isReceiverExist){
            return false;
        }
        await ConnectionModel.create({sender_id:decode.id,receiver_id:req.receiverId});
        return true;
    } catch (error) {
        console.error('There is some error in send connection request services\n',error.message);
        return false;
    }
}