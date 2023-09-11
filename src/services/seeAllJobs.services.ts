import { JobModel } from "../models/jobs.model";
import { UserModel } from "../models/user.model";
import { decodeAccessJwtToken } from "../utils/generateJwt";


export const seeAllJobsServices = async(token: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const userData = await UserModel.findOne({_id:decode.id});
        const releventJobs = await JobModel.find({skills:{$in: userData.skills}});
        return releventJobs;
    } catch (error) {
        console.error('There is some error in see all jobs services\n',error.message);
        return false;
    }
}