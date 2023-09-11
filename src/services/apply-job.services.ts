import { ObjectId } from "mongoose";
import { ApplicantModel } from "../models/applicants.model";
import { decodeAccessJwtToken } from "../utils/generateJwt"



export const applyJobService = async(token: any, req: any) => {
    try {
        const decode: any = decodeAccessJwtToken(token);
        const jobId: ObjectId = req.jobID;
        await ApplicantModel.create({user_id:decode.id,job_id:jobId});
        return true;

    } catch (error) {
        console.error("There is some error in apply job services\n",error.message);
        return false;
    }
}