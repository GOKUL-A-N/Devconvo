import mongoose from 'mongoose';

const loginSchema = mongoose.Schema(
    {
        username: {
            type: 'String',
            required: true,
            unique: true,
            min: 4,
        },
        password: {
            type: 'String',
            required: true,
        },
        email: {
            type: 'String',
            required: true,
            unique: true,
        },
        blogs: [
            {
              type: mongoose.Types.ObjectId,
              ref: "Blog",
            },
        ],
    },
    {
        timestamps: true,
    }
)

export const login = mongoose.model('Login', loginSchema);