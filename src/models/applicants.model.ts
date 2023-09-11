import mongoose, { Schema, model } from 'mongoose';
import { UserDocument } from './user.model';
import { ComapanyJobs } from './jobs.model';

export interface Applicants extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    job_id: ComapanyJobs | Schema.Types.ObjectId,

}

export const applicantsSchema = new Schema<Applicants>({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    job_id: {
        type: Schema.Types.ObjectId,
        ref: 'jobs'
    }

})

applicantsSchema.set('timestamps', true)

export const ApplicantModel = model<Applicants>('applicants', applicantsSchema)
