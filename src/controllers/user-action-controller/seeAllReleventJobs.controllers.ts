import { Request,Response } from "express";
import { seeAllJobsServices } from "../../services/seeAllJobs.services";

export const seeAllJobsControllers = async(req: Request,res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await seeAllJobsServices(token);
        console.log(result);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(400).json({message:"error in finding"});
        }
    } catch (error) {
        console.error('There is some error in see all jobs controller\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}