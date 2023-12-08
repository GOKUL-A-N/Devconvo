import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
    {
        title: {
            type: 'String',
            required: true,
        },
        user:{
            type:mongoose.Types.ObjectId, 
            ref:'User'
        },
        description: {
            type: 'Array',
            required: true,
        },
        image: {
            type: 'String',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)


export const Blogs = mongoose.model('blog',blogSchema);
