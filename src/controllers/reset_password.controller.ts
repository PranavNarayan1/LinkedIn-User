import { Request,Response } from "express";
import { resetPAsswordServices } from "../services/reset-password.services";

export const resetPasswordControllers = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await resetPAsswordServices(token, req.body);
        if(result){
            res.status(201).json({message: "reset otp was sent to the registered email"});
        }else{
            res.status(400).json({message: "Cannot reset password for the moment"});
        }
    } catch (error) {
        console.error('There is some error in reset password controller\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}