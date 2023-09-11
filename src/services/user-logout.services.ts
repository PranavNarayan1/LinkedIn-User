import { decodeAccessJwtToken } from "../utils/generateJwt";
import { TokenModel } from "../models/tokens.model";
import { UserSession } from "../models/sessions.model";



export const userLogoutService = async(token: string) => {
    try {

        const decode: any = decodeAccessJwtToken(token);
        await TokenModel.findOneAndDelete({access_token_id:decode.jti});
        await UserSession.findOneAndUpdate({user_id:decode.id},{$set:{is_active:false}});
        return true;

    } catch (error) {
        console.log("There is some error in logout service",error.message);
        return false;
    }
}
