import { PostImagesModel } from "../models/postImages.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";
import fs from 'fs';


export const postPicsService = async(token: any, payload: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const files = payload;
        const bufferArray = [];
        for(let file in files){
            const fileData = fs.readFileSync(files[file].path);
            const bufferData = Buffer.from(fileData);
            bufferArray.push(bufferData);
        }
        await PostImagesModel.create({user_id:decode.id,images:bufferArray,caption:payload.caption,description:payload.description});
        return true;
    } catch (error) {
        console.error('There is some error in post pics controller\n',error.message);
        return false;
    }
}