import { Request,Response } from "express";
import { addCurrentDesignationServices } from "../../services/addCurrentDesignationServices";

export const addCurrentDesignationController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const payload = req.body;
        const result = await addCurrentDesignationServices(token,payload);
        if(result){
            res.status(200).json({message: "Added successfully"});
        }else{
            res.status(400).json({message:"failed to update current designation"});
        }
    } catch (error) {
        console.error('There is some error in add designation controller\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}