import { Request, Response } from "express";
import { addEducationServices } from "../../services/add-education.services";

export const addEducationController = async(req: Request,res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await addEducationServices(token,req.body);
        if(!result){
            res.status(400).json({message: "can not add education for the moment please try again after some time"});
        }else{
            res.status(200).json({message:"education added successfully"});
        }
    } catch (error) {
        console.error('There is some error in add education controller\n',error.message);
        res.status(500).json({message: 'Internal server error'});
    }
}