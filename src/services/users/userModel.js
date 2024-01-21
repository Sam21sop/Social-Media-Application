import mongoose from "mongoose";
import bcrypt from 'bcrypt';


// Create user schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})


UserSchema.pre('save', async function (next) {
        try {
            if (!this.isModified('password') || this.isModified('password') && typeof this.password === 'string') {
                const hashedPassword = await bcrypt.hash(this.password, 10);
                this.password = hashedPassword;
            }
            return next();
        } 
        catch (error) {
            return next(error);
        }
});



export const userModel = mongoose.model('User', UserSchema);