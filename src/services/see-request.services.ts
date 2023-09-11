import { ConnectionModel } from "../models/connections.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import { STATUS } from "../models/connections.model";


export const seeRequestServices = async(token: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const userData: any= await ConnectionModel.find({receiver_id:decode.id, status:STATUS.pending});
        return userData;
    } catch (e) {
        console.error('There is an error in see requests services\n',e.message);
        return false;
    }
}