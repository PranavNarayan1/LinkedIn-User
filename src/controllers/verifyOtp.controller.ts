import { Request, Response } from "express";
import { verifyOtpServices } from "../services/verifyOtp.services";
import { log } from "console";

export const verifyOtpController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const {otp,password} = req.body;
        
        const result = await verifyOtpServices(token,otp,password);
        if(result){
            res.status(200).json({message:"otp verified and password changed successfully"});
        }else{
            res.status(400).json({message: "otp verification failed"});
        }
    } catch (error) {
        console.error("There is the error in the verify otp controller",error.message);
    }
}