import { Request,Response } from "express";
import { acceptRequestServices } from "../../services/accept-request.services";

export const acceptRequestController = async(req: Request,res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await acceptRequestServices(token, req.body);
        if(result){
            res.status(200).json({message:"Request accepted successfully"});
        }else{
            res.status(400).json({message: "Not able to process  the request"});
        }
    } catch (error) {
        console.error("There is an error in accept request controller",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}