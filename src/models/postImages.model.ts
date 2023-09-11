import mongoose, { Schema, model} from 'mongoose';
import { UserDocument} from './user.model';

export interface PostImages extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    images: Schema.Types.Array,
    caption: Schema.Types.String,
    description: Schema.Types.String,
    likes_count: Schema.Types.Number,
    comments_count: Schema.Types.Number,
}

export const postImageSchema = new Schema<PostImages>({

    user_id: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    images:{
        type:Schema.Types.Array,
        required: true
    },
    caption: {
        type: Schema.Types.String,
        required: false
    },
    description: {
        type: Schema.Types.String,
        required: false
    },
    likes_count:{
        type:Schema.Types.Number,
        required: true,
        default: 0
    },
    comments_count: {
        type: Schema.Types.Number,
        required: true,
        default: 0
    }

    
})

postImageSchema.set('timestamps', true);


export const PostImagesModel = model<PostImages>('postsImage', postImageSchema);