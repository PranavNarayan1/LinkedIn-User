import { PostModel } from "../models/posts.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";


export const createPostService = async(token: any,content: string) => {
    try {
        
        const decode: any= decodeAccessJwtToken(token);
        await PostModel.create({user_id:decode.id,content:content});
        return true;

    } catch (error) {
        console.error('There is a error in create post services',error.message);
    }
}