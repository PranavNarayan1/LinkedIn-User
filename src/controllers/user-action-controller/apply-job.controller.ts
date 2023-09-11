import { Request,Response } from "express";
import { applyJobService } from "../../services/apply-job.services";

export const applyJobController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await applyJobService(token, req.body);
        if(result){
            res.status(200).json({message: "You have successfully applied on job"});
        }else{
            res.status(400).json({message: "Unable to apply"});
        }
    } catch (error) {
        console.error('There is some error in apply job controller\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}