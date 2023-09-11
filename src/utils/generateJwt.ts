import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid';

dotenv.config();
export const createAccessToken = (userId: ObjectId) => {
    let accessTokenId = uuidv4();
    const payload = {id: userId};
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const option = {expiresIn:"15m",jwtid:accessTokenId }
    const accessToken = jwt.sign(payload,secret,option);
    return {accessToken, accessTokenId};
}

export const createRefreshToken = (userId: ObjectId) => {
    let refreshTokenId = uuidv4();
    const payload = {id: userId};
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const option = {expiresIn:"15 days",jwtid:refreshTokenId }
    const refreshToken = jwt.sign(payload,secret,option);
    return {refreshToken, refreshTokenId};
}
 
export const decodeJwtToken = (refreshToken: string) => {

    try {
        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        return decode;
    } catch (error) {
        console.error(error.message)
    }

}

export const decodeAccessJwtToken = (accessToken: string) => {

    try {
        const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return decode;
    } catch (error) {
        console.error(error.message)
    }

}

