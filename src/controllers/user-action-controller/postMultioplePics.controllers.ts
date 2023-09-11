import { Request,Response } from "express";
import { postPicsService } from "../../services/postPics.services";


export const postPicsController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const payload = req.files;
        const result = await postPicsService(token, payload);
        if(result){
            res.status(200).json({message: "pictures uploaded successfully"});
        }else{
            res.status(400).json({message:"can not upload pictures at the moment"});
        }
    } catch (error) {
        console.error('There is some error in post pics controller\n',error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}