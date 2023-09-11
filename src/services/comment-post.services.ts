import { ObjectId } from "mongoose";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import { PostModel } from "../models/posts.model";
import { CommentModel } from "../models/comments.model";


export const addCommentServices = async (token: any, postId: ObjectId, content: String, parentId: string) => {

    try {
        const decode: any = decodeAccessJwtToken(token);
        const isPostExist: any = await PostModel.findById({_id:postId});
        if(!isPostExist){
            return 0;
        }
        let count = isPostExist.comments_count + 1;
        await CommentModel.create({post_id:postId,user_id:decode.id,content:content});
        await PostModel.findOneAndUpdate({_id:postId,user_id:decode.id},{$set: {comments_count:count}});
        return true;
    } catch (error) {
        console.error('There is an error in add comment services\n',error.message);
        return 0;
    }

}