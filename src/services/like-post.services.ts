import { LikeModel } from "../models/likes.model";
import { PostModel } from "../models/posts.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";

export const likePostServices = async(token: any, postId: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        let checkPost: any = await PostModel.findOne({_id:postId});
        if(!checkPost){
            return 0;
        }
        const isAlreadyLiked = await LikeModel.findOne({post_id:postId,user_id:decode.id});
        if(isAlreadyLiked){
            return 0;
        }
        let count = checkPost.likes_count + 1;
        await LikeModel.create({post_id:postId, user_id:decode.id});
        await PostModel.findOneAndUpdate({_id:postId, user_id:decode.id},{$set:{likes_count:count}});
        return true;

    } catch (error) {
        console.error('There is error in like post services',error.message);
    }
}

