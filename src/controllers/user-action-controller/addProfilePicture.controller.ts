import { Request,Response } from "express";
import { addProfilePicService } from "../../services/addPicture.services";

export const addProfilePictureController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const payload = req.file;
        const result = addProfilePicService(token, payload);
        if(result){
            res.status(200).json({message: "profile picture added successfully"});
        }else{
            res.status(400).json({message: "can not set profile pic"});
        }
    } catch (error) {
        console.error('There is some error in add profile picture controllers\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}