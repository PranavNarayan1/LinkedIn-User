import mongoose, { Schema, model } from 'mongoose';

export interface Comapny extends mongoose.Document{

    name:Schema.Types.String,
    location:Schema.Types.String,
    about: Schema.Types.String,
    post:Schema.Types.Buffer,
    total_employee: Schema.Types.Number,
    profile_picture: Schema.Types.Buffer

}

export const companySchema = new Schema<Comapny>({

    name: {
        type: Schema.Types.String,
        required: true,
    },
    location: {
        type:Schema.Types.String,
        required: true,
    },
    about: {
        type: Schema.Types.String,
        required: true
    },
    post: {
        type: Schema.Types.Buffer,
        required: false
    },
    total_employee: {
        type: Schema.Types.String,
        required: false
    },
    profile_picture: {
        type: Schema.Types.Buffer,
        required: false
    }

})

companySchema.set('timestamps', true)

export const CompanyModel = model<Comapny>('companies', companySchema)