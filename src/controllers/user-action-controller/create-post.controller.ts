import { Request, Response } from "express";
import { createPostService } from "../../services/create-post.services";

export const createPost = async(req: Request, res: Response) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await createPostService(token,req.body.content);
        if(result){
            res.status(200).json({message: "post created successfully"});
        }else{
            res.status(400).json({message: "not able to create post please try again later in some time"});
        }
    } catch (error) {
        console.error('There is a error in post controller',error.message);
    }

}