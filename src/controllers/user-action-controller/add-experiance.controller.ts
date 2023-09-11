import { Request, Response } from "express";
import { addExperianceServices } from "../../services/add-experiance.services";



export const addExperianceController = async(req: Request, res: Response) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = addExperianceServices(token,req.body);
        if(result){
            res.status(200).json({message:"experiance added successfully"});
        }else{
            res.status(400).json({message: "can not able to add experiance for the moment please try after some time "});
        }
    } catch (error) {
        console.error('There is an error in add experiance controller\n',error.message);
        res.status(500).json({message: "Internal server error"});
    }

}