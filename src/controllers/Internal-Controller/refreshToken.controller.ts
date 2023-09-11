import { Request, Response } from "express"
import { createAccessToken, createRefreshToken, decodeJwtToken } from "../../utils/generateJwt";
import { TokenModel } from "../../models/tokens.model";


export const refreshTokenVerify = async(req: Request, res: Response) => {

    const token = req.headers.authorization?.replace("Bearer ", "");
    const decode:any = decodeJwtToken(token);
    let jtiFromRefreshToken  = decode.jti;
    const userData = await TokenModel.findOne({refresh_token_id:jtiFromRefreshToken});
    let jtiFromDb = userData.refresh_token_id;
    if(jtiFromRefreshToken === jtiFromDb){
        let accessToken = createAccessToken(decode.id);
        const result = accessToken.accessToken
        await TokenModel.findOneAndUpdate({refresh_token_id:jtiFromRefreshToken},{$set:{access_token_id:accessToken.accessTokenId}});
        res.status(200).json({message: "token refreshed successfully", result});
    }
}