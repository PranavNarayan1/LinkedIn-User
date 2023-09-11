import { Request,Response } from "express";
import { addCommentServices } from "../../services/comment-post.services";

export const addCommentController = async(req: Request, res: Response) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const {postId, content, parentId} = req.body;
        const result = await addCommentServices(token, postId, content, parentId);
        if(!result){
            res.status(400).json({message: "comment not added try again after some time"});
        }else{
            res.status(200).json({message: "comment added successfully"});
        }
    } catch (error) {
        console.error('There is an error in add comments controller\n',error.message);
        res.status(500).json({message: 'internal server error'});
    }

}