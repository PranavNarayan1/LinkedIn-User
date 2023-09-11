import { Request, Response } from "express";
import {userLogoutService} from "../services/user-logout.services"


export const userlogout = async(req: Request, res: Response) =>{

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result  =await userLogoutService(token);
        if(result){
            res.status(200).json({message: "user logged out successfully"});
        }else{
            res.status(400).json({message: "unable to logout user"})
        }
        
    } catch (error) {
        console.error("There is some error in userLogout controller\n",error.message);
    }

}
