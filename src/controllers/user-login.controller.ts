import { Request, Response } from "express";
import { checkUserEmail } from "../services/user-login.services";



export const loginUsingMail = async(req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        let result = await checkUserEmail(email, password);
        if(!result){
            res.status(400).json({message: "error in logging in"});
        }else{
            let accessToken = result.accessToken.accessToken
            let refreshToken = result.refreshToken.refreshToken
            let resultTosend = {accessToken, refreshToken}
            res.status(200).json({message: "user logged in successfully",resultTosend});

        }

    } catch (error) {
        console.error('error==============',error);
    }
}