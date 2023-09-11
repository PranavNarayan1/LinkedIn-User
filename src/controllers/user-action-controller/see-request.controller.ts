import { Request,Response } from "express";
import { seeRequestServices } from "../../services/see-request.services";

export const seeRequestController = async(req: Request,res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await seeRequestServices(token);
        if(result){
            res.status(200).json({result});
        }else{
            res.status(400).json({message: "can not fetch requests"});
        }
    } catch (e) {
        console.error('There is some error in see request controller\n',e.message);
        res.status(500).json({message:"Internal server error"});
    }
}