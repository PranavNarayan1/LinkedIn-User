import { Request, Response } from "express";
import { sendConnectionRequestServices } from "../../services/send-connection-request.services";

export const sendConnectionRequestController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = sendConnectionRequestServices(token,req.body);
        if(result){
            res.status(200).json({message:"Request Sent Successfully"});
        }else{
            res.status(400).json({message:"can not sent request for the moment"});
        }
    } catch (error) {
        console.log('There is some error in send connection request controller\n',error.message);
        res.status(500).json({message:"internal server error"});
    }
}