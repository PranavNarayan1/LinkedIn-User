import { ExperianceModel } from "../models/experiances.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";



export const addExperianceServices = async(token: any, req:any) => {

    try {
        const decode: any = decodeAccessJwtToken(token);
        const {title,company,location,start_date,end_date,description} = req;
        await ExperianceModel.create({user_id:decode.id,title:title,company:company,location:location,start_date:start_date,end_date:end_date,description:description});
        return true;
    } catch (error) {
        console.error('There is an error in the add experiance services\n',error.message);
        return false;
    }

}