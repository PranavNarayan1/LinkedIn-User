import { Request,Response } from "express";
import { addSkillsServices } from "../../services/add-skills.services";

export const addSkillsController = async(req: Request, res: Response) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await addSkillsServices(token,req.body);
        if(!result){
            res.status(400).json({message: "currently not able to add skills please try after some time"});
        }else{
            res.status(200).json({message: 'Skills added successfully'});
        }
    } catch (error) {
        console.error('There is a error in add skills controller\n',error.message);
        res.status(500).json({message: 'Internal Server error'});
    }

}