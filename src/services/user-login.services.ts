
import { UserModel } from "../models/user.model";
import { UserSession } from "../models/sessions.model";
import { checkPassword } from "../utils/passwod.hashing";
import { createAccessToken, createRefreshToken } from "../utils/generateJwt";
import { TokenModel } from "../models/tokens.model";



export const checkUserEmail = async(userEmail: string, password: string) => {
    let data: any;
    try {
        data = await UserModel.findOne({email: userEmail});
        if(!data){
            return null;
        }
        const isPasswordMatch = await checkPassword(password, data.password);
        if(!isPasswordMatch){
            return null;
        }
        if(!data.is_verified){
            return null;
        }
        let sessionExist = await UserSession.findOne({user_id:data._id});
        if(sessionExist){
            let checkStatus =  sessionExist.is_active;
            if(checkStatus){
                const accessToken =  createAccessToken(data._id);
                const refreshToken =  createRefreshToken(data._id);
                await TokenModel.create({user_id: data._id, refresh_token_id: refreshToken.refreshTokenId,access_token_id: accessToken.accessTokenId});
                return {accessToken, refreshToken};
            }else{
                await UserSession.updateOne({user_id: data._id},{$set:{is_active:true}});
                const accessToken =  createAccessToken(data._id);
                const refreshToken =  createRefreshToken(data._id);
                await TokenModel.create({user_id: data._id, refresh_token_id: refreshToken.refreshTokenId,access_token_id: accessToken.accessTokenId});
                return {accessToken, refreshToken};
            }
        }
        await UserSession.create({user_id:data._id,is_active:true});
        const accessToken =  createAccessToken(data._id);
        const refreshToken =  createRefreshToken(data._id);
        await TokenModel.create({user_id: data._id, refresh_token_id: refreshToken.refreshTokenId,access_token_id: accessToken.accessTokenId});
        return {accessToken, refreshToken};
    } catch (error) {
        console.error('Error in logging in-----------', error.message);
    }
}