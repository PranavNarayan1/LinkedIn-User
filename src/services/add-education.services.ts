import { EducationModel, UserModel } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";




export const addEducationServices = async(token: any, req: any) => {
    
    try {
        const decode: any = decodeAccessJwtToken(token);
        const isUser = await UserModel.findOne({_id:decode.id})
        console.log(isUser)
        if(isUser){
            const{school_name,degree,field_of_study,start_date,end_date} = req;
            await EducationModel.create({user_id:decode.id,school_name:school_name,degree:degree,field_of_study:field_of_study,start_date:start_date,end_date:end_date});  
            return true;           
        }
        return false;        

    } catch (error) {
        console.error('There is some error in add education services\n',error.message);
        return false;
    }

}