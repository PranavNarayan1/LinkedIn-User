import { ConnectionModel } from "../models/connections.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import { STATUS } from "../models/connections.model";


export const acceptRequestServices =  async(token: any, req: any) => {
    try {
        const decode : any= decodeAccessJwtToken(token);
        await ConnectionModel.findOneAndUpdate({receiver_id:decode.id,sender_id:req.sender_id},{$set:{status:STATUS.accepted}});
        return true;
    } catch (error) {
        console.error('There is some error in accept request services',console.error);
        return false;
    }
}