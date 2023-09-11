import { Request, Response } from "express";
import { forgetPasswordServices } from "../services/forgetPassword.services";

export const forgetPasswordController = async(req: Request, res: Response) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = forgetPasswordServices(token);
        if(result){
            res.status(200).json({message: "success"});
        }else{
            res.status(400).json({message: "error"});
        }
    } catch (error) {
        console.error("Error in forget password controller\n",error.message);
    }

}