import { Request, Response } from "express";
import { likePostServices } from "../../services/like-post.services";

export const likePostController = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const result = await likePostServices(token,req.params.postId);
        if(result){
            res.status(200).json({message:"Like is added to the post"});
        }else{
            res.status(400).json({message: "can not like the post"});
        }
    } catch (error) {
        console.error('There is an error in like post controller\n',error.message);
    }
}