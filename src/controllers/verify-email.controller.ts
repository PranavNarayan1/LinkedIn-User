import { Request, Response } from "express";
import { compareTokens, findByVerificationToken, findTokenInRedis } from "../services/userMailVerification.services";

export const verifyEmail = async(req: Request, res: Response) => {

    try {
        const userGivenToken = req.params.token;
        const user = await findByVerificationToken(userGivenToken);
        if(user === null){
            res.status(404).json({message: "user not found. Please try to signup again"})
        }
        const tokenFromRedis = await findTokenInRedis(`${user.email}`)
        if(!tokenFromRedis){
            res.status(404).json({message: "token not found or expired!. Try to login again"});
        }
        let result = await compareTokens(userGivenToken, tokenFromRedis,`${user.email}`)
        if(result === 1){
            res.status(200).json({messgae: "email verified successfully"});
        }else if(result === 2){
            res.status(200).json({message: 'User already verified'})
        }
        else{
            res.status(404).json({message: "mail not verified"});
        }
    } catch (error) {
        
    }

}